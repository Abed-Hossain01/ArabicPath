import React from 'react';
import {
  Library,
  Volume2,
  CheckCircle2,
  FileCheck,
  TrendingUp,
  Sparkles,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface FeaturesProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const Features: React.FC<FeaturesProps> = ({ lang, onOpenModal, content }) => {
  const isRTL = lang === 'ar';
  const { features } = content;

  const iconMap: Record<string, React.ReactNode> = {
    Library: <Library className="w-6 h-6" />,
    Volume2: <Volume2 className="w-6 h-6" />,
    CheckCircle2: <CheckCircle2 className="w-6 h-6" />,
    FileCheck: <FileCheck className="w-6 h-6" />,
    TrendingUp: <TrendingUp className="w-6 h-6" />,
    Sparkles: <Sparkles className="w-6 h-6" />,
  };

  return (
    <section id="features" className="py-20 md:py-28 bg-[#030712] relative overflow-hidden border-t border-blue-950/60">
      {/* Decorative Blue and Cyan Light Cones */}
      <div className="absolute top-1/3 end-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 start-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-blue-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{features.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            <span>{features.title}</span>{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              {features.titleAccent}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {features.description}
          </p>
        </div>

        {/* 6 Responsive Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-b from-dark-850 to-dark-950 hover:from-dark-800 hover:to-dark-900 rounded-3xl p-7 sm:p-8 border border-blue-900/40 hover:border-cyan-400/60 shadow-soft-dark hover:shadow-blue-glow-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Top Row: Icon + Tag */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 p-3.5 rounded-2xl bg-blue-950 border border-blue-600/40 text-cyan-400 shadow-blue-glow group-hover:scale-110 group-hover:border-cyan-400 transition-all duration-300">
                    {iconMap[item.iconName]}
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-950 text-cyan-300 border border-blue-800/50 font-english">
                    {item.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="text-start space-y-2.5">
                  <h3 className="text-xl font-bold text-white font-heading group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Bottom Card Action */}
              <div className="mt-6 pt-4 border-t border-blue-950 flex items-center justify-between">
                <button
                  onClick={() => onOpenModal('get-started')}
                  className="text-xs font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors flex items-center gap-1.5"
                >
                  <span>{isRTL ? 'استكشف الميزة بالتفصيل' : 'Explore Feature'}</span>
                  {isRTL ? (
                    <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  ) : (
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  )}
                </button>
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:bg-cyan-400 transition-colors shadow-cyan-glow" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
