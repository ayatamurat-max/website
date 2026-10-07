import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { getTranslations } from 'next-intl/server';
import { Link } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { SITE_URL } from '@/i18n/metadata';
import { CLINIC } from '@/lib/clinic';
import { getPost, getTranslation, availableLocales, type Block } from '@/content/blog';
import ProcedureIcon from '../../../components/ProcedureIcon';
import styles from '../blog.module.css';

type Params = { params: Promise<{ locale: string; slug: string }> };

const path = (locale: string, slug: string) =>
  `${locale === routing.defaultLocale ? '' : `/${locale}`}/blog/${slug}`;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const { t, lang, isFallback } = getTranslation(post, locale);

  // Yalnızca gerçekten çevrilmiş dilleri Google'a bildir; çevirisi olmayan dillerde İngilizce sürüm asıl kaynak
  const languages: Record<string, string> = {};
  for (const l of availableLocales(post)) languages[l] = path(l, slug);
  languages['x-default'] = path('en', slug);

  return {
    title: `${t.title} | ${locale === 'en' || isFallback ? 'Murat Ayata, MD' : 'Op. Dr. Murat Ayata'}`,
    description: t.description,
    alternates: { canonical: path(isFallback ? 'en' : locale, slug), languages },
    openGraph: {
      type: 'article',
      title: t.title,
      description: t.description,
      url: path(lang, slug),
      images: [post.shareImage],
      publishedTime: post.date,
    },
  };
}

function renderBlock(block: Block, i: number) {
  switch (block.type) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'p':
      return <p key={i}>{block.text}</p>;
    case 'ul':
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'steps':
      return (
        <ol key={i} className={styles.steps}>
          {block.items.map((s) => (
            <li key={s.title}>
              <strong>{s.title}</strong>
              {s.text}
            </li>
          ))}
        </ol>
      );
    case 'callout':
      return (
        <aside key={i} className={styles.callout}>
          {block.text}
        </aside>
      );
  }
}

export default async function BlogPost({ params }: Params) {
  const { locale, slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const t = await getTranslations({ locale, namespace: 'Blog' });
  const tHeader = await getTranslations({ locale, namespace: 'Header' });
  const { t: tr, lang, isFallback } = getTranslation(post, locale);
  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: 'long' });
  const waUrl = `https://wa.me/${CLINIC.whatsapp}?text=${encodeURIComponent(t('waMessage'))}`;

  // İlgili işlemin adı: menüdeki/işlem sayfalarındaki başlıklardan
  let relatedTitle = '';
  if (post.procedure) {
    const href = post.procedure.href;
    if (href === '/rinoplasti') relatedTitle = (await getTranslations({ locale, namespace: 'Rhinoplasty' }))('tag');
    else if (href === '/international-patients') relatedTitle = tHeader('international');
    else {
      const map: Record<string, string> = {
        '/septoplasti': 'septoplasty', '/kepce-kulak': 'otoplasty', '/goz-kapagi-estetigi': 'blepharoplasty',
        '/boyun-gidi-estetigi': 'neck', '/botoks': 'botox', '/dermal-dolgu': 'filler',
        '/mezoterapi-prp': 'meso', '/ameliyatsiz-yuz-genclestirme': 'rejuvenation',
      };
      const key = map[href];
      if (key) relatedTitle = (await getTranslations({ locale, namespace: 'Procedures' }))(`${key}.tag`);
    }
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'MedicalWebPage',
    headline: tr.title,
    description: tr.description,
    inLanguage: lang,
    datePublished: post.date,
    image: `${SITE_URL}${post.shareImage}`,
    url: `${SITE_URL}${path(lang, slug)}`,
    author: { '@type': 'Physician', name: t('author'), medicalSpecialty: 'Otolaryngologic', url: SITE_URL },
    publisher: { '@type': 'MedicalClinic', name: CLINIC.name, url: SITE_URL },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className={styles.articleHead}>
        <div className={`container ${styles.articleHeadInner}`}>
          <Link href="/blog" className={styles.back}>{t('back')}</Link>
          <h1 lang={lang}>{tr.title}</h1>
          <div className={styles.byline}>
            <span><strong>{t('author')}</strong> · {t('authorRole')}</span>
            <span>
              <time dateTime={post.date}>{fmt.format(new Date(post.date))}</time> · {tr.readMinutes} {t('minRead')}
            </span>
          </div>
        </div>
      </section>

      <div className={styles.coverWrap}>
        <Image src={post.cover} alt="" unoptimized={post.cover.endsWith('.svg')} fill priority sizes="(max-width: 1000px) 100vw, 1000px" />
      </div>

      <article className={`container ${styles.article}`} lang={lang}>
        {isFallback && <p className={styles.note} lang={locale}>{t('englishNote')}</p>}
        {tr.body.map(renderBlock)}

        {post.instagramUrl && (
          <a href={post.instagramUrl} target="_blank" rel="noopener noreferrer" className={styles.instagram}>
            {t('instagram')}
          </a>
        )}

        {post.procedure && relatedTitle && (
          <Link href={post.procedure.href} className={styles.related}>
            <span className={styles.relatedIcon}>
              <ProcedureIcon name={post.procedure.icon} size={30} strokeWidth={1.2} />
            </span>
            <span>
              <span className={styles.relatedLabel} lang={locale}>{t('related')}</span>
              <span className={styles.relatedTitle} lang={locale}>{relatedTitle} →</span>
            </span>
          </Link>
        )}

        <p className={styles.disclaimer} lang={locale}>{t('disclaimer')}</p>
      </article>

      <section className={styles.cta}>
        <div className="container">
          <h2>{t('ctaTitle')}</h2>
          <p>{t('ctaDesc')}</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            {t('cta')}
          </a>
        </div>
      </section>
    </>
  );
}
