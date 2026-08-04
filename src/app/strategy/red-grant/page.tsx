import { Metadata } from 'next';
import RedExperience from '@/components/red/Experience';

const TITLE = 'Red Grant — Brand Growth Strategy | Crowd Control Digital';
const DESCRIPTION =
  'Thirty years on stage. Forty-eight weeks a year on the road. A multi-hyphenate arsenal nobody has connected — yet. The strategy to build the digital machine. Prepared by Crowd Control.';

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
        url: `/api/og?title=${encodeURIComponent('Red Grant')}&subtitle=${encodeURIComponent('Growth Strategy by Crowd Control Digital')}`,
        width: 1200,
        height: 630,
        alt: 'Red Grant Brand Strategy',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RedGrantPage() {
  return <RedExperience />;
}
