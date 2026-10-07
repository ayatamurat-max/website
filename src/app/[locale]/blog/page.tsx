import type { Metadata } from 'next';
import Image from 'next/image';
import { getTranslations } from 'next-intl/server';
import { buildMetadata } from '@/i18n/metadata';
import { Link } from '@/i18n/navigation';
import { posts, getTranslation } from '@/content/blog';
import styles from './blog.module.css';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, 'blog', '/blog');
}

export default async function BlogIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Blog' });
  const fmt = new Intl.DateTimeFormat(locale, { dateStyle: 'long' });

  return (
    <>
      <section className={styles.head}>
        <div className="container">
          <span className="section-tag">{t('tag')}</span>
          <h1>{t('title')}</h1>
          <p>{t('intro')}</p>
        </div>
      </section>

      <section className={styles.listSection}>
        <div className={`container ${styles.grid}`}>
          {posts.map((post) => {
            const { t: tr, lang } = getTranslation(post, locale);
            return (
              <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.card}>
                <div className={styles.cardImage}>
                  <Image src={post.cover} alt="" unoptimized={post.cover.endsWith('.svg')} fill sizes="(max-width: 640px) 100vw, (max-width: 992px) 50vw, 33vw" />
                </div>
                <div className={styles.cardBody}>
                  <span className={styles.meta}>
                    <time dateTime={post.date}>{fmt.format(new Date(post.date))}</time>
                    <span aria-hidden="true">·</span>
                    <span>{tr.readMinutes} {t('minRead')}</span>
                    {lang !== locale && <span>· EN</span>}
                  </span>
                  <h2 lang={lang}>{tr.title}</h2>
                  <p lang={lang}>{tr.description}</p>
                  <span className={styles.more}>{t('readMore')}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
