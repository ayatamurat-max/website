import type { SVGProps } from 'react';

// Sade, çizgisel işlem simgeleri (24x24, renk bulunduğu yerin yazı rengini alır).
const ICONS = {
  surgical: (
    <><path d="M13 11 L18.3 5.7 C19.5 4.5 21.3 4.9 20.9 6.6 C20.3 9.1 18.1 11.4 15 13 Z"/><path d="M13 11 L4 20 C3.4 20.6 3.4 21.4 4 22 C4.6 22.6 5.4 22.6 6 22 L15 13"/><path d="M10.6 13.4 L12.6 15.4"/></>
  ),
  medical: (
    <><path d="M14.5 6.5 L17.5 9.5 L9.5 17.5 L6.5 14.5 Z"/><path d="M13.5 5.5 L18.5 10.5"/><path d="M16 8 L19.5 4.5"/><path d="M18 3 L21 6"/><path d="M8 16 L3 21"/><path d="M12.5 8.5 L14 10"/><path d="M10.5 10.5 L12 12"/><path d="M8.5 12.5 L10 14"/></>
  ),
  rhinoplasty: (
    <><path d="M14 2 C13.6 4.2 12.8 5.8 12.6 7.4 L8.8 12.8 C8.2 13.7 8.7 14.6 9.8 14.6 L11.4 14.6 C11.7 16.2 10.8 17.2 10.8 18.2 C10.8 19.6 11.8 21.2 13.5 22"/><path d="M15.6 9.4 C16.3 10 17.3 10 18 9.4"/></>
  ),
  septoplasty: (
    <><path d="M10.5 3.5 C10.5 7.5 9.6 10.6 8 13.2"/><path d="M13.5 3.5 C13.5 7.5 14.4 10.6 16 13.2"/><path d="M8 13.2 C6.4 14.8 6.9 17.5 9 17.5 C9.8 17.5 10.4 17.1 10.8 16.6 L13.2 16.6 C13.6 17.1 14.2 17.5 15 17.5 C17.1 17.5 17.6 14.8 16 13.2"/><path d="M12 9 L12 14.6"/></>
  ),
  otoplasty: (
    <><path d="M7 9 C7 5.1 9.4 2.5 12.5 2.5 C15.9 2.5 18.5 5.2 18.5 8.8 C18.5 12.2 16.5 13.6 15.2 15 C14 16.3 13.8 17.4 13.6 19 C13.4 20.8 12 22 10.3 22 C8.6 22 7.5 20.9 7.2 19.5"/><path d="M10 9 C10 7 11.2 5.6 12.8 5.6 C14.4 5.6 15.5 6.9 15.5 8.6 C15.5 10 14.6 10.8 13.5 11.2"/><path d="M10 9 L10 10.5 C10 11.6 10.8 12.2 11.8 12.4"/></>
  ),
  eyelid: (
    <><path d="M2.5 13 C5 8.5 8.4 6.5 12 6.5 C15.6 6.5 19 8.5 21.5 13 C19 17.5 15.6 19.5 12 19.5 C8.4 19.5 5 17.5 2.5 13 Z"/><circle cx="12" cy="13" r="3"/><path d="M5 7.5 C7.3 5 9.6 3.8 12 3.8 C14.4 3.8 16.7 5 19 7.5"/></>
  ),
  neck: (
    <><path d="M5.5 2.5 C5.5 9.5 8.2 14.8 12 16 C15.8 14.8 18.5 9.5 18.5 2.5"/><path d="M9 15.2 L9 21.5"/><path d="M15 15.2 L15 21.5"/><path d="M10.8 13.2 C11.6 13.6 12.4 13.6 13.2 13.2"/></>
  ),
  filler: (
    <><path d="M12 3 C12 3 6 10 6 14.5 C6 17.8 8.7 20.5 12 20.5 C15.3 20.5 18 17.8 18 14.5 C18 10 12 3 12 3 Z"/><path d="M9.3 14.8 C9.4 16.3 10.4 17.5 11.8 17.8"/></>
  ),
  meso: (
    <><path d="M8.5 3 L15.5 3"/><path d="M10 3 L10 17.5 C10 19.4 10.9 20.5 12 20.5 C13.1 20.5 14 19.4 14 17.5 L14 3"/><path d="M10 12 L14 12"/><path d="M17.5 8 L17.5 8"/><path d="M19 12 L19 12"/><path d="M6 9.5 L6 9.5"/></>
  ),
  rejuvenation: (
    <><path d="M11 3 C11.6 7.6 12.4 8.4 17 9 C12.4 9.6 11.6 10.4 11 15 C10.4 10.4 9.6 9.6 5 9 C9.6 8.4 10.4 7.6 11 3 Z"/><path d="M17.5 14 C17.8 15.7 18.3 16.2 20 16.5 C18.3 16.8 17.8 17.3 17.5 19 C17.2 17.3 16.7 16.8 15 16.5 C16.7 16.2 17.2 15.7 17.5 14 Z"/><path d="M7 19 L7 19"/></>
  ),
} as const;

export type ProcedureIconName = keyof typeof ICONS;

type Props = { name: ProcedureIconName; size?: number } & Omit<SVGProps<SVGSVGElement>, 'name'>;

export default function ProcedureIcon({ name, size = 24, ...rest }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {ICONS[name]}
    </svg>
  );
}
