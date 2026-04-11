'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { getAllSlugs, getStrategy } from '@/lib/data';
import Footer from '@/components/strategy/Footer';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Home() {
  const slugs = getAllSlugs();
  const strategies = slugs.map((slug) => getStrategy(slug)).filter(Boolean);

  return (
    <>
      <div className="min-h-screen bg-[#0A0A0A] flex flex-col">
        {/* Hero */}
        <section className="flex-1 flex items-center justify-center px-6 md:px-8 py-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl text-center space-y-6"
          >
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold text-[#E4E4E9]">
                Brand Strategy Intelligence
              </h1>
              <p className="text-xl text-[#B8B8C0]">
                Comprehensive market analysis, competitive positioning, and growth roadmaps for music industry leaders.
              </p>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-[#B8B8C0]"
            >
              Powered by Crowd Control Digital
            </motion.p>
          </motion.div>
        </section>

        {/* Strategies Grid */}
        <section className="max-w-7xl mx-auto w-full px-6 md:px-8 py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {strategies.map((strategy) => (
              <motion.div
                key={strategy.id}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                className="group border border-[#2A2A2E] rounded-lg p-8 bg-[#121214] hover:border-[#FD3737] transition-colors cursor-pointer"
              >
                <Link
                  href={`/strategy/${strategy.id}`}
                  className="block space-y-4"
                >
                  <div>
                    <h2 className="text-2xl font-bold text-[#E4E4E9] group-hover:text-[#FD3737] transition-colors">
                      {strategy.brandName}
                    </h2>
                    <p className="text-[#B8B8C0] mt-2">
                      {strategy.tagline}
                    </p>
                  </div>

                  <p className="text-sm text-[#B8B8C0] line-clamp-2">
                    {strategy.executiveSummary.thesis}
                  </p>

                  <div className="pt-4 border-t border-[#2A2A2E]">
                    <span className="text-sm font-semibold text-[#FD3737] group-hover:text-[#FF6B6B] transition-colors">
                      View Strategy →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      <Footer />
    </>
  );
}
