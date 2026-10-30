import React, { useState } from 'react';
import {
  BookOpen,
  Sparkles,
  Image as ImageIcon,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ExternalLink,
  X,
  CheckCircle2,
} from 'lucide-react';
import type { ContentData, Language, BookItem } from '../data/content';

interface BooksSectionProps {
  lang: Language;
  content: ContentData;
  onOpenModal: (mode: 'login' | 'get-started') => void;
}

export const BooksSection: React.FC<BooksSectionProps> = ({ lang, content, onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'foundation' | 'intermediate' | 'advanced'>('all');
  const [showAll, setShowAll] = useState(false);
  const [selectedBook, setSelectedBook] = useState<BookItem | null>(null);

  const isRTL = lang === 'ar';
  const booksData = content.booksSection;

  if (!booksData) return null;

  const filteredBooks = booksData.books.filter((b) => {
    if (activeTab === 'all') return true;
    return b.stageType === activeTab;
  });

  // When viewing "All" and collapsed, show only the first 4 books; otherwise show all matching books
  const displayedBooks =
    activeTab === 'all' && !showAll ? filteredBooks.slice(0, 4) : filteredBooks;

  const getStageColor = (type: 'foundation' | 'intermediate' | 'advanced') => {
    switch (type) {
      case 'foundation':
        return {
          pillBg: 'rgba(56, 189, 248, 0.12)',
          pillBorder: 'rgba(56, 189, 248, 0.35)',
          pillText: '#38BDF8',
          accentGradient: 'from-cyan-500/20 via-blue-600/10 to-transparent',
        };
      case 'intermediate':
        return {
          pillBg: 'rgba(99, 102, 241, 0.12)',
          pillBorder: 'rgba(99, 102, 241, 0.35)',
          pillText: '#818CF8',
          accentGradient: 'from-indigo-500/20 via-blue-600/10 to-transparent',
        };
      case 'advanced':
        return {
          pillBg: 'rgba(234, 179, 8, 0.12)',
          pillBorder: 'rgba(234, 179, 8, 0.35)',
          pillText: '#FACC15',
          accentGradient: 'from-amber-500/20 via-blue-600/10 to-transparent',
        };
    }
  };

  return (
    <section
      id="books"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative py-24 sm:py-32 overflow-hidden bg-[#040918]"
      style={{
        background: 'linear-gradient(180deg, #030810 0%, #050E26 35%, #040A1C 75%, #030712 100%)',
      }}
    >
      {/* Ambient background glows */}
      <div
        aria-hidden="true"
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(30, 80, 255, 0.18) 0%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-10 end-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, transparent 65%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-5 text-xs font-semibold tracking-wide"
            style={{
              background: 'rgba(56, 189, 248, 0.10)',
              border: '1px solid rgba(56, 189, 248, 0.28)',
              color: '#38BDF8',
            }}
          >
            <BookOpen className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>{booksData.badge}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
          </div>

          {/* Heading */}
          <h2
            className="text-3xl sm:text-5xl lg:text-6xl font-bold font-heading text-white tracking-tight leading-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            <span>{booksData.title} </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#60A5FA] via-[#38BDF8] to-[#93C5FD]">
              {booksData.titleAccent}
            </span>
          </h2>

          {/* Description */}
          <p className="mt-5 text-base sm:text-lg text-[#8A97AD] leading-relaxed">
            {booksData.description}
          </p>

          {/* Filter Tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-3 mt-8 flex-wrap">
            {[
              { id: 'all', label: booksData.filterAll, count: '12' },
              { id: 'foundation', label: booksData.filterFoundation, count: '4' },
              { id: 'intermediate', label: booksData.filterIntermediate, count: '4' },
              { id: 'advanced', label: booksData.filterAdvanced, count: '4' },
            ].map((tab) => {
              const active = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                    active
                      ? 'bg-[#3B82F6] text-white shadow-[0_0_24px_rgba(59,130,246,0.55)] scale-105'
                      : 'bg-white/5 text-[#8A97AD] hover:text-white hover:bg-white/10 border border-white/10'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                      active ? 'bg-white/20 text-white' : 'bg-white/10 text-[#8A97AD]'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {displayedBooks.map((book) => {
            const colors = getStageColor(book.stageType);

            return (
              <div
                key={book.id}
                className="group relative flex flex-col rounded-3xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-2"
                style={{
                  background: 'rgba(10, 18, 42, 0.72)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.55), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
                }}
              >
                {/* ══ BOOK COVER / PICTURE SLOT (Ready for custom picture) ══ */}
                <div
                  className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden mb-5 flex flex-col justify-between p-4 transition-all duration-300 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.35)]"
                  style={{
                    background:
                      'linear-gradient(145deg, #08132B 0%, #0E1F45 45%, #050B18 100%)',
                    border: '1.5px solid rgba(56, 189, 248, 0.25)',
                    boxShadow:
                      'inset 4px 0 12px rgba(0, 0, 0, 0.6), inset -2px 0 8px rgba(255, 255, 255, 0.06), 0 12px 28px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  {/* If user provided an image, render it */}
                  {book.image ? (
                    <>
                      <img
                        src={book.image}
                        alt={book.title}
                        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Realistic book spine shadow on the binding edge */}
                      <div
                        aria-hidden="true"
                        className={`absolute top-0 bottom-0 ${isRTL ? 'end-0 w-3' : 'start-0 w-3'} pointer-events-none z-10`}
                        style={{
                          background: 'linear-gradient(to right, rgba(0, 0, 0, 0.45), transparent)',
                          boxShadow: 'inset 1px 0 0 rgba(255, 255, 255, 0.15)',
                        }}
                      />
                      {/* Subtle gloss sheen overlay */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-0 pointer-events-none z-10 opacity-20 group-hover:opacity-30 transition-opacity"
                        style={{
                          background:
                            'linear-gradient(125deg, rgba(255,255,255,0.35) 0%, transparent 45%, rgba(255,255,255,0.08) 100%)',
                        }}
                      />
                      {/* Top slot indicator: Book Number & Level badge */}
                      <div className="relative z-20 flex items-center justify-between w-full">
                        <span
                          className="px-2.5 py-1 rounded-full text-[11px] font-black font-english tracking-wider uppercase backdrop-blur-md"
                          style={{
                            background: 'rgba(5, 12, 30, 0.85)',
                            border: '1px solid rgba(56, 189, 248, 0.50)',
                            color: '#38BDF8',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                          }}
                        >
                          VOL. {book.number}
                        </span>

                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-md"
                          style={{
                            background: 'rgba(5, 12, 30, 0.85)',
                            border: `1px solid ${colors.pillBorder}`,
                            color: colors.pillText,
                            boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
                          }}
                        >
                          {book.badge}
                        </span>
                      </div>

                      {/* Bottom units bar on cover */}
                      <div
                        className="relative z-20 flex items-center justify-between text-[11px] text-slate-200 px-2.5 py-1 rounded-lg backdrop-blur-md"
                        style={{
                          background: 'rgba(5, 12, 30, 0.75)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                        }}
                      >
                        <span className="font-medium text-slate-300">{book.stage}</span>
                        <span className="font-bold text-[#38BDF8]">{book.units}</span>
                      </div>
                    </>
                  ) : (
                    /* High-status Placeholder Slot */
                    <>
                      {/* Physical book spine shadow (left in LTR, right in RTL) */}
                      <div
                        aria-hidden="true"
                        className={`absolute top-0 bottom-0 ${isRTL ? 'end-0 w-3' : 'start-0 w-3'} pointer-events-none`}
                        style={{
                          background:
                            'linear-gradient(to right, rgba(0, 0, 0, 0.5), transparent)',
                          boxShadow: 'inset 1px 0 0 rgba(255, 255, 255, 0.1)',
                        }}
                      />

                      {/* Foil border inset */}
                      <div
                        aria-hidden="true"
                        className="absolute inset-2 rounded-xl pointer-events-none"
                        style={{
                          border: '1px dashed rgba(56, 189, 248, 0.35)',
                        }}
                      />

                      {/* Top slot indicator: Book Number */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span
                          className="px-2.5 py-1 rounded-full text-[11px] font-black font-english tracking-wider uppercase"
                          style={{
                            background: 'rgba(56, 189, 248, 0.15)',
                            border: '1px solid rgba(56, 189, 248, 0.35)',
                            color: '#38BDF8',
                          }}
                        >
                          VOL. {book.number}
                        </span>

                        <span
                          className="px-2 py-0.5 rounded-full text-[10px] font-semibold"
                          style={{
                            background: colors.pillBg,
                            border: `1px solid ${colors.pillBorder}`,
                            color: colors.pillText,
                          }}
                        >
                          {book.badge}
                        </span>
                      </div>

                      {/* Center Emblem & Calligraphy Placeholder */}
                      <div className="relative z-10 flex flex-col items-center justify-center text-center my-auto px-2">
                        {/* Decorative Icon */}
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                          style={{
                            background: 'linear-gradient(135deg, rgba(56, 189, 248, 0.20), rgba(37, 99, 235, 0.25))',
                            border: '1px solid rgba(56, 189, 248, 0.40)',
                            boxShadow: '0 0 20px rgba(56, 189, 248, 0.25)',
                          }}
                        >
                          <BookOpen className="w-7 h-7 text-[#38BDF8]" />
                        </div>

                        {/* Arabic Title on cover */}
                        <div
                          className="font-arabic font-bold text-white text-base sm:text-lg leading-snug line-clamp-2 px-1"
                          style={{ textShadow: '0 2px 8px rgba(0, 0, 0, 0.8)' }}
                        >
                          {book.arabicTitle}
                        </div>

                        {/* "Picture Slot" dashed tag for the user */}
                        <div
                          className="inline-flex items-center gap-1.5 mt-3 px-2.5 py-1 rounded-md text-[10px] font-medium text-slate-300 transition-colors group-hover:text-[#38BDF8] group-hover:border-[#38BDF8]/60"
                          style={{
                            background: 'rgba(0, 0, 0, 0.45)',
                            border: '1px dashed rgba(255, 255, 255, 0.25)',
                          }}
                        >
                          <ImageIcon className="w-3 h-3 text-[#38BDF8]" />
                          <span>{booksData.placeholderNotice}</span>
                        </div>
                      </div>

                      {/* Bottom units bar on cover */}
                      <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-2 border-t border-white/10">
                        <span>{book.stage}</span>
                        <span className="font-semibold text-[#38BDF8]">{book.units}</span>
                      </div>
                    </>
                  )}
                </div>

                {/* ══ BOOK INFO ══ */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    {/* Stage & units header */}
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span
                        className="text-[11px] font-semibold tracking-wide"
                        style={{ color: colors.pillText }}
                      >
                        {book.stage}
                      </span>
                      <span className="text-[11px] text-[#8A97AD]">
                        {book.units}
                      </span>
                    </div>

                    {/* Book Primary Title */}
                    <h3
                      onClick={() => setSelectedBook(book)}
                      className="text-lg font-bold font-heading text-white group-hover:text-[#38BDF8] transition-colors leading-snug line-clamp-2 mb-1 cursor-pointer"
                    >
                      {book.title}
                    </h3>

                    {/* Arabic Subtitle */}
                    <div className="text-xs font-arabic text-[#8A97AD] mb-2.5 line-clamp-1">
                      {book.arabicTitle}
                    </div>

                    {/* Author & Publisher / Subject if present */}
                    {book.author && (
                      <div className="mb-2.5 pb-2 border-b border-white/5 space-y-1 text-[11px]">
                        <div className="flex items-center gap-1.5 text-slate-300">
                          <span className="text-slate-500">{isRTL ? 'المؤلف:' : 'Author:'}</span>
                          {book.authorUrl ? (
                            <a
                              href={book.authorUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[#38BDF8] hover:underline font-medium inline-flex items-center gap-0.5"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <span>{book.author}</span>
                              <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                            </a>
                          ) : (
                            <span className="text-slate-200 font-medium">{book.author}</span>
                          )}
                        </div>

                        {book.publisher && (
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <span className="text-slate-500">{isRTL ? 'الناشر:' : 'Publisher:'}</span>
                            {book.publisherUrl ? (
                              <a
                                href={book.publisherUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-300 hover:text-white transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {book.publisher}
                              </a>
                            ) : (
                              <span>{book.publisher}</span>
                            )}
                            {book.subject && (
                              <>
                                <span className="text-slate-600">•</span>
                                <span className="text-cyan-400/90">{book.subject}</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed line-clamp-3 mb-4">
                      {book.description}
                    </p>
                  </div>

                  {/* Card Action Footer */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedBook(book)}
                      className="group/btn inline-flex items-center gap-1.5 text-xs font-semibold text-[#38BDF8] hover:text-white transition-colors cursor-pointer"
                    >
                      <span>{booksData.ctaText}</span>
                      {isRTL ? (
                        <ArrowLeft className="w-3.5 h-3.5 group-hover/btn:-translate-x-1 transition-transform" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                      )}
                    </button>

                    <span className="text-[10px] text-slate-500 font-english uppercase tracking-wider">
                      Book {book.number}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ══ "SEE MORE" / "SHOW LESS" TOGGLE (For "All" Tab) ══ */}
        {activeTab === 'all' && (
          <div className="mt-12 flex flex-col items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm sm:text-base text-white transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
              style={{
                background: 'linear-gradient(135deg, rgba(14, 28, 64, 0.92) 0%, rgba(8, 16, 40, 0.96) 100%)',
                border: '1.5px solid rgba(56, 189, 248, 0.65)',
                boxShadow: '0 0 24px rgba(56, 189, 248, 0.28), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
              }}
              aria-expanded={showAll}
            >
              <BookOpen className="w-4 h-4 text-[#38BDF8] group-hover:scale-110 transition-transform" />
              <span>{showAll ? booksData.showLess : booksData.seeMore}</span>
              <ChevronDown
                className={`w-4 h-4 text-[#38BDF8] transition-transform duration-300 ${
                  showAll ? 'rotate-180' : ''
                }`}
              />
            </button>

            {!showAll && booksData.showingCountText && (
              <span className="text-xs text-[#8A97AD]">
                {booksData.showingCountText}
              </span>
            )}
          </div>
        )}

        {/* Bottom Banner — Call to Action */}
        <div
          className="mt-16 sm:mt-20 rounded-3xl p-8 sm:p-10 relative overflow-hidden"
          style={{
            background:
              'linear-gradient(135deg, rgba(8, 20, 50, 0.85) 0%, rgba(14, 32, 75, 0.90) 50%, rgba(5, 12, 30, 0.95) 100%)',
            border: '1.5px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 24px 60px rgba(0, 0, 0, 0.65), 0 0 35px rgba(56, 189, 248, 0.15)',
          }}
        >
          {/* Subtle glow */}
          <div
            className="absolute top-0 end-0 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(56, 189, 248, 0.20) 0%, transparent 70%)',
              filter: 'blur(50px)',
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold text-cyan-300 bg-cyan-950/60 border border-cyan-500/30 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
                <span>{isRTL ? 'منهج موثق ومعتمد' : 'Verified Pedagogical Continuum'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white">
                {isRTL
                  ? 'هل ترغب في استكشاف الكتاب التأسيسي الأول مجاناً؟'
                  : 'Ready to begin Book 01 free of charge?'}
              </h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">
                {isRTL
                  ? 'ابدأ بدراسة مخارج الحروف وقواعد النطق عبر الكتاب الأول الرقمي مع التقييم الصوتي الذكي فوراً.'
                  : 'Start learning phonetics and letter articulation with full digital access to Book 01 and instant interactive drills.'}
              </p>
            </div>

            <button
              onClick={() => onOpenModal('get-started')}
              className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold text-white shrink-0 overflow-hidden transition-all duration-300 active:scale-95 hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #38BDF8 0%, #3B82F6 50%, #1D4ED8 100%)',
                boxShadow: '0 0 28px rgba(56, 189, 248, 0.60)',
                border: '1.5px solid rgba(255, 255, 255, 0.60)',
              }}
            >
              <span className="relative z-10">
                {isRTL ? 'ابدأ دراسة الكتاب الأول الآن' : 'Start Book 01 Now Free'}
              </span>
              {isRTL ? (
                <ArrowLeft className="w-4 h-4 relative z-10 group-hover:-translate-x-1 transition-transform" />
              ) : (
                <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ══ BOOK DETAILS MODAL ══ */}
      {selectedBook && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          style={{ background: 'rgba(3, 7, 18, 0.88)', backdropFilter: 'blur(16px)' }}
          onClick={() => setSelectedBook(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl p-6 sm:p-8 overflow-hidden transition-all my-8 max-h-[90vh] overflow-y-auto"
            style={{
              background: 'linear-gradient(160deg, #0A1432 0%, #060B1C 100%)',
              border: '1.5px solid rgba(56, 189, 248, 0.45)',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(56, 189, 248, 0.20)',
            }}
            dir={isRTL ? 'rtl' : 'ltr'}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBook(null)}
              className="absolute top-5 end-5 p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer z-10"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-start">
              {/* Book Cover Column */}
              <div className="md:col-span-5 flex flex-col items-center">
                <div
                  className="relative w-full max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                  style={{
                    border: '2px solid rgba(56, 189, 248, 0.35)',
                    boxShadow: '0 15px 35px rgba(0,0,0,0.7), 0 0 25px rgba(56,189,248,0.25)',
                  }}
                >
                  {selectedBook.image ? (
                    <img
                      src={selectedBook.image}
                      alt={selectedBook.title}
                      className="w-full h-full object-cover object-top"
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-slate-900 p-4 text-center">
                      <BookOpen className="w-12 h-12 text-[#38BDF8] mb-2" />
                      <span className="text-sm font-bold text-white">{selectedBook.title}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 flex items-center gap-2">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-black font-english uppercase tracking-wider"
                    style={{
                      background: 'rgba(56, 189, 248, 0.15)',
                      border: '1px solid rgba(56, 189, 248, 0.40)',
                      color: '#38BDF8',
                    }}
                  >
                    VOL. {selectedBook.number}
                  </span>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.40)',
                      color: '#818CF8',
                    }}
                  >
                    {selectedBook.badge}
                  </span>
                </div>
              </div>

              {/* Book Details Column */}
              <div className="md:col-span-7 flex flex-col space-y-4">
                <div>
                  <div className="text-xs font-semibold text-[#38BDF8] tracking-wider mb-1">
                    {selectedBook.stage} • {selectedBook.units}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold font-heading text-white leading-tight">
                    {selectedBook.title}
                  </h3>
                  <div className="text-sm font-arabic text-slate-400 mt-1">
                    {selectedBook.arabicTitle}
                  </div>
                </div>

                {/* Author, Publisher, Subject links */}
                {(selectedBook.author || selectedBook.publisher) && (
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 space-y-2 text-xs">
                    {selectedBook.author && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">{isRTL ? 'المؤلف:' : 'Author:'}</span>
                        {selectedBook.authorUrl ? (
                          <a
                            href={selectedBook.authorUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#38BDF8] hover:underline font-semibold inline-flex items-center gap-1"
                          >
                            <span>{selectedBook.author}</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        ) : (
                          <span className="text-white font-medium">{selectedBook.author}</span>
                        )}
                      </div>
                    )}

                    {selectedBook.publisher && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">{isRTL ? 'الناشر:' : 'Publisher:'}</span>
                        {selectedBook.publisherUrl ? (
                          <a
                            href={selectedBook.publisherUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-cyan-300 hover:underline font-medium inline-flex items-center gap-1"
                          >
                            <span>{selectedBook.publisher}</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        ) : (
                          <span className="text-white font-medium">{selectedBook.publisher}</span>
                        )}
                      </div>
                    )}

                    {selectedBook.subject && (
                      <div className="flex items-center gap-2">
                        <span className="text-slate-400">{isRTL ? 'المجال:' : 'Subject:'}</span>
                        {selectedBook.subjectUrl ? (
                          <a
                            href={selectedBook.subjectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-indigo-300 hover:underline font-medium inline-flex items-center gap-1"
                          >
                            <span>{selectedBook.subject}</span>
                            <ExternalLink className="w-3 h-3 opacity-70" />
                          </a>
                        ) : (
                          <span className="text-white font-medium">{selectedBook.subject}</span>
                        )}
                      </div>
                    )}

                    {/* Interactive Audio Companion link */}
                    <div className="flex items-center gap-2 pt-1 border-t border-white/10">
                      <span className="text-slate-400">{isRTL ? 'المكتبة الصوتية:' : 'Audio Companion:'}</span>
                      <a
                        href="https://kids.arabicforall.net"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 hover:underline font-medium inline-flex items-center gap-1"
                      >
                        <span>kids.arabicforall.net</span>
                        <ExternalLink className="w-3 h-3 opacity-70" />
                      </a>
                    </div>
                  </div>
                )}

                {/* Full description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {selectedBook.description}
                </p>

                {/* What the book contains */}
                {selectedBook.bulletPoints && selectedBook.bulletPoints.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {isRTL ? 'محتويات الكتاب ومحاوره:' : 'What This Book Covers:'}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {selectedBook.bulletPoints.map((point, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Key Features */}
                {selectedBook.keyFeatures && selectedBook.keyFeatures.length > 0 && (
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      {isRTL ? 'أبرز مميزات الكتاب:' : 'Special Features:'}
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {selectedBook.keyFeatures.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Action buttons */}
                <div className="pt-4 flex items-center gap-3">
                  <button
                    onClick={() => {
                      setSelectedBook(null);
                      onOpenModal('get-started');
                    }}
                    className="flex-1 py-3 px-6 rounded-full font-bold text-sm text-white transition-all hover:scale-105 active:scale-95 cursor-pointer"
                    style={{
                      background: 'linear-gradient(135deg, #38BDF8 0%, #3B82F6 100%)',
                      boxShadow: '0 0 20px rgba(56, 189, 248, 0.45)',
                    }}
                  >
                    {isRTL ? 'ابدأ دراسة هذا الكتاب مجاناً' : 'Start Studying This Book Free'}
                  </button>
                  <button
                    onClick={() => setSelectedBook(null)}
                    className="py-3 px-5 rounded-full font-semibold text-sm text-slate-300 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    {isRTL ? 'إغلاق' : 'Close'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
