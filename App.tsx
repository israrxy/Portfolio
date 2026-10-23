import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Projects from './components/Projects';
import Skills from './components/Skills';
import LogicPlayground from './components/LogicPlayground';
import Footer from './components/Footer';
import MobileAppsStore from './components/MobileAppsStore';

const App: React.FC = () => {
  const [viewMode, setViewMode] = useState<'portfolio' | 'apps'>('portfolio');
  const [initialStoreApp, setInitialStoreApp] = useState<'zenim' | 'raazi' | null>(null);

  const openAppsStore = (app: 'zenim' | 'raazi' | null = null) => {
    setInitialStoreApp(app);
    setViewMode('apps');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen selection:bg-indigo-500/30 relative overflow-x-hidden">
      {/* Animated Ambient Motion Background */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
        <div className="motion-orb-indigo absolute -top-24 -left-24 w-80 h-80 md:w-[32rem] md:h-[32rem] rounded-full bg-indigo-600/15 blur-[100px]" />
        <div className="motion-orb-secondary absolute top-1/3 -right-24 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-indigo-400/10 blur-[100px]" />
        <div className="motion-orb-indigo absolute -bottom-32 left-1/4 w-80 h-80 md:w-[30rem] md:h-[30rem] rounded-full bg-slate-400/10 blur-[110px]" />
        <div className="motion-beam absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-transparent via-indigo-500/[0.04] to-transparent" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      </div>

      <div className="relative z-10">
        <Header 
          viewMode={viewMode} 
          onSelectViewMode={(mode) => {
            if (mode === 'apps') {
              openAppsStore(null);
            } else {
              setViewMode('portfolio');
            }
          }} 
        />
        {viewMode === 'apps' ? (
          <MobileAppsStore 
            initialApp={initialStoreApp}
            onBackToPortfolio={() => {
              setViewMode('portfolio');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} 
          />
        ) : (
          <main>
            <Hero onOpenAppsStore={openAppsStore} />
            <Philosophy />
            <Projects onOpenAppsStore={openAppsStore} />
            <Skills />
            <LogicPlayground />
          </main>
        )}
        <Footer onOpenAppsStore={openAppsStore} />
      </div>
    </div>
  );
};

export default App;

