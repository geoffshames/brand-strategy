import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Brand Strategy Intelligence',
  description: 'Comprehensive market analysis, competitive positioning, and growth roadmaps for music industry leaders.',
  openGraph: {
    title: 'Brand Strategy Intelligence',
    description: 'Comprehensive market analysis, competitive positioning, and growth roadmaps for music industry leaders.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0A0A0A] text-[#E4E4E9] antialiased">
        {children}
      </body>
    </html>
  );
}
