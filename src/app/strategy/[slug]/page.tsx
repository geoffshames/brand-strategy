import { Metadata } from 'next';
import { getStrategy, getAllSlugs } from '@/lib/data';
import StrategyClient from './client';

interface StrategyPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: StrategyPageProps): Promise<Metadata> {
  const strategy = getStrategy(params.slug);

  if (!strategy) {
    return {
      title: 'Strategy Not Found',
      description: 'The requested strategy could not be found.',
    };
  }

  return {
    title: `${strategy.brandName} - Brand Strategy`,
    description: strategy.executiveSummary.thesis,
    openGraph: {
      title: `${strategy.brandName} - Brand Strategy`,
      description: strategy.executiveSummary.thesis,
      type: 'website',
    },
  };
}

export default function StrategyPage({ params }: StrategyPageProps) {
  const strategy = getStrategy(params.slug);

  if (!strategy) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#E4E4E9] mb-4">
            Strategy Not Found
          </h1>
          <p className="text-[#B8B8C0]">
            The strategy for "{params.slug}" could not be found.
          </p>
        </div>
      </div>
    );
  }

  return <StrategyClient strategy={strategy} />;
}
