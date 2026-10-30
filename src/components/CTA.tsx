import React from 'react';
import { Sparkles, ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface CTAProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const CTA: React.FC<CTAProps> = ({ lang, onOpenModal, content }) => {
  const isRTL = lang === 'ar';
  const { cta } = content;

  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[#030712] border-t border-blue-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-dark-950 via-blue-950 to-dark-900 text-white p-8 sm:p-12 md:p-16 shadow-2xl border border-blue-500/50 overflow-hidden text-center">
          {/* Cyber-lattice Watermark */}
          <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

          {/* Blue radial glow accents */}
          <div className="absolute top-0 start-1/2 -translate-x-1/2 w-96 h-96 bg-blue-600/20 rounded-full blur-[130px] pointer-events-none" />
          <div className="absolute bottom-0 start-10 w-72 h-72 bg-cyan-500/15 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-900/60 text-cyan-300 text-xs sm:text-sm font-semibold border border-cyan-400/40 shadow-blue-glow">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>{cta.badge}</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading leading-tight text-white">
              <span>{cta.title}</span>{' '}
              <span className="text-cyan-400 block sm:inline drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                {cta.titleAccent}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
              {cta.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                onClick={() => onOpenModal('get-started')}
                className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 text-white font-bold text-base shadow-blue-glow-lg transition-all duration-200 flex items-center justify-center gap-2.5 group border border-cyan-300/40"
              >
                <span>{cta.buttonText}</span>
                {isRTL ? (
                  <ArrowLeft className="w-4 h-4 text-cyan-100 group-hover:-translate-x-1 transition-transform" />
                ) : (
                  <ArrowRight className="w-4 h-4 text-cyan-100 group-hover:translate-x-1 transition-transform" />
                )}
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('journey');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-dark-900/80 hover:bg-dark-850 text-slate-200 hover:text-white font-medium text-base border border-blue-800/60 transition-all duration-200 shadow-soft-dark"
              >
                {cta.secondaryButtonText}
              </button>
            </div>

            {/* 3 Reassurance Feature Bullets */}
            <div className="pt-8 border-t border-blue-900/60 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-cyan-200/90">
              {cta.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Guarantee Note */}
            <div className="text-[11px] sm:text-xs text-slate-400 pt-1">
              {cta.guaranteeText}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
