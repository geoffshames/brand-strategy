import { Metadata } from 'next';
import OvernghtExperience from '@/components/overnght/Experience';

const TITLE = 'Overnght Creative Strategy | Crowd Control Digital';
const DESCRIPTION =
  'The rights are signed. The audience is next. Competitor creative intelligence, category listening, and the ad system that turns exclusive niche sports rights into subscribers. Prepared by Crowd Control Digital.';

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
  return <OvernghtExperience />;
}
