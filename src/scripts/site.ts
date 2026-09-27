const header = document.querySelector<HTMLElement>('[data-header]');
const navToggle = document.querySelector<HTMLButtonElement>('[data-nav-toggle]');
const dropdowns = [...document.querySelectorAll<HTMLElement>('[data-dropdown]')];

// Mobile drawer
function setNav(open: boolean) {
  if (!header || !navToggle) return;
  header.classList.toggle('nav-open', open);
  document.body.classList.toggle('nav-locked', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.setAttribute('aria-label', (open ? navToggle.dataset.labelClose : navToggle.dataset.labelOpen) ?? '');
}

navToggle?.addEventListener('click', () => setNav(!header?.classList.contains('nav-open')));

// Dropdowns: click/tap/keyboard toggles; hover is handled in CSS on desktop.
function setDropdown(dd: HTMLElement, open: boolean) {
  dd.toggleAttribute('data-open', open);
  dd.querySelector('button')?.setAttribute('aria-expanded', String(open));
}

dropdowns.forEach((dd) => {
  const btn = dd.querySelector('button');
  btn?.addEventListener('click', () => {
    const open = !dd.hasAttribute('data-open');
    dropdowns.forEach((other) => other !== dd && setDropdown(other, false));
    setDropdown(dd, open);
  });
});

document.addEventListener('click', (e) => {
  const target = e.target as Node;
  dropdowns.forEach((dd) => !dd.contains(target) && setDropdown(dd, false));
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  const openDd = dropdowns.find((dd) => dd.hasAttribute('data-open'));
  if (openDd) {
    setDropdown(openDd, false);
    openDd.querySelector('button')?.focus();
  } else if (header?.classList.contains('nav-open')) {
    setNav(false);
    navToggle?.focus();
  }
});

// Close the drawer after following an in-page link.
document.querySelectorAll<HTMLAnchorElement>('[data-nav] a').forEach((a) =>
  a.addEventListener('click', () => {
    setNav(false);
    dropdowns.forEach((dd) => setDropdown(dd, false));
  }),
);

// Reset drawer state when resizing up to desktop.
matchMedia('(min-width: 1025px)').addEventListener('change', (e) => e.matches && setNav(false));

// Remember language choice.
document.querySelectorAll<HTMLAnchorElement>('[data-lang-switch]').forEach((a) =>
  a.addEventListener('click', () => {
    try {
      localStorage.setItem('sgc-lang', a.dataset.langSwitch ?? 'en');
    } catch {
      /* storage unavailable: the link still works */
    }
  }),
);

// Header shadow once the page scrolls.
const onScroll = () => header?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });
