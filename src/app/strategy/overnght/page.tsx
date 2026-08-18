import { Metadata } from 'next';
import { Archivo_Black, Barlow_Condensed } from 'next/font/google';
import OvernghtExperience from '@/components/overnght/Experience';

/* Broadcast faces used ONLY inside the sample ad mocks. */
const archivo = Archivo_Black({ weight: '400', subsets: ['latin'], variable: '--font-archivo', display: 'swap' });
const barlow = Barlow_Condensed({ weight: ['600', '700'], subsets: ['latin'], variable: '--font-barlow', display: 'swap' });

const TITLE = 'Overnght Creative Strategy | Crowd Control Digital';
const DESCRIPTION =
  'The rights are signed. The audience is next. Full competitor clip dossiers, a messaging teardown, sample ad builds in the Overnght brand, and the 90-day test that opens on Worlds. Prepared by Crowd Control Digital.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    siteName: 'Crowd Control Digital',
    images: [
      {
        url: `/api/og?title=${encodeURIComponent('Overnght')}&subtitle=${encodeURIComponent('Creative Strategy by Crowd Control Digital')}`,
        width: 1200,
        height: 630,
        alt: 'Overnght Creative Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function OvernghtStrategyPage() {
  return (
    <div className={`${archivo.variable} ${barlow.variable}`}>
      <OvernghtExperience />
    </div>
  );
}
