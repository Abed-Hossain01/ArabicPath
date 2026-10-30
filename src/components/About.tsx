import React from 'react';
import {
  CheckCircle2,
  Quote,
  Scroll,
} from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface AboutProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const About: React.FC<AboutProps> = ({ lang, onOpenModal, content }) => {
  const isRTL = lang === 'ar';
  const { about } = content;

  return (
    <section id="about" className="py-24 md:py-32 bg-[#050914] relative overflow-hidden border-t border-blue-950/60">
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Narrative Column (7 cols) */}
          <div className="lg:col-span-7 text-start space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-cyan-300 text-xs font-semibold shadow-blue-glow">
              <Scroll className="w-3.5 h-3.5 text-cyan-400" />
              <span>{about.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
              <span>{about.title}</span>{' '}
              <span className="text-cyan-400 block mt-1 drop-shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                {about.titleAccent}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
              {about.description1}
            </p>

            {/* 3 Crisp Pedagogical Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {about.bulletPoints.map((point, index) => (
                <div
                  key={index}
                  className="p-4 rounded-2xl bg-dark-900/60 border border-blue-900/30 hover:border-cyan-400/40 hover:bg-dark-850/70 transition-all duration-200"
                >
                  <div className="w-7 h-7 rounded-lg bg-blue-950 border border-blue-600/40 text-cyan-400 flex items-center justify-center mb-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <h3 className="text-sm font-bold text-white font-heading">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Umar (RA) Quote */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-dark-950 via-blue-950/70 to-dark-900 text-cyan-200 border border-blue-500/30 mt-4">
              <Quote className="w-7 h-7 text-blue-500/20 absolute top-4 end-4 rtl:start-auto rtl:end-4" />
              <p className="text-base sm:text-lg font-arabic font-bold italic leading-relaxed text-cyan-100 relative z-10 mb-1">
                {about.quote}
              </p>
              <div className="text-xs text-blue-400 font-medium">
                — {about.quoteAuthor}
              </div>
            </div>
          </div>

          {/* Graded Books Preview (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative bg-gradient-to-b from-dark-850/70 to-dark-950 rounded-3xl p-6 sm:p-7 border border-blue-900/40 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center justify-between pb-4 border-b border-blue-950 mb-5">
                <div>
                  <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-wider font-english">
                    {isRTL ? 'المنهج الدراسي' : 'Core Curriculum'}
                  </span>
                  <h3 className="text-lg font-bold text-white font-heading">
                    {isRTL ? 'سلسلة الكتب الرقمية' : 'Digital Textbook Series'}
                  </h3>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[10px] font-semibold">
                  {about.badgeYears} {isRTL ? 'معتمد' : 'Vetted'}
                </div>
              </div>

              {/* 3 Graded Volumes Cards */}
              <div className="space-y-3">
                {/* Volume 1 */}
                <div className="p-3.5 bg-dark-900/80 rounded-2xl border border-blue-900/30 hover:border-cyan-400/40 transition-all flex items-center gap-3 group">
                  <div className="w-10 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-blue-950 text-cyan-300 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-500/30">
                    ١
                  </div>
                  <div className="text-start flex-1 min-w-0">
                    <div className="text-xs font-semibold text-cyan-300">
                      {isRTL ? 'المستوى التأسيسي' : 'Foundations'}
                    </div>
                    <div className="text-xs font-bold text-white font-heading truncate">
                      {isRTL ? 'الأصوات ومخارج الحروف والقراءة' : 'Phonetics & Classical Reading'}
                    </div>
                  </div>
                </div>

                {/* Volume 2 */}
                <div className="p-3.5 bg-dark-900/80 rounded-2xl border border-blue-900/30 hover:border-cyan-400/40 transition-all flex items-center gap-3 group">
                  <div className="w-10 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-950 text-cyan-300 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-500/30">
                    ٢
                  </div>
                  <div className="text-start flex-1 min-w-0">
                    <div className="text-xs font-semibold text-cyan-300">
                      {isRTL ? 'المستوى المتوسط' : 'Intermediate'}
                    </div>
                    <div className="text-xs font-bold text-white font-heading truncate">
                      {isRTL ? 'النحو التطبيقي والصرف' : 'Applied Syntax & Morphology'}
                    </div>
                  </div>
                </div>

                {/* Volume 3 */}
                <div className="p-3.5 bg-dark-900/80 rounded-2xl border border-blue-900/30 hover:border-cyan-400/40 transition-all flex items-center gap-3 group">
                  <div className="w-10 h-11 rounded-xl bg-gradient-to-br from-indigo-800 to-dark-950 text-cyan-300 flex items-center justify-center font-bold text-sm shrink-0 border border-blue-500/30">
                    ٣
                  </div>
                  <div className="text-start flex-1 min-w-0">
                    <div className="text-xs font-semibold text-cyan-300">
                      {isRTL ? 'المستوى المتقدم' : 'Advanced'}
                    </div>
                    <div className="text-xs font-bold text-white font-heading truncate">
                      {isRTL ? 'البلاغة القرآنية وتذوق الأدب' : 'Quranic Rhetoric & Eloquence'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Free Sample CTA */}
              <div className="mt-5 pt-3.5 border-t border-blue-950 flex items-center justify-between text-xs">
                <span className="text-slate-400">{about.badgeYearsText}</span>
                <button
                  onClick={() => onOpenModal('get-started')}
                  className="font-semibold text-cyan-400 hover:text-cyan-300"
                >
                  {isRTL ? 'معاينة عينة مجانية ←' : 'Free sample →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
