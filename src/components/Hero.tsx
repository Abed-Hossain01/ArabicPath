import React, { useRef, useEffect } from 'react';
import { ArrowRight, ArrowLeft, Compass } from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface HeroProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

/* ─────────────────────────────────────────────────────────
   Twinkling star-field canvas
───────────────────────────────────────────────────────── */
function StarField({ reduced }: { reduced: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();

    const W = canvas.width;
    const H = canvas.height;

    const stars = Array.from({ length: 220 }, () => ({
      x:  Math.random() * W,
      y:  Math.random() * H,
      r:  Math.random() * 1.4 + 0.25,
      a:  Math.random(),
      da: (Math.random() * 0.007 + 0.002) * (Math.random() < 0.5 ? 1 : -1),
      cold: Math.random() < 0.3,
    }));

    if (reduced) {
      stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.cold
          ? 'rgba(160,210,255,0.70)'
          : 'rgba(255,255,255,0.70)';
        ctx.fill();
      });
      return;
    }

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      stars.forEach(s => {
        s.a += s.da;
        if (s.a > 1 || s.a < 0.05) s.da *= -1;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = s.cold
          ? `rgba(160,210,255,${s.a.toFixed(2)})`
          : `rgba(255,255,255,${s.a.toFixed(2)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [reduced]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: 'absolute', inset: 0,
        width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: 2,
      }}
    />
  );
}

/* ─── Floating Arabic letters ─── */
const LETTERS = [
  { char: 'ع', size: '3.5rem', left: '43%', delay: '0s',   dur: '5.2s', blur: 0, glow: 0.90 },
  { char: 'ر', size: '2.6rem', left: '34%', delay: '0.9s', dur: '5.8s', blur: 0, glow: 0.80 },
  { char: 'ب', size: '3rem',   left: '54%', delay: '1.5s', dur: '6.0s', blur: 0, glow: 0.85 },
  { char: 'ي', size: '2.1rem', left: '26%', delay: '2.2s', dur: '5.5s', blur: 2, glow: 0.60 },
  { char: 'ة', size: '1.8rem', left: '64%', delay: '0.4s', dur: '6.3s', blur: 3, glow: 0.50 },
  { char: 'ل', size: '2.4rem', left: '38%', delay: '3.0s', dur: '5.0s', blur: 1, glow: 0.70 },
  { char: 'ا', size: '1.6rem', left: '58%', delay: '1.8s', dur: '6.8s', blur: 4, glow: 0.40 },
];
const LETTERS_MOBILE = LETTERS.slice(0, 3);

/* ─────────────────────────────────────────────────────────
   Hero
───────────────────────────────────────────────────────── */
export const Hero: React.FC<HeroProps> = ({ lang, onOpenModal, content }) => {
  const isRTL = lang === 'ar';
  const { hero } = content;

  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile =
    typeof window !== 'undefined' && window.innerWidth < 768;

  const letters = isMobile ? LETTERS_MOBILE : LETTERS;

  const scrollToAbout = () =>
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
      id="home"
      dir={isRTL ? 'rtl' : 'ltr'}
      className="relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #010510 0%, #020A1E 28%, #050E26 65%, #030810 100%)',
        minHeight: '100svh',
        paddingBottom: 0,
      }}
    >
      {/* ── Bottom fade into next section (behind content) ── */}
      <div aria-hidden="true" style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '160px',
        background: 'linear-gradient(to bottom, transparent, #030810)',
        zIndex: 1, pointerEvents: 'none',
      }} />

      {/* ── Starfield canvas (whole section height) ── */}
      <StarField reduced={prefersReduced} />

      {/* ── Central nebula glow ── */}
      <div
        className={prefersReduced ? '' : 'animate-glow-pulse'}
        aria-hidden="true"
        style={{
          position: 'absolute', top: '30%', left: '50%',
          transform: 'translateX(-50%)',
          width: '860px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(30,80,255,0.40) 0%, rgba(15,50,180,0.18) 45%, transparent 72%)',
          filter: 'blur(55px)', pointerEvents: 'none', zIndex: 3,
        }}
      />

      {/* ── Shooting stars ── */}
      {!prefersReduced && (
        <>
          <div aria-hidden="true" className="animate-shoot-1" style={{
            position: 'absolute', top: '18%', left: '15%',
            width: '130px', height: '1px',
            background: 'linear-gradient(90deg, rgba(160,210,255,0.85), transparent)',
            borderRadius: '999px', zIndex: 4, pointerEvents: 'none',
          }} />
          <div aria-hidden="true" className="animate-shoot-2" style={{
            position: 'absolute', top: '35%', left: '62%',
            width: '90px', height: '1px',
            background: 'linear-gradient(90deg, rgba(200,230,255,0.65), transparent)',
            borderRadius: '999px', zIndex: 4, pointerEvents: 'none',
          }} />
        </>
      )}

      {/* ══════════════════════════════════════════════════════
          CONTENT WRAPPER — padded from navbar, all stacked
      ══════════════════════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          zIndex: 20,
          paddingTop: 'clamp(4rem, 6vw, 5.5rem)',
        }}
      >
        {/* ── 1. HEADLINE ── */}
        <div
          className="animate-hero-fade text-center px-4"
          style={{ animationDelay: '0.1s', marginBottom: '0.25rem' }}
        >
          {/* Eyebrow pill */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-3 text-xs font-medium"
            style={{
              background: 'rgba(56,130,255,0.12)',
              border: '1px solid rgba(56,130,255,0.30)',
              color: '#60A5FA', letterSpacing: '0.06em',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
            {hero.badge}
          </div>

          <h1
            className="font-heading font-bold text-white mx-auto"
            style={{
              fontSize: 'clamp(2.1rem, 4.2vw, 3.4rem)',
              lineHeight: '1.12', maxWidth: '820px', letterSpacing: '-0.02em',
            }}
          >
            {isRTL ? (
              <>
                <span>{hero.headline} </span>
                <span className="italic" style={{ color: '#60A5FA' }}>{hero.headlineAccent}</span>
              </>
            ) : (
              <>
                <span>Classical fluency,</span>
                <br />
                <em className="not-italic italic font-semibold" style={{ color: '#60A5FA' }}>
                  timeless eloquence.
                </em>
              </>
            )}
          </h1>
        </div>

        {/* ── 2. BOOK (immediately under heading; side panels commented out) ── */}
        <div
          className="relative mx-auto px-4 flex flex-col items-center justify-center"
          style={{ maxWidth: '1200px' }}
        >
          {/* 
            ══ LEFT CARD (Commented out) ══
            <div className="hidden md:flex justify-end items-end" style={{ alignSelf: 'end' }}>
              <div
                ref={leftCardRef}
                className={`relative ${!prefersReduced && !isMobile ? 'animate-card-3d-left' : ''}`}
                style={{ ...glassCard, width: '240px', padding: '20px', minHeight: '380px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                <CardShine />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="font-arabic font-bold text-white mb-0.5" style={{
                    fontSize: '2.2rem', lineHeight: '1.15', direction: 'rtl', textAlign: 'right',
                    textShadow: '0 0 24px rgba(96,165,250,0.45)',
                  }}>الفصاحة</div>
                  <div className="font-english text-[12px] mb-2" style={{ color: '#60A5FA' }}>
                    al-faṣāhah · {isRTL ? 'اسم' : 'noun'}
                  </div>
                  <p className="text-[12px] leading-relaxed mb-3" style={{ color: '#8A97AD' }}>
                    {isRTL ? 'خلوص الكلام من التعقيد، ووضوح دلالة المعنى.' : 'Purity of speech and clarity of meaning.'}
                  </p>
                  <div className="flex items-center justify-between text-[12px] pb-2.5 mb-2.5"
                    style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ color: '#8A97AD' }}>{isRTL ? 'الجذر' : 'Root'}</span>
                    <span className="font-arabic font-semibold" style={{ color: '#60A5FA', direction: 'rtl' }}>
                      ف - ص - ح
                    </span>
                  </div>
                  <p className="text-[11px] italic mb-3" style={{ color: '#6B7A96', lineHeight: '1.5' }}>
                    {isRTL
                      ? '﴿وَأَخِي هَارُونُ هُوَ أَفْصَحُ مِنِّي لِسَانًا﴾'
                      : '"He is more eloquent than I in speech." — Qur\'an 28:34'}
                  </p>
                  <div className="flex items-center gap-2 text-[11px]" style={{ color: '#8A97AD' }}>
                    <div className="w-2 h-2 rounded-full shrink-0" style={{ background: 'rgba(59,130,246,0.6)' }} />
                    {isRTL ? 'مستوى: مبتدئ إلى متقدم' : 'Level: Beginner to Advanced'}
                  </div>
                </div>
                <button
                  onClick={handlePlayAudio}
                  aria-label={hero.previewCard.audioLabel}
                  className={`relative z-10 inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-200 ${
                    isPlayingAudio ? 'bg-[#3B82F6] text-white' : 'text-white hover:bg-white/10'
                  }`}
                  style={{ border: '1px solid rgba(99,153,255,0.35)' }}
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isPlayingAudio ? 'animate-bounce' : 'text-[#60A5FA]'}`} />
                  {isPlayingAudio ? (isRTL ? 'جاري…' : 'Playing…') : (isRTL ? 'استمع' : 'Listen')}
                </button>
              </div>
            </div>
          */}

          {/* ══ CENTRE — Glowing Open Book (positioned further down) ══ */}
          <div
            className="relative flex flex-col justify-end items-center w-full mt-14 md:mt-20 lg:mt-24"
            style={{ maxWidth: 'clamp(280px, 42vw, 540px)' }}
          >
            {/* Floating Arabic letters */}
            {!prefersReduced && letters.map((l, i) => (
              <span key={i}
                className="animate-letter-rise pointer-events-none select-none absolute font-arabic font-bold text-white"
                style={{
                  left: l.left, bottom: '60%',
                  fontSize: l.size,
                  filter: l.blur ? `blur(${l.blur}px)` : undefined,
                  opacity: 0,
                  animationDelay: l.delay, animationDuration: l.dur,
                  zIndex: 20,
                  textShadow: `0 0 20px rgba(99,153,255,${l.glow}), 0 0 40px rgba(56,189,248,0.6)`,
                }}
              >{l.char}</span>
            ))}

            <img
              src="/homebook.png?v=3"
              alt={isRTL ? 'كتاب عربي متوهج' : 'Glowing open Arabic book'}
              loading="eager" decoding="async"
              className={prefersReduced ? '' : 'animate-book-float'}
              style={{
                width: '100%',
                display: 'block', position: 'relative', zIndex: 5,
                filter: [
                  'hue-rotate(200deg)', 'saturate(1.6)', 'brightness(1.08)',
                  'drop-shadow(0 0 85px rgba(25,90,255,0.85))',
                  'drop-shadow(0 0 35px rgba(56,140,255,0.65))',
                  'drop-shadow(0 0 12px rgba(100,180,255,0.45))',
                ].join(' '),
              }}
            />
          </div>

          {/* 
            ══ RIGHT CARD (Commented out) ══
            <div className="hidden md:flex justify-start items-end" style={{ alignSelf: 'end' }}>
              <div
                ref={rightCardRef}
                className={`relative ${!prefersReduced && !isMobile ? 'animate-card-3d-right' : ''}`}
                style={{ ...glassCard, width: '240px', padding: '20px', minHeight: '380px',
                  display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                  animationDelay: '0.8s' }}
              >
                <CardShine />
                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div className="text-[10px] font-english tracking-widest uppercase mb-1" style={{ color: '#60A5FA' }}>
                    {isRTL ? 'الوحدة الأولى' : 'Unit 1'}
                  </div>
                  <div className="font-heading font-bold text-white text-[1rem] mb-3">
                    {isRTL ? 'الحروف العربية' : 'The Arabic letters'}
                  </div>
                  <div className="flex gap-1.5 mb-3 flex-wrap" dir="rtl">
                    {['ا','ب','ت','ث','ج'].map(letter => (
                      <div key={letter}
                        className="w-9 h-9 rounded-xl flex items-center justify-center font-arabic font-bold text-white text-base"
                        style={{ background: 'rgba(59,130,246,0.22)', border: '1px solid rgba(59,130,246,0.42)' }}>
                        {letter}
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center justify-between text-[11px] mb-1.5" style={{ color: '#8A97AD' }}>
                    <span>{isRTL ? '١٨ من ٢٥ درساً' : '18 of 25 lessons'}</span>
                    <span className="font-semibold" style={{ color: '#60A5FA' }}>72%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden mb-3.5" style={{ background: 'rgba(255,255,255,0.08)' }}>
                    <div className="h-full rounded-full" style={{
                      width: '72%',
                      background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
                      boxShadow: '0 0 8px rgba(96,165,250,0.55)',
                    }} />
                  </div>
                  {[
                    { label: isRTL ? 'المستوى' : 'Level',   val: isRTL ? 'متوسط'  : 'Intermediate' },
                    { label: isRTL ? 'التقييم' : 'Rating',  val: '4.9 ★' },
                    { label: isRTL ? 'الطلاب'  : 'Students', val: '15K+' },
                  ].map(row => (
                    <div key={row.label} className="flex items-center justify-between text-[11px] mb-1.5" style={{ color: '#8A97AD' }}>
                      <span>{row.label}</span>
                      <span className="font-semibold" style={{ color: '#60A5FA' }}>{row.val}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => onOpenModal('get-started')}
                  className="relative z-10 w-full py-2 rounded-full text-[12px] font-bold text-white transition-all duration-200 hover:brightness-110"
                  style={{ background: 'linear-gradient(135deg, #3B82F6, #2563EB)', boxShadow: '0 0 14px rgba(59,130,246,0.35)' }}
                >
                  {isRTL ? 'ابدأ الآن' : 'Start now →'}
                </button>
              </div>
            </div>
          */}
        </div>

        {/* ── 3. GLOWING CTA BUTTONS — directly below book ── */}
        <div
          className="animate-hero-fade flex items-center justify-center gap-5 flex-wrap px-4 pt-3 pb-8 relative"
          style={{ animationDelay: '0.35s', zIndex: 25 }}
        >
          {/* Primary CTA — radiating neon blue glow */}
          <button
            onClick={() => onOpenModal('get-started')}
            className="group relative inline-flex items-center gap-2.5 px-9 py-4 rounded-full font-bold text-white overflow-hidden transition-all duration-300 active:scale-[0.97] animate-button-glow hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, #38BDF8 0%, #3B82F6 45%, #1D4ED8 100%)',
              fontSize: '1rem',
              letterSpacing: '0.01em',
              border: '1.5px solid rgba(255, 255, 255, 0.70)',
            }}
          >
            <span
              className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.40), transparent)' }}
            />
            <span className="relative z-10 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {hero.primaryCta}
            </span>
            {isRTL
              ? <ArrowLeft  className="w-4 h-4 relative z-10 text-white group-hover:-translate-x-0.5 transition-transform" />
              : <ArrowRight className="w-4 h-4 relative z-10 text-white group-hover:translate-x-0.5 transition-transform" />
            }
          </button>

          {/* Secondary CTA — glowing neon glass outline button */}
          <button
            onClick={scrollToAbout}
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-bold transition-all duration-300 active:scale-[0.97] animate-outline-glow hover:scale-105"
            style={{
              background: 'rgba(12, 24, 52, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1.5px solid rgba(56, 189, 248, 0.85)',
              color: '#FFFFFF',
              fontSize: '1rem',
            }}
          >
            <Compass className="w-4 h-4 text-[#38BDF8] group-hover:rotate-45 transition-transform duration-300 drop-shadow-[0_0_12px_rgba(56,189,248,0.9)]" />
            <span className="text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
              {hero.secondaryCta}
            </span>
          </button>
        </div>

        {/* ── Mobile stat strip ── */}
        <div className="md:hidden flex justify-center gap-8 pb-10 px-4">
          {[
            { value: hero.stats.studentsCount, label: hero.stats.studentsLabel },
            { value: hero.stats.lessonsCount,  label: hero.stats.lessonsLabel },
            { value: hero.stats.ratingValue,   label: hero.stats.ratingLabel },
          ].map((s, i) => (
            <React.Fragment key={i}>
              {i > 0 && <div className="w-px self-stretch" style={{ background: 'rgba(255,255,255,0.07)' }} />}
              <div className="text-center">
                <div className="font-heading font-black text-white" style={{ fontSize: '1.25rem' }}>{s.value}</div>
                <div className="text-[11px] mt-0.5" style={{ color: '#8A97AD' }}>{s.label}</div>
              </div>
            </React.Fragment>
          ))}
        </div>

      </div>{/* /content wrapper */}
    </section>
  );
};
