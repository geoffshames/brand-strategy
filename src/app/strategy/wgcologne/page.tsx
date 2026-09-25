import { Metadata } from 'next';
import WgcExperience from '@/components/wgc/Experience';

const TITLE = 'WGCologne Content Strategy | Crowd Control Digital';
const DESCRIPTION =
  'Content analysis of every WGCologne Short, a fifteen-creator fragrance landscape, and a 12-month plan: five named series, a face-and-voice shift, and a gated product ladder. Prepared by Crowd Control Digital.';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: 'website',
    siteName: 'Crowd Control Digital',
    images: [
      {
        url: `/api/og?title=${encodeURIComponent('WGCologne')}&subtitle=${encodeURIComponent('Content Strategy by Crowd Control Digital')}`,
        width: 1200,
        height: 630,
        alt: 'WGCologne Content Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function WgcologneStrategyPage() {
  return <WgcExperience />;
}
