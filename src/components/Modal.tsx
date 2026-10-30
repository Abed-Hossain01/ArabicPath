import React, { useState } from 'react';
import { X, CheckCircle, Sparkles, BookOpen, User, Mail, ArrowRight, ArrowLeft } from 'lucide-react';
import type { ContentData, Language } from '../data/content';

interface ModalProps {
  isOpen: boolean;
  mode: 'login' | 'get-started';
  onClose: () => void;
  lang: Language;
  content: ContentData;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, mode, onClose, lang, content }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState(content.modal.levelOptions[0]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const isRTL = lang === 'ar';
  const t = content.modal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 700);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setEmail('');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
      onClick={handleResetAndClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-dark-900/95 border border-blue-500/50 rounded-2xl shadow-blue-glow-lg overflow-hidden p-6 sm:p-8 backdrop-blur-2xl"
        onClick={(e) => e.stopPropagation()}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        {/* Subtle decorative blue corner glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-bl-full pointer-events-none blur-xl" />
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-400/10 rounded-tr-full pointer-events-none blur-lg" />

        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 left-4 rtl:left-auto rtl:right-auto rtl:left-4 ltr:right-4 p-2 text-slate-400 hover:text-cyan-300 rounded-full hover:bg-dark-800 transition-colors"
          aria-label={t.close}
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 bg-blue-950 border border-blue-500/50 text-cyan-400 rounded-full flex items-center justify-center mx-auto shadow-blue-glow">
              <CheckCircle className="w-10 h-10 text-cyan-400" />
            </div>
            <h3 className="text-2xl font-bold text-white font-heading">{t.successTitle}</h3>
            <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
              {t.successMessage}
            </p>
            <div className="p-3 bg-dark-850 border border-blue-800/60 rounded-xl text-xs text-cyan-300 font-medium">
              {email ? (
                <span>
                  {isRTL ? 'البريد المسجل:' : 'Registered email:'}{' '}
                  <strong className="text-white">{email}</strong>
                </span>
              ) : null}
            </div>
            <button
              onClick={handleResetAndClose}
              className="mt-6 w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-medium rounded-xl shadow-blue-glow transition-all duration-200"
            >
              {t.close}
            </button>
          </div>
        ) : (
          <div>
            {/* Header */}
            <div className="text-start mb-6">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/40 text-cyan-300 text-xs font-semibold mb-3 shadow-blue-glow">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>{content.brand.name}</span>
              </div>
              <h3 className="text-2xl font-bold text-white font-heading">
                {mode === 'login' ? t.loginTitle : t.getStartedTitle}
              </h3>
              <p className="text-slate-300 text-sm mt-1">
                {mode === 'login' ? t.loginSubtitle : t.getStartedSubtitle}
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              {mode === 'get-started' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.nameLabel}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-cyan-400 absolute top-3.5 start-3 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={t.namePlaceholder}
                      className="w-full ps-10 pe-4 py-2.5 bg-dark-850 border border-blue-900/60 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition"
                    />
                  </div>
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.emailLabel}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-cyan-400 absolute top-3.5 start-3 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t.emailPlaceholder}
                    className="w-full ps-10 pe-4 py-2.5 bg-dark-850 border border-blue-900/60 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition"
                  />
                </div>
              </div>

              {mode === 'get-started' && (
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.levelLabel}
                  </label>
                  <div className="relative">
                    <BookOpen className="w-4 h-4 text-cyan-400 absolute top-3.5 start-3 pointer-events-none" />
                    <select
                      value={level}
                      onChange={(e) => setLevel(e.target.value)}
                      className="w-full ps-10 pe-4 py-2.5 bg-dark-850 border border-blue-900/60 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-400 transition appearance-none cursor-pointer"
                    >
                      {t.levelOptions.map((opt, i) => (
                        <option key={i} value={opt} className="bg-dark-900 text-white">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full mt-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 active:scale-[0.99] text-white font-medium rounded-xl shadow-blue-glow transition-all duration-200 flex items-center justify-center gap-2 group disabled:opacity-60"
              >
                {isLoading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{mode === 'login' ? t.submitLogin : t.submitGetStarted}</span>
                    {isRTL ? (
                      <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    ) : (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400 mt-3">{t.note}</p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
