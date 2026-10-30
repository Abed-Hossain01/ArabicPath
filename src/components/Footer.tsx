import React, { useState } from 'react';
import {
  BookMarked,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface FooterProps {
  lang: Language;
  onOpenModal: (mode: 'login' | 'get-started') => void;
  content: ContentData;
}

export const Footer: React.FC<FooterProps> = ({ lang, content }) => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const isRTL = lang === 'ar';
  const { footer, brand } = content;

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  const handleScrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="contact" className="bg-[#02050e] text-white relative overflow-hidden pt-16 pb-12 border-t border-blue-900/50">
      {/* Decorative lattice watermark */}
      <div className="absolute inset-0 bg-dark-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 start-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-blue-950">
          {/* Col 1: Platform Brand & Mission (4 cols) */}
          <div className="lg:col-span-4 text-start space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-700 to-dark-950 text-cyan-300 flex items-center justify-center border border-blue-500/40 shadow-blue-glow">
                <BookMarked className="w-5 h-5 text-cyan-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold font-heading text-white">
                  {brand.name}
                </span>
                <span className="text-[11px] text-cyan-400 font-english uppercase tracking-wider">
                  {brand.subname}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              {footer.description}
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              {[
                { name: 'X / Twitter', icon: '𝕏' },
                { name: 'YouTube', icon: '▶' },
                { name: 'Telegram', icon: '✈' },
                { name: 'LinkedIn', icon: 'in' },
              ].map((soc, i) => (
                <button
                  key={i}
                  aria-label={soc.name}
                  onClick={() => alert(isRTL ? `تابعنا قريباً على ${soc.name}!` : `Follow us soon on ${soc.name}!`)}
                  className="w-8 h-8 rounded-lg bg-dark-900 hover:bg-blue-600 text-cyan-300 hover:text-white border border-blue-900/60 hover:border-cyan-400 flex items-center justify-center text-xs font-bold transition-all hover:shadow-blue-glow"
                >
                  {soc.icon}
                </button>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 text-start space-y-3">
            <h4 className="text-sm font-bold text-cyan-300 font-heading tracking-wide uppercase">
              {footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {footer.quickLinks.map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(link.href)}
                    className="hover:text-cyan-300 transition-colors text-start"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Programs & Books (3 cols) */}
          <div className="lg:col-span-3 text-start space-y-3">
            <h4 className="text-sm font-bold text-cyan-300 font-heading tracking-wide uppercase">
              {footer.programsTitle}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {footer.programs.map((item, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => handleScrollTo(item.href)}
                    className="hover:text-cyan-300 transition-colors text-start"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter (3 cols) */}
          <div className="lg:col-span-3 text-start space-y-4">
            <h4 className="text-sm font-bold text-cyan-300 font-heading tracking-wide uppercase">
              {footer.contactTitle}
            </h4>

            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <a
                  href={`mailto:${footer.contactInfo.email}`}
                  className="hover:text-white transition-colors"
                >
                  {footer.contactInfo.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span dir="ltr" className="hover:text-white">
                  {footer.contactInfo.phone}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{footer.contactInfo.location}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{footer.contactInfo.workingHours}</span>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="pt-2">
              <div className="text-xs font-semibold text-slate-300 mb-1.5">
                {footer.newsletterTitle}
              </div>
              <form onSubmit={handleNewsletterSubmit} className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder={footer.newsletterPlaceholder}
                  className="w-full ps-3 pe-10 py-2.5 bg-dark-900 border border-blue-900/60 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition"
                />
                <button
                  type="submit"
                  aria-label={footer.newsletterButton}
                  className="absolute top-1/2 -translate-y-1/2 end-1.5 p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition shadow-blue-glow"
                >
                  {isRTL ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </form>
              {newsletterSubscribed && (
                <div className="mt-1.5 flex items-center gap-1.5 text-[11px] text-cyan-400">
                  <CheckCircle className="w-3.5 h-3.5" />
                  <span>
                    {isRTL ? 'شكراً لاشتراكك في النشرة!' : 'Thank you for subscribing!'}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 text-center sm:text-start">
          <div>{footer.rights}</div>
          <div className="flex items-center gap-6">
            <button
              onClick={() =>
                alert(
                  isRTL
                    ? 'سياسة الخصوصية: تلتزم رِحْلَةُ الْعَرَبِيَّة بحماية بيانات المتعلمين وعدم مشاركتها مع أي جهة خارجية.'
                    : 'Privacy Policy: Riḥlat al-ʿArabiyyah is dedicated to academic privacy and never shares student information.'
                )
              }
              className="hover:text-slate-300 transition"
            >
              {footer.privacy}
            </button>
            <span>•</span>
            <button
              onClick={() =>
                alert(
                  isRTL
                    ? 'الشروط والأحكام: منصة تعليمية غير ربحية تقدم مسارات معتمدة وفق حقوق الملكية الفكرية للمناهج العربية.'
                    : 'Terms of Service: Accredited educational pathways compliant with academic copyrights.'
                )
              }
              className="hover:text-slate-300 transition"
            >
              {footer.terms}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
