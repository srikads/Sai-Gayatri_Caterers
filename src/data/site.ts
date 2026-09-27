import type { L10n } from './types';

/** Single source of truth for business facts. Only verified facts go here. */
export const site = {
  name: { en: 'Sai Gayatri Caterers', te: 'సాయి గాయత్రి క్యాటరర్స్' } as L10n,
  url: 'https://sai-gayatri-caterers.vercel.app',
  since: 1998,
  phone: '+919849142922',
  phoneDisplay: '+91 98491 42922',
  whatsapp: '919849142922',
  email: 'saigayatricaterers@gmail.com',
  googleReviewUrl: 'https://share.google/gtsP8at1miGNGFwgP',
  address: {
    street: '7-57/1, Opposite Venkateswara Swamy Temple, Shirdi Nagar',
    locality: 'Almasguda',
    region: 'Telangana',
    postalCode: '500097',
    country: 'IN',
    display: {
      en: '7-57/1, Opposite Venkateswara Swamy Temple, Shirdi Nagar, Almasguda, Hyderabad, Telangana 500097',
      te: '7-57/1, వేంకటేశ్వర స్వామి ఆలయం ఎదురుగా, షిర్డీ నగర్, అల్మాస్‌గూడ, హైదరాబాద్, తెలంగాణ 500097',
    } as L10n,
  },
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=Sai+Gayatri+Caterers+Shirdi+Nagar+Almasguda+Hyderabad',
  /** Primary service area first. */
  areas: {
    primary: {
      en: 'Hyderabad, Secunderabad & surrounding areas',
      te: 'హైదరాబాద్, సికింద్రాబాద్ & పరిసర ప్రాంతాలు',
    } as L10n,
    cities: [
      { en: 'Vijayawada', te: 'విజయవాడ' },
      { en: 'Visakhapatnam', te: 'విశాఖపట్నం' },
      { en: 'Kurnool', te: 'కర్నూలు' },
      { en: 'Warangal', te: 'వరంగల్' },
      { en: 'Karimnagar', te: 'కరీంనగర్' },
    ] as L10n[],
    localities: [
      'Almasguda', 'LB Nagar', 'Dilsukhnagar', 'Vanasthalipuram', 'Saroornagar', 'Kothapet',
      'Hayathnagar', 'Balapur', 'Badangpet', 'Meerpet', 'Uppal', 'Nagole', 'Malakpet',
      'Secunderabad', 'Kukatpally', 'Ameerpet', 'Gachibowli', 'Madhapur',
    ],
  },
};

export function whatsappLink(text: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}
