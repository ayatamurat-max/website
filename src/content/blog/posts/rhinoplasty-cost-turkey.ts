import type { Post } from '../types';
import ru from '../i18n/rhinoplasty-cost-turkey/ru';
import de from '../i18n/rhinoplasty-cost-turkey/de';
import fr from '../i18n/rhinoplasty-cost-turkey/fr';
import bg from '../i18n/rhinoplasty-cost-turkey/bg';

// Kaynak: Dr. Ayata'nın Türkçe taslağı (Kasım 2026). Fiyat içerdiği için Türkçe sürüm YOK ve Türkçe sitede gösterilmez.
const post: Post = {
  slug: 'rhinoplasty-cost-turkey',
  date: '2026-11-10',
  cover: '/blog/rhinoplasty-cost-turkey.svg',
  shareImage: '/blog/rhinoplasty-cost-turkey.jpg',
  procedure: { href: '/rinoplasti', icon: 'rhinoplasty' },
  excludeLocales: ['tr'],
  translations: {
    ru,
    de,
    fr,
    bg,
    en: {
      title: 'How much does rhinoplasty cost in Turkey? Surgery fee and total budget',
      description:
        'Rhinoplasty in Turkey: my fee is €2,300 including pre-operative tests. What is included, what is not, how long to stay and how much to budget in total.',
      readMinutes: 7,
      body: [
        { type: 'p', text: 'If you are researching rhinoplasty in Turkey, you have probably come across very different prices. A difference of several thousand euros for the same operation is confusing. On top of that, some centres publish only the surgery fee, while others offer packages that bundle hotels, transfers and various services.' },
        { type: 'p', text: 'Let me state my own fee clearly first: as of November 2026, my fee for standard primary rhinoplasty is €2,300, including pre-operative tests. In this article I explain what this fee includes, what it does not, and how much a patient travelling from abroad should budget in total.' },
        { type: 'h2', text: 'Why do rhinoplasty prices vary so much?' },
        { type: 'p', text: 'Rhinoplasty is the name of one operation, but the procedure is not the same for every patient.' },
        { type: 'p', text: 'For one patient, correcting a slight hump on the nasal bridge may be enough. Another may have a marked deviation, structural problems in the nasal tip, a deviated septum affecting breathing, or significant asymmetry. As the surgical plan changes, so do the scope, the duration and the technical requirements of the operation.' },
        { type: 'p', text: 'The hospital, anaesthesia services, the surgeon’s experience, the city’s operating costs and post-operative follow-up also contribute to price differences.' },
        { type: 'p', text: 'Another important distinction is between primary and revision rhinoplasty. Operating on a nose that has never had surgery is not the same as operating on one whose anatomy has been changed by previous surgery, with reduced cartilage support or scar tissue. Revision surgery sometimes requires cartilage from the ear or rib. That is why a price quoted for primary rhinoplasty should not be expected to apply to revision surgery.' },
        { type: 'h2', text: 'My rhinoplasty fee: €2,300' },
        { type: 'p', text: 'For international patients whom I assess at my practice in Kırklareli and operate on at Özel Medikent Hospital in Lüleburgaz, my fee for standard primary rhinoplasty is €2,300.' },
        { type: 'p', text: 'Included in the fee:' },
        {
          type: 'ul',
          items: [
            'Pre-operative tests',
            'Surgeon’s fee and the operation',
            'Anaesthesia',
            'One night in hospital',
            'Nasal splints and splint removal around day 7',
            'Check-ups in Türkiye',
            'One year of online follow-up after you return home',
          ],
        },
        { type: 'p', text: 'Not included in the fee:' },
        {
          type: 'ul',
          items: [
            'Accommodation (we can help you arrange it in Kırklareli)',
            'Flights, road travel and private transfers (we can arrange a transfer on request)',
            'Revision surgery or additional surgical needs (explained separately during your assessment)',
          ],
        },
        { type: 'p', text: 'Before travelling to Türkiye, a patient should know both the procedure that will be performed and the costs they may face. That is why I set out the scope clearly in a written treatment plan.' },
        { type: 'h2', text: 'How much should you budget in total?' },
        { type: 'p', text: 'An approximate budget for a patient travelling from abroad:' },
        {
          type: 'ul',
          items: [
            'Rhinoplasty (pre-operative tests included): €2,300',
            'Food and personal expenses for 7 days (€50–100 per day): €350–700',
            'Accommodation, 7 nights: varies by season',
            'Private transfer Istanbul Airport – Kırklareli, return: varies by season',
            'Flights: depend on your country',
          ],
        },
        { type: 'p', text: 'Because accommodation and transfer prices change with the season and demand, I do not give a fixed figure. When you plan your trip, write to us and we will send you the current prices for your dates.' },
        { type: 'p', text: 'Kırklareli is about 1 hour 40 minutes by road from Istanbul Airport (IST) – often about the same time it takes to get from the airport to central Istanbul in traffic. Make sure you book your flight to Istanbul Airport (IST), not Sabiha Gökçen (SAW) on the Asian side, which is considerably further away.' },
        { type: 'p', text: 'For comparison: in the United Kingdom, published guide prices for rhinoplasty at private hospitals range from about £4,354 to £9,825, with typical prices at the large hospital groups around £7,400–8,000. What these prices include varies from hospital to hospital.' },
        { type: 'h2', text: 'Why is rhinoplasty in Turkey more affordable than in some European countries?' },
        { type: 'p', text: 'The price of an operation is not determined only by the time spent in the operating theatre. Hospital costs, staff salaries, rent, insurance, taxes and general running costs vary from country to country, and even between cities in the same country.' },
        { type: 'p', text: 'These cost differences are one of the reasons why some operations can be offered in Türkiye at lower prices than in Western Europe. Running costs in a smaller city such as Kırklareli also differ from those in central Istanbul, which affects pricing too.' },
        { type: 'p', text: 'There is an important distinction here: a lower price does not in itself mean lower quality, just as a higher price does not guarantee a better surgical result. Price should not be considered separately from the surgeon’s experience, the hospital’s standards and the follow-up plan.' },
        { type: 'h2', text: 'How long do you need to stay in Türkiye?' },
        { type: 'p', text: 'I recommend that patients travelling from abroad plan a stay of about one week. During this time the examination and tests are completed, the operation is performed, and around day 7 the splint is removed at a check-up. The exact timing of your return flight is decided according to the scope of the operation and how your recovery progresses.' },
        { type: 'h2', text: 'Compare the surgical approach, not only the price' },
        { type: 'p', text: 'The nose sits at the centre of the face and plays a key role in breathing. A result that looks good but makes breathing harder can reduce quality of life. That is why, in my approach, I assess the internal and external structure of the nose together.' },
        { type: 'p', text: 'Rhinoplasty results are not entirely predictable. Risks such as bleeding, infection, breathing problems, asymmetry, unexpected healing or the need for revision surgery should be discussed with every patient before the operation.' },
        { type: 'h2', text: 'Frequently asked questions' },
        { type: 'p', text: 'Does €2,300 apply to all rhinoplasty operations? No. This fee is for standard primary rhinoplasty. Noses that have had previous surgery, or patients with different surgical needs, are assessed separately.' },
        { type: 'p', text: 'Can my breathing problem be corrected at the same time? In many patients, yes. Anatomical problems affecting breathing, such as a deviated septum or nasal valve problems, can be addressed in the same operation in suitable cases. Whether this is needed is decided at the examination. It cannot be guaranteed that breathing will improve completely in every patient.' },
        { type: 'p', text: 'Can we plan the operation before I come to Türkiye? We can do the first assessment by video call. We talk about your expectations, your medical history and the structure of your nose. However, photos and video do not replace a physical examination; the final surgical plan is confirmed at the face-to-face examination when you arrive.' },
        { type: 'p', text: 'What happens if I have a problem after returning home? We set up your follow-up plan before you leave Türkiye, and online communication is part of it. However, remote follow-up cannot solve every problem. In situations that may need urgent assessment, such as bleeding, infection or difficulty breathing, you may need to seek medical help where you are. It is important to discuss how any complication would be managed before the operation.' },
        { type: 'h2', text: 'Conclusion: know what you are deciding, not only the price' },
        { type: 'p', text: 'Comparing countries and surgeons for rhinoplasty is completely natural. My fee for standard primary rhinoplasty is €2,300 including pre-operative tests; travel, accommodation and transfers are not included.' },
        { type: 'callout', text: 'I do not see rhinoplasty as a service to be chosen on price alone. Being able to speak directly with your surgeon, having your expectations assessed realistically, discussing the risks openly and knowing your follow-up plan matter at least as much as the price.' },
        { type: 'p', text: 'For an online pre-consultation, you can write to us on WhatsApp: +90 555 333 21 20.' },
        { type: 'h2', text: 'Sources and further reading' },
        {
          type: 'ul',
          items: [
            'NHS. Nose reshaping (rhinoplasty). https://www.nhs.uk/conditions/cosmetic-procedures/nose-reshaping/',
            'American Society of Plastic Surgeons. Rhinoplasty risks and safety. https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/safety',
            'American Society of Plastic Surgeons. Rhinoplasty recovery. https://www.plasticsurgery.org/cosmetic-procedures/rhinoplasty/recovery',
            'CDC Yellow Book. Medical tourism. https://www.cdc.gov/yellow-book/',
            'TreatCompare. Rhinoplasty cost UK 2026. https://www.treatcompare.com/articles/rhinoplasty-cost-uk',
          ],
        },
        { type: 'p', text: 'This article is for general information. Your personal surgical plan and final fee are determined after a medical assessment.' },
      ],
    },
  },
};

export default post;
