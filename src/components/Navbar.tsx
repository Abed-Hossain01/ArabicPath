import React, { useState, useEffect } from 'react';
import { Menu, X, BookMarked, ArrowRight, ArrowLeft } from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface NavbarProps {
  lang: Language;
  onToggleLang: () => void;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const Navbar: React.FC<NavbarProps> = ({ lang, onToggleLang, onOpenModal, content }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const isRTL = lang === 'ar';
  const { nav, brand } = content;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ['home', 'about', 'books', 'journey', 'features', 'why-us', 'contact'];
      const pos = window.scrollY + 120;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home',     label: nav.home,     href: '#home' },
    { id: 'about',    label: nav.about,    href: '#about' },
    { id: 'books',    label: nav.books || (lang === 'ar' ? 'الكتب (١٢)' : '12 Books'), href: '#books' },
    { id: 'journey',  label: nav.journey,  href: '#journey' },
    { id: 'features', label: nav.features, href: '#features' },
    { id: 'why-us',   label: nav.whyUs,    href: '#why-us' },
    { id: 'contact',  label: nav.contact,  href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Floating Pill Navbar ── */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ${
          scrolled ? 'pt-3' : 'pt-4'
        }`}
      >
        <div
          className={`navbar-pill rounded-full w-[calc(100%-2rem)] max-w-5xl px-3 py-2 flex items-center justify-between transition-all duration-300 ${
            scrolled ? 'shadow-[0_8px_32px_rgba(0,0,0,0.6)]' : ''
          }`}
        >
          {/* ─── Logo ─── */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[--color-accent] rounded-full px-1"
            aria-label="Riḥlat al-ʿArabiyyah — Home"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-to-br from-blue-900 via-blue-950 to-[#070B14] border border-blue-500/30 group-hover:border-[#38BDF8]/50 transition-colors duration-200 shrink-0">
              <BookMarked className="w-4 h-4 text-[#38BDF8]" />
            </div>
            <span className="hidden sm:block text-[15px] font-semibold text-white font-heading leading-none group-hover:text-[#38BDF8] transition-colors duration-200">
              {isRTL ? brand.name : brand.name}
            </span>
          </a>

          {/* ─── Desktop Nav Links (center) ─── */}
          <nav
            className="hidden lg:flex items-center gap-0.5"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    active
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-[#8A97AD] hover:text-white hover:bg-white/5'
                  }`}
                  aria-current={active ? 'page' : undefined}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* ─── Right Actions ─── */}
          <div className="flex items-center gap-1.5">
            {/* Language toggle — desktop */}
            <button
              onClick={onToggleLang}
              className="hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[13px] font-medium text-[#8A97AD] hover:text-white hover:bg-white/5 transition-all duration-200"
              title={isRTL ? 'Switch to English' : 'التحويل إلى العربية'}
              aria-label={isRTL ? 'Switch to English' : 'التبديل إلى العربية'}
            >
              <span className="text-xs font-semibold tracking-wider">{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>

            {/* Login — desktop */}
            <button
              onClick={() => onOpenModal('login')}
              className="hidden md:block px-3.5 py-1.5 text-[13px] font-medium text-[#8A97AD] hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {nav.login}
            </button>

            {/* Start Free CTA */}
            <button
              onClick={() => onOpenModal('get-started')}
              className="group hidden md:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#38BDF8] hover:bg-[#7DD3FC] text-[#070B14] text-[13px] font-bold transition-all duration-200 hover:shadow-[0_0_16px_rgba(56,189,248,0.35)] active:scale-95"
            >
              <span>{nav.getStarted}</span>
              {isRTL
                ? <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
                : <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              }
            </button>

            {/* Mobile: lang toggle */}
            <button
              onClick={onToggleLang}
              className="md:hidden px-2.5 py-1.5 rounded-full border border-white/10 text-[12px] font-semibold text-[#8A97AD] hover:text-white transition-colors"
              aria-label="Toggle language"
            >
              {lang === 'ar' ? 'EN' : 'عربي'}
            </button>

            {/* Mobile: hamburger */}
            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 rounded-full text-[#8A97AD] hover:text-white hover:bg-white/5 transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* ── Mobile Drawer ── */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-x-0 top-[calc(4rem+16px)] z-40 md:hidden px-4"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="glass-card p-3 space-y-1 animate-fade-up">
            {navLinks.map((link) => {
              const active = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.href)}
                  className={`w-full text-start px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    active
                      ? 'bg-white/10 text-white font-semibold'
                      : 'text-[#8A97AD] hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}

            <div className="pt-3 border-t border-white/5 flex flex-col gap-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenModal('login'); }}
                className="w-full py-2.5 text-center text-sm font-medium text-[#8A97AD] hover:text-white bg-white/5 hover:bg-white/10 rounded-xl transition-colors"
              >
                {nav.login}
              </button>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenModal('get-started'); }}
                className="w-full py-2.5 text-center text-sm font-bold text-[#070B14] bg-[#38BDF8] hover:bg-[#7DD3FC] rounded-xl transition-colors"
              >
                {nav.getStarted}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
