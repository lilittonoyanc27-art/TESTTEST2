import React, { useState, useEffect } from 'react';
import TheorySection from './TheorySection';
import ExerciseBuilder from './ExerciseBuilder';
import ReadingSection from './ReadingSection';
import VerbGame from './VerbGame';
import {
  BookOpen,
  Award,
  Sparkles,
  Gamepad2,
  Languages,
  BookOpenText,
  BadgeHelp,
  Trophy,
  Activity
} from 'lucide-react';

export default function App() {
  const [activeSegment, setActiveSegment] = useState<'theory' | 'exercises' | 'reading' | 'game'>('theory');
  const [highScore, setHighScore] = useState(0);

  // Sync highest game score from game updates
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('es_past_tenses_highscore');
      if (saved) {
        setHighScore(parseInt(saved, 10));
      }
    };

    handleStorageChange();
    window.addEventListener('storage', handleStorageChange);
    // Poll to keep it fresh in continuous engagement
    const interval = setInterval(handleStorageChange, 2000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between text-slate-800" id="applet-viewport">
      {/* Decorative background grid and geometrics */}
      <div className="absolute top-0 left-0 right-0 h-[360px] bg-indigo-900/5 -z-10 pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 flex-grow">
        
        {/* Header Branding Panel (Geometric Balance Style) */}
        <header className="mb-10 flex flex-col md:flex-row justify-between items-center gap-6 border-b-4 border-indigo-500 bg-indigo-900 text-white p-6 md:p-8 rounded-2xl shadow-md" id="applet-header">
          <div className="space-y-3 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-8 h-8 bg-white rotate-45 flex items-center justify-center shadow-xs">
                <span className="text-indigo-900 font-bold -rotate-45 font-display text-sm">ES</span>
              </div>
              <span className="text-xs font-bold font-mono tracking-widest text-indigo-200 uppercase">
                Dominio del Pasado • Իսպաներենի անցյալ ժամանակներ
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight font-display text-white">
              Pretérito Perfecto vs Imperfecto
            </h1>
            <p className="text-indigo-100 max-w-2xl text-sm leading-relaxed font-sans">
              Ինտերակտիվ ուսումնական ձեռնարկ և գործնական հարթակ՝ նվիրված իսպաներենի անցյալ ժամանակներին։ Ուսումնասիրեք ժամանակային ցուցիչների նրբությունները, ծանոթացեք անկանոն դերբայներին և անցեք քարտային մենամարտեր։
            </p>
          </div>

          {/* Quick Stats Widget */}
          <div className="flex gap-4 items-center">
            <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-lg flex items-center gap-3">
              <div className="p-2 bg-indigo-500/20 text-indigo-300 rounded-lg">
                <Trophy className="w-5 h-5 text-emerald-400" />
              </div>
              <div>
                <span className="text-3xs text-indigo-200 block uppercase font-bold tracking-wider font-sans">Խաղային ռեկորդ</span>
                <span className="font-mono font-bold text-base text-white">{highScore} միավոր</span>
              </div>
            </div>
          </div>
        </header>

        {/* Global Navigation Hub (Geometric Balance style) */}
        <nav className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-8 bg-white p-2 rounded-2xl shadow-xs border border-slate-200 font-sans" id="nav-hub">
          <button
            id="nav-btn-theory"
            onClick={() => setActiveSegment('theory')}
            className={`flex items-center gap-2 py-3 px-5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeSegment === 'theory'
                ? 'bg-indigo-900 text-white shadow-md shadow-indigo-200 scale-102 border-b-2 border-indigo-500 font-bold'
                : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
            }`}
          >
            <BookOpen className="w-4 h-4 flex-shrink-0" />
            <span>📖 Քերականություն և կանոններ</span>
          </button>

          <button
            id="nav-btn-exercises"
            onClick={() => setActiveSegment('exercises')}
            className={`flex items-center gap-2 py-3 px-5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeSegment === 'exercises'
                ? 'bg-indigo-900 text-white shadow-md shadow-indigo-200 scale-102 border-b-2 border-indigo-500 font-bold'
                : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
            }`}
          >
            <Activity className="w-4 h-4 flex-shrink-0" />
            <span>⚙️ 6 Գործնական վարժություններ</span>
          </button>

          <button
            id="nav-btn-reading"
            onClick={() => setActiveSegment('reading')}
            className={`flex items-center gap-2 py-3 px-5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeSegment === 'reading'
                ? 'bg-indigo-900 text-white shadow-md shadow-indigo-200 scale-102 border-b-2 border-indigo-500 font-bold'
                : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
            }`}
          >
            <BookOpenText className="w-4 h-4 flex-shrink-0" />
            <span>📖 2 Ինտերակտիվ տեքստեր</span>
          </button>

          <button
            id="nav-btn-game"
            onClick={() => setActiveSegment('game')}
            className={`flex items-center gap-2 py-3 px-5 rounded-xl text-xs md:text-sm font-bold transition-all cursor-pointer ${
              activeSegment === 'game'
                ? 'bg-indigo-900 text-white shadow-md shadow-indigo-200 scale-102 border-b-2 border-indigo-500 font-bold'
                : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
            }`}
          >
            <Gamepad2 className="w-4 h-4 flex-shrink-0" />
            <span>🎮 Բայերի ճակատամարտ</span>
          </button>
        </nav>

        {/* Primary Content Render Sandbox */}
        <main className="min-h-[450px]" id="primary-content-viewport">
          {activeSegment === 'theory' && <TheorySection />}
          {activeSegment === 'exercises' && <ExerciseBuilder />}
          {activeSegment === 'reading' && <ReadingSection />}
          {activeSegment === 'game' && <VerbGame />}
        </main>
      </div>

      {/* Footer Branding */}
      <footer className="border-t border-slate-200 bg-white py-6 text-center text-xs text-slate-500" id="main-footer">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans">
          <p>
            <b>© 2026 Dominio del Pasado.</b> Ուսումնասիրե՛ք Pretérito Perfecto-ն և Pretérito Imperfecto-ն կատարյալ երկրաչափական հավասարակշռությամբ։
          </p>
          <div className="flex gap-4 text-3xs font-mono uppercase tracking-widest text-slate-400">
            <span>Perfecto: Haber + Participio</span>
            <span>•</span>
            <span>Imperfecto: նկարագրություններ և սովորություններ</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
