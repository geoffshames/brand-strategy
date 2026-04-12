'use client';

import { motion } from '@/lib/motion-shim';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#2A2A2E]">
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 text-center">
        <p className="text-xs text-[#FD3737] uppercase tracking-[0.2em] font-semibold mb-4">Next Step</p>
        <h3 className="text-3xl md:text-5xl font-bold text-[#E4E4E9] mb-6 uppercase" style={{ fontFamily: 'N27, sans-serif' }}>Ready to take control?</h3>
        <div className="w-16 h-1 bg-[#FD3737] mx-auto mb-8" />
        <a
          href="mailto:info@crowdcontroldigital.com"
          className="inline-block px-10 py-4 rounded-lg bg-[#FD3737] text-white font-bold text-lg hover:bg-[#e02e2e] transition-colors uppercase tracking-wider" style={{ fontFamily: 'N27, sans-serif' }}
        >
          Hit Us Up
        </a>
      </div>
      <div className="border-t border-[#2A2A2E] py-6">
        <div className="max-w-5xl mx-auto px-6 md:px-8 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-[#666]">
            © {currentYear} Crowd Control Digital. All rights reserved.
          </p>
          <p className="text-sm text-[#666]">
            Prepared by <span className="text-[#FD3737]">Crowd Control Digital</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
