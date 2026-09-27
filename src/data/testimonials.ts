import type { L10n } from './types';

export interface Testimonial {
  /** Reviewer name as shown on Google. */
  name: string;
  rating: 1 | 2 | 3 | 4 | 5;
  /** Original English text, plus a Telugu translation (shown with a "translated" note). */
  quote: Partial<L10n> & { en: string };
  occasion?: L10n;
}

/** Real Google reviews, copied with the reviewer's name. Keep the English text verbatim. */
export const testimonials: Testimonial[] = [
  {
    name: 'Jayaprada Alladi',
    rating: 5,
    quote: {
      en: '100% Satisfaction... A very responsible service given at any given point of time... We have been taking their services for the past 8 yrs... Every function of ours was catered by Sri. Satyanarayana Murthy garu... thanks a million for your services.',
      te: '100% సంతృప్తి... ఎప్పుడైనా చాలా బాధ్యతాయుతమైన సేవ... గత 8 సంవత్సరాలుగా వీరి సేవలు తీసుకుంటున్నాం... మా ప్రతి శుభకార్యానికి శ్రీ సత్యనారాయణ మూర్తి గారే వంట చేశారు... మీ సేవలకు కోటి ధన్యవాదాలు.',
    },
  },
  {
    name: 'Tirupathi Saraswathi',
    rating: 5,
    quote: {
      en: 'We have given an order for our sister’s marriage on 28th February 2019. The food served was really very good :) This was not the first time that we have ordered. We have known them for 5 years and ever since we have not been disappointed even once by taking the decision.',
      te: '2019 ఫిబ్రవరి 28న మా చెల్లెలి పెళ్లికి ఆర్డర్ ఇచ్చాం. వడ్డించిన భోజనం నిజంగా చాలా బాగుంది :) మేము ఆర్డర్ ఇవ్వడం ఇదే మొదటిసారి కాదు. 5 సంవత్సరాలుగా వీరు తెలుసు, అప్పటి నుండి ఒక్కసారి కూడా నిరాశ చెందలేదు.',
    },
    occasion: { en: 'Wedding', te: 'పెళ్లి' },
  },
  {
    name: 'NC Deevena',
    rating: 5,
    quote: {
      en: 'The most trust-worthy and hygienic caterers in the city. They are very professional and can serve at any kind of family event appropriately. The food is very clean, tasty and always served hot. They can make a wide selection of sweets also.',
      te: 'నగరంలోనే అత్యంత నమ్మకమైన, పరిశుభ్రమైన క్యాటరర్స్. చాలా ప్రొఫెషనల్‌గా ఉంటారు, ఏ కుటుంబ శుభకార్యానికైనా తగిన విధంగా వడ్డిస్తారు. భోజనం చాలా శుభ్రంగా, రుచిగా, ఎప్పుడూ వేడిగా వడ్డిస్తారు. రకరకాల స్వీట్లు కూడా చేస్తారు.',
    },
  },
  {
    name: 'Paluri Janaki',
    rating: 5,
    quote: {
      en: 'They have always done an amazing job. Their food is not only tasty but also healthy. It is served with love and utmost hygiene. Our whole family would 100 percent recommend this catering service to anyone and everyone.',
      te: 'వారు ఎప్పుడూ అద్భుతంగా చేశారు. వారి భోజనం రుచిగానే కాదు, ఆరోగ్యకరంగా కూడా ఉంటుంది. ప్రేమతో, అత్యంత పరిశుభ్రతతో వడ్డిస్తారు. మా కుటుంబమంతా ఈ క్యాటరింగ్ సేవను అందరికీ 100 శాతం సిఫార్సు చేస్తుంది.',
    },
  },
  {
    name: 'Madhu Nallan Chakravarthy',
    rating: 5,
    quote: {
      en: 'The feasts they organize are amazing. They are known for their punctuality and discipline. The taste of the sweets they make is indescribable. The cleanliness they practice is healthy. Murthy is a good friend. The bond you have with them will last forever. 👍😊🙏🏽👏👏',
      te: 'వారు ఏర్పాటు చేసే విందులు అద్భుతం. సమయపాలన, క్రమశిక్షణకు వారు పేరుపొందారు. వారు చేసే స్వీట్ల రుచి మాటల్లో చెప్పలేనిది. వారు పాటించే శుభ్రత ఆరోగ్యకరం. మూర్తి గారు మంచి మిత్రులు. వారితో ఏర్పడే అనుబంధం ఎప్పటికీ నిలిచి ఉంటుంది. 👍😊🙏🏽👏👏',
    },
  },
];
