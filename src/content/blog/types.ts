// Blog yazılarının veri yapısı.
// Yeni yazı eklemek için src/content/blog/posts/ klasörüne bir dosya ekleyip index.ts'e kaydetmek yeterli.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'steps'; items: { title: string; text: string }[] }
  | { type: 'callout'; text: string };

export type PostTranslation = {
  title: string;
  description: string;
  readMinutes: number;
  body: Block[];
};

export type Post = {
  slug: string;
  /** Yayın tarihi (YYYY-MM-DD) */
  date: string;
  /**
   * Kapak görseli. Kendi fotoğrafınızla değiştirmek için fotoğrafı public/blog/ klasörüne koyup
   * buradaki yolu değiştirin (ör. '/blog/rinoplasti-ameliyathane.jpg'). En iyi oran 16:9.
   */
  cover: string;
  /** Sosyal medyada paylaşımda görünen görsel (JPG/PNG olmalı) */
  shareImage: string;
  /** Yazının sonunda yönlendirilecek işlem sayfası */
  procedure?: { href: string; icon: 'rhinoplasty' | 'septoplasty' | 'otoplasty' | 'eyelid' | 'neck' | 'medical' | 'filler' | 'meso' | 'rejuvenation' | 'surgical' };
  /** Instagram / Reels bağlantısı (isteğe bağlı) */
  instagramUrl?: string;
  /** Mevcut çeviriler. 'en' her zaman olmalı; çevirisi olmayan dillerde İngilizce gösterilir. */
  translations: { en: PostTranslation } & Partial<Record<'tr' | 'de' | 'fr' | 'ru' | 'bg', PostTranslation>>;
};
