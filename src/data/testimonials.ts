import type { L10n } from './types';

export interface Testimonial {
  /** Reviewer name as shown on Google. */
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Quote in the original language; add the other language if available. */
  quote: Partial<L10n> & { en: string };
  occasion?: L10n;
}

/**
 * Real Google reviews only, copied with the reviewer's name.
 * The Reviews section shows these cards once this list has entries;
 * until then it shows just the "Rate us on Google" button.
 */
export const testimonials: Testimonial[] = [];
