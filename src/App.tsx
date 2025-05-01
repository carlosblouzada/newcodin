import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/layout/WhatsAppButton';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import MethodologySection from './components/sections/MethodologySection';
import ResultsSection from './components/sections/ResultsSection';
import SuccessCasesSection from './components/sections/SuccessCasesSection';
import MetricsSection from './components/sections/MetricsSection';
import BlogSection from './components/sections/BlogSection';
import NewsletterSection from './components/sections/NewsletterSection';
import ContactSection from './components/sections/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <ServicesSection />
        <MethodologySection />
        <ResultsSection />
        <SuccessCasesSection />
        <BlogSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;