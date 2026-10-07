import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { posts, getTranslation } from "@/content/blog";
import type { Metadata } from "next";
import { buildMetadata } from "@/i18n/metadata";
import styles from "./page.module.css";
import ProcedureIcon from "../components/ProcedureIcon";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata(locale, "home", "/");
}

export default function Home() {
  const t = useTranslations('Home');
  const tNav = useTranslations('Header');
  const tBlog = useTranslations('Blog');
  const locale = useLocale();

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBackground}>
          <Image 
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className={styles.bgImage}
            priority
            sizes="100vw"
          />
        </div>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={`${styles.heroContent} animate-fade-in`}>
            <span className="section-tag">{t('heroTag')}</span>
            <h1 className={styles.heroTitle}>{t('heroTitle1')}<br/><span className={styles.highlight}>{t('heroTitle2')}</span></h1>
            <p className={styles.heroSubtitle}>
              {t('heroDesc')}
            </p>
            <div className={styles.heroSignature}>
              <p className={styles.sigName}>{t('heroSigName')}</p>
              <p className={styles.sigTitle}>{t('heroSigTitle')}</p>
            </div>
            <div className={styles.heroActions}>
              <Link href="/iletisim" className={`btn btn-primary ${styles.btnPulse}`}>
                {t('bookNow')}
              </Link>
              <Link href="/cerrahi-islemler" className="btn btn-outline" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.5)' }}>
                {t('medicalProcedures')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className={`bg-light ${styles.servicesSection}`}>
        <div className={`container ${styles.servicesContainer}`}>
          <div className="text-center animate-fade-in">
            <span className="section-tag">{t('servicesTag')}</span>
            <h2>{t('servicesTitle')}</h2>
            <p className={styles.sectionDesc}>{t('servicesDesc')}</p>
          </div>

          <div className={styles.servicesGrid}>
            <Link href="/rinoplasti" className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <div className={`${styles.cardPlaceholder} ${styles.blueGradient}`}>
                   <ProcedureIcon name="rhinoplasty" size={52} strokeWidth={1.25} className={styles.cardIcon} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('rhinoplastyTitle')}</h3>
                <p>{t('rhinoplastyDesc')}</p>
                <span className={styles.readMore}>{t('readMore')}</span>
              </div>
            </Link>

            <Link href="/medikal-islemler" className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <div className={`${styles.cardPlaceholder} ${styles.tealGradient}`}>
                   <ProcedureIcon name="medical" size={52} strokeWidth={1.25} className={styles.cardIcon} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('medicalTitle')}</h3>
                <p>{t('medicalDesc')}</p>
                <span className={styles.readMore}>{t('readMore')}</span>
              </div>
            </Link>

            <Link href="/cerrahi-islemler" className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <div className={`${styles.cardPlaceholder} ${styles.goldGradient}`}>
                   <ProcedureIcon name="eyelid" size={52} strokeWidth={1.25} className={styles.cardIcon} />
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3>{t('eyelidTitle')}</h3>
                <p>{t('eyelidDesc')}</p>
                <span className={styles.readMore}>{t('readMore')}</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Brief About Section */}
      <section className={styles.aboutSection}>
        <div className={`container ${styles.aboutContainer}`}>
          <div className={styles.aboutImageWrapper}>
            <Image 
              src="/images/portrait.png"
              alt={t('aboutTitle')}
              fill
              className={styles.aboutImageImg}
              sizes="(max-width: 992px) 100vw, 50vw"
            />
            <div className={styles.aboutImageBorder}></div>
          </div>
          <div className={styles.aboutContent}>
            <span className="section-tag">{t('aboutTag')}</span>
            <h2>{t('aboutTitle')}</h2>
            <p>{t('aboutP1')}</p>
            <p>{t('aboutP2')}</p>
            <Link href="/hakkimda" className="btn btn-outline">
              {t('moreInfo')}
            </Link>
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      <section className={styles.servicesSection}>
        <div className="container">
          <div className="text-center">
            <span className="section-tag">{tBlog('tag')}</span>
            <h2>{tBlog('latest')}</h2>
          </div>
          <div className={styles.servicesGrid}>
            {posts.slice(0, 3).map((post) => {
              const { t: tr, lang } = getTranslation(post, locale);
              return (
                <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.serviceCard}>
                  <div className={styles.cardImage} style={{ position: 'relative' }}>
                    <Image src={post.cover} alt="" fill unoptimized={post.cover.endsWith('.svg')} style={{ objectFit: 'cover' }} sizes="(max-width: 768px) 100vw, 33vw" />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 lang={lang}>{tr.title}</h3>
                    <span className={styles.readMore}>{tBlog('readMore')}</span>
                  </div>
                </Link>
              );
            })}
          </div>
          <div className="text-center" style={{ marginTop: '2.5rem' }}>
            <Link href="/blog" className="btn btn-outline">{tBlog('all')}</Link>
          </div>
        </div>
      </section>

      {/* Certificate Section */}
      <section className={styles.certificateSection}>
        <div className={`container ${styles.certificateContainer}`}>
          <div className="text-center animate-fade-in">
             <span className="section-tag">{t('certificateTag')}</span>
             <h2>{t('certificateTitle')}</h2>
             <div className={styles.certificateImageWrapper}>
               <Image 
                 src="/images/health-tourism-certificate.jpg"
                 alt={t('certificateTitle')}
                 width={800}
                 height={560}
                 className={styles.certificateImage}
               />
             </div>
              <div className={styles.logoRow}>
                <Image 
                  src="/images/health-turkiye-logo.png"
                  alt="Health Türkiye Logo"
                  width={180}
                  height={100}
                  className={styles.healthLogo}
                />
              </div>
              <Link href="/international-patients" className="btn btn-outline" style={{ marginTop: '2rem' }}>
                {tNav('international')} →
              </Link>
          </div>
        </div>
      </section>
    </>
  );
}
