import Image from 'next/image';

// Pixelbin ile üretilen ince çizgi + altın vurgulu ikon seti (public/images/icons/).
// Eski API korunur (name, size, className, style) — çağıran yerlerde değişiklik gerekmez.
const ICON_NAMES = [
  'surgical',
  'medical',
  'rhinoplasty',
  'septoplasty',
  'otoplasty',
  'eyelid',
  'neck',
  'filler',
  'meso',
  'rejuvenation',
] as const;

export type ProcedureIconName = (typeof ICON_NAMES)[number];

type Props = {
  name: ProcedureIconName;
  size?: number;
  className?: string;
  style?: React.CSSProperties;
  /** Eski SVG API'sinden kalan prop; PNG ikonlarda etkisi yok, geriye dönük uyumluluk için kabul edilir. */
  strokeWidth?: number;
};

export default function ProcedureIcon({ name, size = 24, className, style }: Props) {
  return (
    <Image
      src={`/images/icons/${name}.png`}
      alt=""
      width={size}
      height={size}
      className={className}
      style={{ objectFit: 'contain', ...style }}
      aria-hidden="true"
      unoptimized
    />
  );
}
