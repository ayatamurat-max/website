import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import styles from "./page.module.css";

export default function Home() {
  const t = useTranslations('Home');

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
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
          <div className={styles.heroImageWrapper}>
            <div className={styles.heroImageGlow}></div>
            <Image 
              src="/images/hero-bg.jpg"
              alt="Klinik Görünüm"
              fill
              className={styles.heroImage}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
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
            <Link href="/cerrahi-islemler" className={styles.serviceCard}>
              <div className={styles.cardImage}>
                <div className={`${styles.cardPlaceholder} ${styles.blueGradient}`}>
                   <Image src="/images/surgical-icon.svg" alt="Cerrahi" width={48} height={48} className={styles.cardIcon} />
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
                   <Image src="/images/medical-icon.svg" alt="Medikal" width={48} height={48} className={styles.cardIcon} />
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
                   <Image src="/images/surgical-icon.svg" alt="Cerrahi" width={48} height={48} className={styles.cardIcon} />
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
              alt="Opr. Dr. Murat Ayata"
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
          </div>
        </div>
      </section>
    </>
  );
}
