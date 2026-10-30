import React, { useState, useEffect } from 'react';
import type { Language } from '../data/content';
import { content } from '../data/content';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { BooksSection } from '../components/BooksSection';
import { About } from '../components/About';
import { LearningJourney } from '../components/LearningJourney';
import { Features } from '../components/Features';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { CTA } from '../components/CTA';
import { Footer } from '../components/Footer';
import { Modal } from '../components/Modal';

export const Home: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: 'login' | 'get-started';
  }>({
    isOpen: false,
    mode: 'get-started',
  });

  const currentContent = content[lang];
  const isRTL = lang === 'ar';

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    document.title =
      lang === 'ar'
        ? 'رِحْلَةُ الْعَرَبِيَّة | منصة إتقان اللغة العربية'
        : 'Riḥlat al-ʿArabiyyah | Classical Arabic Learning Platform';
  }, [lang, isRTL]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const handleOpenModal = (mode: 'login' | 'get-started') => {
    setModalState({ isOpen: true, mode });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`min-h-screen bg-[#030712] text-slate-100 transition-colors duration-200 selection:bg-blue-600 selection:text-white ${
        isRTL ? 'font-arabic-body' : 'font-english'
      }`}
    >
      {/* Navigation Bar */}
      <Navbar
        lang={lang}
        onToggleLang={toggleLanguage}
        onOpenModal={handleOpenModal}
        content={currentContent}
      />

      <main>
        {/* Hero Section */}
        <Hero
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />

        {/* About Section */}
        <About
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />

        {/* 12 Books Curriculum Section */}
        <BooksSection
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />

        {/* Learning Journey Section */}
        <LearningJourney
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />

        {/* Platform Features Section */}
        <Features
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />

        {/* Why Choose Us Section */}
        <WhyChooseUs
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />

        {/* CTA Section */}
        <CTA
          lang={lang}
          onOpenModal={handleOpenModal}
          content={currentContent}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        onOpenModal={handleOpenModal}
        content={currentContent}
      />

      {/* Interactive Modal */}
      <Modal
        isOpen={modalState.isOpen}
        mode={modalState.mode}
        onClose={handleCloseModal}
        lang={lang}
        content={currentContent}
      />
    </div>
  );
};
