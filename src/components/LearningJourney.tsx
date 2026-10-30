import React, { useState } from 'react';
import {
  Compass,
  BookOpen,
  PenTool,
  Award,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Sparkles,
  ChevronRight,
  ChevronLeft,
} from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface LearningJourneyProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const LearningJourney: React.FC<LearningJourneyProps> = ({
  lang,
  onOpenModal,
  content,
}) => {
  const [activeStep, setActiveStep] = useState(0);
  const isRTL = lang === 'ar';
  const { journey } = content;

  const iconMap: Record<string, React.ReactNode> = {
    Compass: <Compass className="w-6 h-6" />,
    BookOpen: <BookOpen className="w-6 h-6" />,
    PenTool: <PenTool className="w-6 h-6" />,
    Award: <Award className="w-6 h-6" />,
  };

  const stepDemos = [
    {
      title: isRTL ? 'نموذج تقييم المستوى الفوري' : 'Diagnostic Placement Preview',
      subtitle: isRTL ? 'سؤال تجريبي سريع:' : 'Sample Quick Question:',
      question: isRTL
        ? 'ما نوع الكلمة (الْكِتَابُ) في الجملة: «الْكِتَابُ مُفِيدٌ»؟'
        : 'Identify the syntactic role of "Al-Kitāb" in: «الْكِتَابُ مُفِيدٌ»:',
      options: isRTL
        ? ['مبتدأ مرفوع وعلامة رفعه الضمة الظاهرة', 'خبر مرفوع', 'فاعل مؤخر', 'مفعول به منصوب']
        : ['Subject (Mubtada) in nominative case', 'Predicate (Khabar)', 'Agent (Fa\'il)', 'Direct Object'],
      correctIndex: 0,
    },
    {
      title: isRTL ? 'نموذج من كتاب النحو الواضح' : 'Textbook Chapter Preview',
      subtitle: isRTL ? 'الوحدة الثانية: أقسام الكلمة' : 'Unit 2: Parts of Speech',
      question: isRTL
        ? 'الكلمة ثلاثة أقسام: اسمٌ، وفعلٌ، وحرفٌ جاء لمعنى.'
        : 'The Arabic word is divided into three parts: Noun (Ism), Verb (Fi\'l), and Particle (Harf).',
      options: isRTL
        ? ['الاسم: ما دل على معنى غير مقترن بزمن', 'الفعل: ما دل على حدث مقترن بزمن', 'الحرف: ما لا يظهر معناه إلا مع غيره']
        : ['Noun: indicates meaning independent of time', 'Verb: indicates an action bound to time', 'Particle: conveys meaning only with others'],
      correctIndex: -1,
    },
    {
      title: isRTL ? 'تمرين الضبط والإعراب التفاعلي' : 'Interactive Tashkeel & Drill',
      subtitle: isRTL ? 'اضبط أواخر الكلمات بالشكل الصحيح:' : 'Select the correct diacritic ending:',
      question: isRTL
        ? 'يَقْرَأُ الطَّالِبُ _____ فِي الْمَكْتَبَةِ'
        : 'Choose the correct accusative ending for: «يَقْرَأُ الطَّالِبُ _____»',
      options: isRTL
        ? ['الْكِتَابَ (مفعول به منصوب بالفتحة)', 'الْكِتَابُ (بالضمة)', 'الْكِتَابِ (بالكسرة)']
        : ['Al-Kitāba (Accusative / Fathah)', 'Al-Kitābu (Nominative / Dammah)', 'Al-Kitābi (Genitive / Kasrah)'],
      correctIndex: 0,
    },
    {
      title: isRTL ? 'سجل الإتقان والشهادة المعتمدة' : 'Mastery Transcript & Certificate',
      subtitle: isRTL ? 'إحصاءات إنجاز الطالب بعد إتمام المستوى:' : 'Student Milestone Metrics:',
      question: isRTL
        ? 'تهانينا! لقد أتقنت ٦٥٠ مفردة عربية و٢٤ قاعدة نحوية بمعدل نجاح ٩٦٪'
        : 'Congratulations! You have mastered 650 words and 24 grammar rules with 96% accuracy.',
      options: isRTL
        ? ['شهادة إتمام معتمدة برقم توثيق رقمي', 'تقرير تفصيلي بمخارج الحروف وفصاحة النطق', 'فتح المستوى المتقدم التالي تلقائياً']
        : ['Verified digital certificate with verification code', 'Comprehensive phonetic & fluency audit', 'Automatic unlock of Stage 2'],
      correctIndex: -1,
    },
  ];

  return (
    <section
      id="journey"
      className="py-20 md:py-28 bg-[#040813] relative overflow-hidden border-t border-blue-950/60"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-dark-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/70 border border-blue-500/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-blue-glow">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>{journey.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white font-heading leading-tight">
            <span>{journey.title}</span>{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.35)]">
              {journey.titleAccent}
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            {journey.description}
          </p>
        </div>

        {/* 4 Connected Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {journey.steps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`relative rounded-3xl p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group ${
                  isSelected
                    ? 'bg-dark-850 shadow-blue-glow-lg border-2 border-cyan-400 -translate-y-2'
                    : 'bg-dark-900/80 hover:bg-dark-850 shadow-soft-dark hover:shadow-blue-glow border border-blue-900/40 hover:border-blue-500/50 hover:-translate-y-1'
                }`}
              >
                {/* Step Top Badge & Number */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                      isSelected
                        ? 'bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-blue-glow'
                        : 'bg-dark-800 text-cyan-400 border border-blue-800/40 group-hover:bg-blue-950'
                    }`}
                  >
                    {iconMap[step.iconName] || <BookOpen className="w-6 h-6" />}
                  </div>

                  <span
                    className={`text-2xl font-black font-heading transition-colors ${
                      isSelected ? 'text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]' : 'text-blue-950 group-hover:text-cyan-500'
                    }`}
                  >
                    {step.number}
                  </span>
                </div>

                {/* Step Content */}
                <div className="text-start space-y-2.5 flex-1">
                  <h3 className="text-lg font-bold text-white font-heading leading-snug group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Step Highlight Pill */}
                <div className="mt-5 pt-4 border-t border-blue-950">
                  <div
                    className={`text-[11px] font-semibold px-2.5 py-1.5 rounded-xl text-start transition-colors ${
                      isSelected
                        ? 'bg-blue-950 text-cyan-300 border border-cyan-400/40'
                        : 'bg-dark-800/70 text-slate-400'
                    }`}
                  >
                    ✦ {step.highlight}
                  </div>
                </div>

                {/* Step active indicator dot */}
                {isSelected && (
                  <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-8 h-1.5 bg-cyan-400 rounded-full shadow-cyan-glow" />
                )}
              </div>
            );
          })}
        </div>

        {/* Interactive Step Preview Sandbox */}
        <div className="mt-10 bg-gradient-to-b from-dark-850 to-dark-950 rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-800/40 max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-blue-950 gap-2 text-start">
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">
                {isRTL ? `المحطة ${journey.steps[activeStep].number} — معاينة حية` : `Stage ${journey.steps[activeStep].number} — Live Preview`}
              </span>
              <h4 className="text-lg sm:text-xl font-bold text-white font-heading">
                {stepDemos[activeStep].title}
              </h4>
            </div>
            <div className="text-xs text-slate-400">
              {stepDemos[activeStep].subtitle}
            </div>
          </div>

          <div className="py-6 text-start">
            <p className="text-sm sm:text-base font-semibold text-slate-100 mb-4 p-4 bg-dark-900 rounded-xl border border-blue-900/40">
              {stepDemos[activeStep].question}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {stepDemos[activeStep].options.map((option, optIdx) => (
                <div
                  key={optIdx}
                  className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-colors flex items-center justify-between ${
                    optIdx === stepDemos[activeStep].correctIndex
                      ? 'bg-blue-950/80 border-cyan-400 text-cyan-200 font-bold shadow-blue-glow'
                      : 'bg-dark-900 border-blue-950 text-slate-300 hover:border-blue-800'
                  }`}
                >
                  <span>{option}</span>
                  {optIdx === stepDemos[activeStep].correctIndex && (
                    <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-blue-950 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : 3))}
                className="p-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 transition border border-blue-900/40"
                aria-label="Previous step"
              >
                {isRTL ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
              </button>
              <span className="text-xs font-semibold text-cyan-400">
                {activeStep + 1} / 4
              </span>
              <button
                onClick={() => setActiveStep((prev) => (prev < 3 ? prev + 1 : 0))}
                className="p-2 rounded-xl bg-dark-800 hover:bg-dark-750 text-slate-200 transition border border-blue-900/40"
                aria-label="Next step"
              >
                {isRTL ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
              </button>
            </div>

            <button
              onClick={() => onOpenModal('get-started')}
              className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-blue-glow transition flex items-center gap-2"
            >
              <span>{isRTL ? 'ابدأ هذه المرحلة الآن' : 'Start This Stage Now'}</span>
              {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
