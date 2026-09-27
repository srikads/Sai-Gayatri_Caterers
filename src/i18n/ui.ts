import type { Lang } from '../data/types';

export const languages: Record<Lang, string> = { en: 'English', te: 'తెలుగు' };
export const defaultLang: Lang = 'en';

/** Site routes, without language prefix. English lives at the root, Telugu under /te. */
export function localePath(lang: Lang, path = '/') {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '/' : clean}`;
}

export function stripLang(pathname: string) {
  return pathname.replace(/^\/te(?=\/|$)/, '') || '/';
}

const en = {
  'meta.title': 'Sai Gayatri Caterers | Brahmin & Pure Veg Caterers in Hyderabad since 1998',
  'meta.description':
    'Authentic Telugu Brahmin vantalu for weddings, upanayanam, gruhapravesam, vrathams and ancestral rites. Madi cooking, no onion-garlic on request, pure cow ghee. Serving Hyderabad since 1998.',
  'brand.tagline': 'Telugu Brahmin Vantalu · Since 1998',

  'nav.home': 'Home',
  'nav.occasions': 'Occasions',
  'nav.menu': 'Menu',
  'nav.rites': 'Ancestral Rites',
  'nav.services': 'Services',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.open': 'Open menu',
  'nav.close': 'Close menu',
  'nav.allOccasions': 'All occasions',
  'nav.fullMenu': 'Full menu',

  'cta.whatsapp': 'WhatsApp Us',
  'cta.call': 'Call Now',
  'cta.quote': 'Get a Free Quote',
  'cta.enquire': 'Enquire for this occasion',
  'cta.viewMenu': 'View Our Menu',
  'cta.viewOccasions': 'Browse Occasions',

  'hero.eyebrow': 'Pure Vegetarian · Brahmin Cooks · Since 1998',
  'hero.title': 'Authentic Telugu Brahmin vantalu for every sacred occasion',
  'hero.lead':
    'From Pelli and Upanayanam to Gruhapravesam and Vratham, we cook the way your family does: in madi, with pure cow ghee, and with care for every tradition.',

  'trust.years': '25+ years',
  'trust.yearsSub': 'serving families since 1998',
  'trust.cooks': 'Brahmin cooks',
  'trust.cooksSub': 'madi & aacharam cooking',
  'trust.min': 'No minimum order',
  'trust.minSub': 'small poojas to grand weddings',
  'trust.tasting': 'Free food tasting',
  'trust.tastingSub': 'before you book',

  'promise.title': 'Our promise of purity',
  'promise.lead': 'Every family has its own customs. We follow yours.',
  'promise.madi.t': 'Madi & aacharam',
  'promise.madi.d': 'Cooked fresh on the day by Brahmin cooks, following aacharam at every step.',
  'promise.sattvic.t': 'No onion & garlic on request',
  'promise.sattvic.d': 'Sattvic menus without onion and garlic, on request, for poojas, vrathams and rites.',
  'promise.ghee.t': 'Pure cow ghee',
  'promise.ghee.d': 'Sweets, pongali and naivedyam prepared in pure cow ghee.',
  'promise.leaf.t': 'Banana-leaf service',
  'promise.leaf.d': 'Traditional vistari / banana-leaf sit-down meals, served in the proper order.',
  'promise.tradition.t': 'Every regional tradition',
  'promise.tradition.d': 'Andhra, Telangana and Rayalaseema styles. Tell us your family’s rules and we follow them.',
  'promise.fresh.t': 'Fresh, never reheated',
  'promise.fresh.d': 'Nothing prepared in advance or bought outside. Everything is made in our own kitchens.',

  'occasions.title': 'Catering for every occasion',
  'occasions.lead': 'Sample menus for each occasion, customised to your family’s tradition.',
  'occasions.group.life': 'Samskaras & life events',
  'occasions.group.home': 'Poojas & home functions',
  'occasions.group.festival': 'Festivals',
  'occasions.sampleMenu': 'Sample menu',
  'occasions.customise':
    'This is a sample. Every menu is customised: add or swap items, choose no onion and garlic, and follow your family’s tradition.',
  'occasions.other': 'Other occasions',

  'services.title': 'How we can serve you',
  'services.full.t': 'Full catering',
  'services.full.d': 'Cooking, serving staff, banana leaves or plates, and clean-up. You focus on the ceremony.',
  'services.cooks.t': 'Cooks only (Vantavallu)',
  'services.cooks.d': 'Our Brahmin cooks come to your home or venue. You provide the groceries and we cook in madi.',
  'services.rites.t': 'Madi vanta for rites',
  'services.rites.d': 'Aabdhikam, Masikam and Taddinam cooking done strictly as per shastra and your family’s rules.',
  'services.festival.t': 'Festival sweets & snacks',
  'services.festival.d': 'Ariselu, sakinalu, bobbatlu, laddus and pindi vantalu made to order for festivals and functions.',

  'menu.title': 'Our menu',
  'menu.lead':
    'Signature Telugu Brahmin dishes, plus North Indian, chaat and more on request. All menus are 100% vegetarian and fully customisable.',
  'menu.signature': 'Signature Telugu dishes',
  'menu.onRequest': 'Also available on request',
  'menu.search': 'Search dishes…',
  'menu.noResults': 'No dishes match your search.',
  'menu.items': 'items',
  'menu.expandAll': 'Expand all',
  'menu.collapseAll': 'Collapse all',
  'menu.buildNote': 'Pick your favourites and send them to us on WhatsApp. We’ll suggest a balanced menu.',

  'rites.title': 'Ancestral rites',
  'rites.lead':
    'For Aabdhikam, Masikam, Taddinam and related rites, we prepare food strictly in madi, following shastra and your family’s tradition, with the quiet respect these days deserve.',
  'rites.note':
    'Please call or WhatsApp us with the date, tithi and any family-specific rules. Our cooks can also come to your home (cooks-only service).',

  'areas.title': 'Where we serve',
  'areas.lead': 'Mainly Hyderabad and nearby areas, with kitchens and teams across the Telugu states.',
  'areas.primaryTitle': 'Hyderabad & surroundings',
  'areas.citiesTitle': 'Also serving',

  'reviews.title': 'What families say',
  'reviews.lead': 'Read our reviews on Google, or share your own experience.',
  'reviews.cta': 'Rate us on Google',

  'faq.title': 'Frequently asked questions',

  'enquiry.title': 'Plan your event with us',
  'enquiry.lead': 'Share a few details and we’ll reply on WhatsApp with menu ideas and a quote. Tasting is free.',
  'enquiry.name': 'Your name',
  'enquiry.occasion': 'Occasion',
  'enquiry.occasionPick': 'Select an occasion',
  'enquiry.date': 'Event date',
  'enquiry.guests': 'Number of guests',
  'enquiry.area': 'Area / venue',
  'enquiry.service': 'Service',
  'enquiry.service.full': 'Full catering',
  'enquiry.service.cooks': 'Cooks only',
  'enquiry.service.sweets': 'Sweets & snacks order',
  'enquiry.sattvic': 'No onion, no garlic',
  'enquiry.notes': 'Anything else? (menu ideas, family customs)',
  'enquiry.submit': 'Send on WhatsApp',
  'enquiry.orCall': 'Prefer to talk? Call us',
  'enquiry.msgIntro': 'Namaskaram! I would like a catering quote.',

  'contact.title': 'Contact us',
  'contact.phone': 'Phone',
  'contact.email': 'Email',
  'contact.address': 'Kitchen & office',
  'contact.directions': 'Get directions',

  'footer.rights': 'All rights reserved.',
  'footer.pureVeg': '100% pure vegetarian',
  'footer.quick': 'Quick links',

  'wa.default': 'Namaskaram! I would like to know more about your catering services.',
  'wa.float': 'Chat on WhatsApp',
  'lang.switch': 'తెలుగు',
  'lang.switchLabel': 'Read this page in Telugu',
  'skip': 'Skip to content',
};

export type UIKey = keyof typeof en;

const te: Record<UIKey, string> = {
  'meta.title': 'సాయి గాయత్రి క్యాటరర్స్ | హైదరాబాద్‌లో బ్రాహ్మణ & శుద్ధ శాకాహార క్యాటరర్స్, 1998 నుండి',
  'meta.description':
    'పెళ్లి, ఉపనయనం, గృహప్రవేశం, వ్రతాలు మరియు పితృ కార్యాలకు అసలైన తెలుగు బ్రాహ్మణ వంటలు. మడి వంట, కోరితే ఉల్లి-వెల్లుల్లి లేకుండా, స్వచ్ఛమైన ఆవు నెయ్యి. 1998 నుండి హైదరాబాద్‌లో సేవలు.',
  'brand.tagline': 'తెలుగు బ్రాహ్మణ వంటలు · 1998 నుండి',

  'nav.home': 'హోమ్',
  'nav.occasions': 'సందర్భాలు',
  'nav.menu': 'మెనూ',
  'nav.rites': 'పితృ కార్యాలు',
  'nav.services': 'సేవలు',
  'nav.about': 'మా గురించి',
  'nav.contact': 'సంప్రదించండి',
  'nav.open': 'మెనూ తెరవండి',
  'nav.close': 'మెనూ మూసివేయండి',
  'nav.allOccasions': 'అన్ని సందర్భాలు',
  'nav.fullMenu': 'పూర్తి మెనూ',

  'cta.whatsapp': 'వాట్సాప్ చేయండి',
  'cta.call': 'కాల్ చేయండి',
  'cta.quote': 'ఉచిత కొటేషన్ పొందండి',
  'cta.enquire': 'ఈ సందర్భం కోసం సంప్రదించండి',
  'cta.viewMenu': 'మా మెనూ చూడండి',
  'cta.viewOccasions': 'సందర్భాలు చూడండి',

  'hero.eyebrow': 'శుద్ధ శాకాహారం · బ్రాహ్మణ వంటవాళ్ళు · 1998 నుండి',
  'hero.title': 'ప్రతి శుభ సందర్భానికి అసలైన తెలుగు బ్రాహ్మణ వంటలు',
  'hero.lead':
    'పెళ్లి, ఉపనయనం నుండి గృహప్రవేశం, వ్రతాల వరకు, మీ ఇంట్లో వండినట్టే వండుతాం: మడిలో, స్వచ్ఛమైన ఆవు నెయ్యితో, ప్రతి సంప్రదాయాన్ని గౌరవిస్తూ.',

  'trust.years': '25+ సంవత్సరాలు',
  'trust.yearsSub': '1998 నుండి కుటుంబాలకు సేవ',
  'trust.cooks': 'బ్రాహ్మణ వంటవాళ్ళు',
  'trust.cooksSub': 'మడి & ఆచారంతో వంట',
  'trust.min': 'కనీస ఆర్డర్ లేదు',
  'trust.minSub': 'చిన్న పూజల నుండి పెద్ద పెళ్లిళ్ల వరకు',
  'trust.tasting': 'ఉచిత రుచి చూపు',
  'trust.tastingSub': 'బుక్ చేసే ముందు',

  'promise.title': 'మా శుద్ధత హామీ',
  'promise.lead': 'ప్రతి కుటుంబానికి తమ ఆచారాలు ఉంటాయి. మేము మీ ఆచారాలనే పాటిస్తాం.',
  'promise.madi.t': 'మడి & ఆచారం',
  'promise.madi.d': 'బ్రాహ్మణ వంటవాళ్ళు ఆచారం పాటిస్తూ అదే రోజు తాజాగా వండుతారు.',
  'promise.sattvic.t': 'కోరితే ఉల్లి, వెల్లుల్లి లేకుండా',
  'promise.sattvic.d': 'పూజలు, వ్రతాలు, కార్యాలకు కోరితే ఉల్లి-వెల్లుల్లి లేని సాత్విక భోజనం.',
  'promise.ghee.t': 'స్వచ్ఛమైన ఆవు నెయ్యి',
  'promise.ghee.d': 'స్వీట్లు, పొంగలి, నైవేద్యం స్వచ్ఛమైన ఆవు నెయ్యితో తయారీ.',
  'promise.leaf.t': 'అరటి ఆకు భోజనం',
  'promise.leaf.d': 'సంప్రదాయ విస్తరి / అరటి ఆకులో, సరైన క్రమంలో వడ్డన.',
  'promise.tradition.t': 'ప్రతి ప్రాంత సంప్రదాయం',
  'promise.tradition.d': 'ఆంధ్ర, తెలంగాణ, రాయలసీమ పద్ధతులు. మీ కుటుంబ నియమాలు చెప్పండి, వాటినే పాటిస్తాం.',
  'promise.fresh.t': 'తాజాగా, మళ్ళీ వేడి చేయకుండా',
  'promise.fresh.d': 'ముందుగా చేసినవి లేదా బయట కొన్నవి ఉండవు. అన్నీ మా వంటశాలల్లోనే తయారు.',

  'occasions.title': 'ప్రతి సందర్భానికి క్యాటరింగ్',
  'occasions.lead': 'ప్రతి సందర్భానికి నమూనా మెనూలు, మీ కుటుంబ సంప్రదాయానికి తగ్గట్టు మార్చుకోవచ్చు.',
  'occasions.group.life': 'సంస్కారాలు & జీవిత వేడుకలు',
  'occasions.group.home': 'పూజలు & ఇంటి శుభకార్యాలు',
  'occasions.group.festival': 'పండుగలు',
  'occasions.sampleMenu': 'నమూనా మెనూ',
  'occasions.customise':
    'ఇది కేవలం నమూనా మాత్రమే. ప్రతి మెనూ మీ ఇష్టానికి తగ్గట్టు: పదార్థాలు మార్చుకోవచ్చు, ఉల్లి-వెల్లుల్లి లేకుండా ఎంచుకోవచ్చు, మీ కుటుంబ సంప్రదాయం పాటిస్తాం.',
  'occasions.other': 'ఇతర సందర్భాలు',

  'services.title': 'మా సేవలు',
  'services.full.t': 'పూర్తి క్యాటరింగ్',
  'services.full.d': 'వంట, వడ్డన సిబ్బంది, అరటి ఆకులు లేదా ప్లేట్లు, శుభ్రత అన్నీ మావే. మీరు కార్యక్రమంపై దృష్టి పెట్టండి.',
  'services.cooks.t': 'వంటవాళ్ళు మాత్రమే',
  'services.cooks.d': 'మా బ్రాహ్మణ వంటవాళ్ళు మీ ఇంటికి లేదా వేదికకు వస్తారు. సరుకులు మీవి, మడి వంట మాది.',
  'services.rites.t': 'కార్యాలకు మడి వంట',
  'services.rites.d': 'ఆబ్దికం, మాసికం, తద్దినం వంటలు శాస్త్రం మరియు మీ కుటుంబ నియమాల ప్రకారం.',
  'services.festival.t': 'పండుగ స్వీట్లు & పిండి వంటలు',
  'services.festival.d': 'అరిసెలు, సకినాలు, బొబ్బట్లు, లడ్డూలు, పిండి వంటలు పండుగలకు, శుభకార్యాలకు ఆర్డర్‌పై.',

  'menu.title': 'మా మెనూ',
  'menu.lead':
    'ప్రత్యేక తెలుగు బ్రాహ్మణ వంటకాలు, కోరితే నార్త్ ఇండియన్, చాట్ మొదలైనవి కూడా. అన్ని మెనూలు 100% శాకాహారం, పూర్తిగా మార్చుకోవచ్చు.',
  'menu.signature': 'ప్రత్యేక తెలుగు వంటకాలు',
  'menu.onRequest': 'కోరితే అందుబాటులో',
  'menu.search': 'వంటకం వెతకండి…',
  'menu.noResults': 'మీ వెతుకులాటకు వంటకాలు దొరకలేదు.',
  'menu.items': 'వంటకాలు',
  'menu.expandAll': 'అన్నీ తెరవండి',
  'menu.collapseAll': 'అన్నీ మూసివేయండి',
  'menu.buildNote': 'మీకు నచ్చినవి ఎంచుకొని వాట్సాప్‌లో పంపండి. సమతుల్యమైన మెనూ సూచిస్తాం.',

  'rites.title': 'పితృ కార్యాలు',
  'rites.lead':
    'ఆబ్దికం, మాసికం, తద్దినం వంటి కార్యాలకు శాస్త్రం మరియు మీ కుటుంబ సంప్రదాయం ప్రకారం, పూర్తిగా మడిలో, ఆ రోజులకు తగిన గౌరవంతో వంట చేస్తాం.',
  'rites.note':
    'దయచేసి తేదీ, తిథి మరియు మీ కుటుంబ నియమాలతో కాల్ లేదా వాట్సాప్ చేయండి. మా వంటవాళ్ళు మీ ఇంటికి కూడా వస్తారు.',

  'areas.title': 'మేము సేవ చేసే ప్రాంతాలు',
  'areas.lead': 'ముఖ్యంగా హైదరాబాద్ మరియు పరిసర ప్రాంతాలు, తెలుగు రాష్ట్రాలంతటా మా బృందాలు ఉన్నాయి.',
  'areas.primaryTitle': 'హైదరాబాద్ & పరిసరాలు',
  'areas.citiesTitle': 'ఇక్కడ కూడా సేవలు',

  'reviews.title': 'కుటుంబాల అభిప్రాయాలు',
  'reviews.lead': 'గూగుల్‌లో మా రివ్యూలు చదవండి, లేదా మీ అనుభవం పంచుకోండి.',
  'reviews.cta': 'గూగుల్‌లో రేట్ చేయండి',

  'faq.title': 'తరచుగా అడిగే ప్రశ్నలు',

  'enquiry.title': 'మీ కార్యక్రమం మాతో ప్లాన్ చేయండి',
  'enquiry.lead': 'కొన్ని వివరాలు ఇవ్వండి, మెనూ సూచనలు మరియు కొటేషన్ వాట్సాప్‌లో పంపుతాం. రుచి చూపు ఉచితం.',
  'enquiry.name': 'మీ పేరు',
  'enquiry.occasion': 'సందర్భం',
  'enquiry.occasionPick': 'సందర్భం ఎంచుకోండి',
  'enquiry.date': 'కార్యక్రమం తేదీ',
  'enquiry.guests': 'అతిథుల సంఖ్య',
  'enquiry.area': 'ప్రాంతం / వేదిక',
  'enquiry.service': 'సేవ',
  'enquiry.service.full': 'పూర్తి క్యాటరింగ్',
  'enquiry.service.cooks': 'వంటవాళ్ళు మాత్రమే',
  'enquiry.service.sweets': 'స్వీట్లు & పిండి వంటల ఆర్డర్',
  'enquiry.sattvic': 'ఉల్లి, వెల్లుల్లి లేకుండా',
  'enquiry.notes': 'ఇంకేమైనా? (మెనూ ఆలోచనలు, కుటుంబ ఆచారాలు)',
  'enquiry.submit': 'వాట్సాప్‌లో పంపండి',
  'enquiry.orCall': 'మాట్లాడాలనుకుంటున్నారా? కాల్ చేయండి',
  'enquiry.msgIntro': 'నమస్కారం! నాకు క్యాటరింగ్ కొటేషన్ కావాలి.',

  'contact.title': 'సంప్రదించండి',
  'contact.phone': 'ఫోన్',
  'contact.email': 'ఈమెయిల్',
  'contact.address': 'వంటశాల & కార్యాలయం',
  'contact.directions': 'దారి చూపించు',

  'footer.rights': 'సర్వ హక్కులు ప్రత్యేకించబడ్డాయి.',
  'footer.pureVeg': '100% శుద్ధ శాకాహారం',
  'footer.quick': 'ముఖ్య లింకులు',

  'wa.default': 'నమస్కారం! మీ క్యాటరింగ్ సేవల గురించి తెలుసుకోవాలనుకుంటున్నాను.',
  'wa.float': 'వాట్సాప్‌లో మాట్లాడండి',
  'lang.switch': 'English',
  'lang.switchLabel': 'Read this page in English',
  'skip': 'కంటెంట్‌కు వెళ్ళండి',
};

const dict: Record<Lang, Record<UIKey, string>> = { en, te };

export function useT(lang: Lang) {
  return (key: UIKey) => dict[lang][key];
}

/** getStaticPaths entries for a `[...lang]` route: English at the root, Telugu under /te. */
export function langStaticPaths() {
  return [
    { params: { lang: undefined }, props: { lang: 'en' as Lang } },
    { params: { lang: 'te' }, props: { lang: 'te' as Lang } },
  ];
}
