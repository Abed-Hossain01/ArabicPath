import React from 'react';
import {
  ShieldCheck,
  Layers,
  Smartphone,
  BookMarked,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Check,
} from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface WhyChooseUsProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  lang,
  onOpenModal,
  content,
}) => {
  const isRTL = lang === 'ar';
  const { whyChooseUs } = content;

  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6" />,
    Layers: <Layers className="w-6 h-6" />,
    Smartphone: <Smartphone className="w-6 h-6" />,
    BookMarked: <BookMarked className="w-6 h-6" />,
  };

  return (
    <section
      id="why-us"
      className="py-20 md:py-28 bg-[#040813] relative overflow-hidden border-t border-blue-950/60"
    >
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 start-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-blue-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{whyChooseUs.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            <span>{whyChooseUs.title}</span>{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              {whyChooseUs.titleAccent}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {whyChooseUs.description}
          </p>
        </div>

        {/* 4 Value Proposition Cards with Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {whyChooseUs.benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-b from-dark-850 to-dark-950 rounded-3xl p-7 border border-blue-900/40 shadow-soft-dark hover:shadow-blue-glow hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between text-start group"
            >
              <div>
                {/* Stat & Icon Header */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-dark-800 text-cyan-400 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all shadow-inner border border-blue-800/40 group-hover:shadow-blue-glow">
                    {iconMap[benefit.iconName]}
                  </div>

                  <div className="text-end">
                    <div className="text-2xl font-black text-white font-heading">
                      {benefit.stat}
                    </div>
                    <div className="text-[10px] text-cyan-400 font-semibold tracking-wide">
                      {benefit.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-white font-heading mb-2 group-hover:text-cyan-300 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>

              {/* Decorative bottom bar */}
              <div className="mt-6 pt-3 border-t border-blue-950 flex items-center gap-1.5 text-[11px] text-blue-400 font-semibold">
                <Check className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isRTL ? 'معيار جودة معتمد' : 'Verified standard'}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Callout Placement Test Banner */}
        <div className="relative rounded-3xl p-8 sm:p-10 bg-gradient-to-r from-dark-950 via-blue-950 to-dark-900 text-white shadow-2xl border border-blue-500/50 overflow-hidden">
          <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />
          <div className="absolute -bottom-10 -end-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 text-start">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/60 text-cyan-300 text-xs font-semibold border border-cyan-400/30 shadow-blue-glow">
                <Sparkles className="w-3 h-3 text-cyan-400" />
                <span>{isRTL ? 'تقييم فوري مجاني' : 'Instant Diagnostic Test'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {whyChooseUs.experienceBox.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {whyChooseUs.experienceBox.subtitle}
              </p>
            </div>

            <button
              onClick={() => onOpenModal('get-started')}
              className="shrink-0 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-95 text-white font-bold text-sm sm:text-base shadow-blue-glow-lg transition-all duration-200 flex items-center gap-2 border border-cyan-300/40"
            >
              <span>{whyChooseUs.experienceBox.actionText}</span>
              {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
