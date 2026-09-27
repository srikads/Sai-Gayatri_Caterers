export type Lang = 'en' | 'te';

/** A string in both site languages. */
export type L10n = Record<Lang, string>;

export interface Dish {
  en: string;
  te: string;
}

export interface MenuCategory {
  id: string;
  icon: string;
  name: L10n;
  /** Signature Telugu categories are featured; the rest go under "Also available on request". */
  featured: boolean;
  dishes: Dish[];
}

export type OccasionGroup = 'life' | 'home' | 'festival';

export interface Occasion {
  slug: string;
  group: OccasionGroup;
  icon: string;
  name: L10n;
  /** One or two sentences on what the occasion is and how we cater it. */
  blurb: L10n;
  /** Sample menu, same order in both languages. */
  menu: { en: string[]; te: string[] };
}

/** Ancestral rites (Aabdhikam, Masikam, Taddinam...). Shown on a separate, sober page. */
export interface Rite {
  slug: string;
  name: L10n;
  blurb: L10n;
}

export interface Faq {
  q: L10n;
  a: L10n;
}
