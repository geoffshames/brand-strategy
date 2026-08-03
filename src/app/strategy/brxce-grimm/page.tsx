import { Metadata } from 'next';
import BrxceExperience from '@/components/brxce/Experience';

const TITLE = 'Brxce Grimm — Brand Growth Strategy | Crowd Control Digital';
const DESCRIPTION =
  'Twelve years in the wilderness. One primetime detonation already on the calendar. The strategy for the return — prepared by Crowd Control.';

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
        url: `/api/og?title=${encodeURIComponent('Brxce Grimm')}&subtitle=${encodeURIComponent('Growth Strategy by Crowd Control Digital')}`,
        width: 1200,
        height: 630,
        alt: 'Brxce Grimm Brand Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function BrxceGrimmPage() {
  return <BrxceExperience />;
}
