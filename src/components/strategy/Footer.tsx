'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2E] py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
        >
          {/* Brand */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="text-lg font-bold text-[#E4E4E9]">DJ Tim Clark</h3>
            <p className="text-sm text-[#B8B8C0]">
              Rebrand Strategy & Market Intelligence
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold text-[#E4E4E9] uppercase tracking-wider">
              Strategy
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Executive Summary', href: '#executive' },
                { label: 'Competitive Analysis', href: '#competitive' },
                { label: 'Strategic Pillars', href: '#pillars' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B8B8C0] hover:text-[#FD3737] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold text-[#E4E4E9] uppercase tracking-wider">
              Planning
            </h4>
            <ul className="space-y-2">
              {[
                { label: 'Roadmap', href: '#roadmap' },
                { label: 'KPI Framework', href: '#kpi' },
                { label: 'Recommendations', href: '#recommendations' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#B8B8C0] hover:text-[#FD3737] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h4 className="text-sm font-semibold text-[#E4E4E9] uppercase tracking-wider">
              Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#B8B8C0] hover:text-[#FD3737] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#B8B8C0] hover:text-[#FD3737] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="pt-8 border-t border-[#2A2A2E] flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-[#B8B8C0]">
            © {currentYear} Crowd Control Digital. All rights reserved.
          </p>
          <p className="text-sm text-[#B8B8C0]">
            Crafted with precision for <span className="text-[#FD3737]">precision</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
