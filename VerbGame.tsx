import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Trophy,
  Heart,
  RotateCcw,
  Sparkles,
  Gamepad2,
  Check,
  X,
  Volume2,
  TrendingUp,
  Award
} from 'lucide-react';
import { Tense } from './types';

interface ChallengeCard {
  id: number;
  subject: string;
  verb: string;
  tense: Tense;
  options: string[];
  correctAnswer: string;
  translation: string;
}

const gameChallenges: ChallengeCard[] = [
  {
    id: 1,
    subject: 'Yo',
    verb: 'Hacer',
    tense: Tense.Perfecto,
    options: ['he haciendo', 'he hecho', 'he hacido', 'hacía'],
    correctAnswer: 'he hecho',
    translation: 'Ես արեցի / արել եմ (այսօր)'
  },
  {
    id: 2,
    subject: 'Nosotros',
    verb: 'Ir',
    tense: Tense.Imperfecto,
    options: ['íbamos', 'vamos', 'fuimos', 'hemos ido'],
    correctAnswer: 'íbamos',
    translation: 'Մենք գնում էինք (հաճախ անցյալում)'
  },
  {
    id: 3,
    subject: 'Tú',
    verb: 'Escribir',
    tense: Tense.Perfecto,
    options: ['has escribido', 'has escrito', 'escribías', 'has escribiendo'],
    correctAnswer: 'has escrito',
    translation: 'Դու գրեցիր / գրել ես (վերջերս)'
  },
  {
    id: 4,
    subject: 'Ellos',
    verb: 'Ser',
    tense: Tense.Imperfecto,
    options: ['eran', 'fueron', 'sían', 'han sido'],
    correctAnswer: 'eran',
    translation: 'Նրանք էին'
  },
  {
    id: 5,
    subject: 'Ella',
    verb: 'Volver',
    tense: Tense.Perfecto,
    options: ['ha vueltado', 'ha volvido', 'ha vuelto', 'volvía'],
    correctAnswer: 'ha vuelto',
    translation: 'Նա վերադարձավ / վերադարձել է (այսօր)'
  },
  {
    id: 6,
    subject: 'Vosotros',
    verb: 'Ver',
    tense: Tense.Imperfecto,
    options: ['veíais', 'veíades', 'visteis', 'habéis visto'],
    correctAnswer: 'veíais',
    translation: 'Դուք տեսնում էիք / նայում էիք (նախկինում)'
  },
  {
    id: 7,
    subject: 'Él',
    verb: 'Ver',
    tense: Tense.Perfecto,
    options: ['ha visto', 'ha vido', 'veía', 'ha verido'],
    correctAnswer: 'ha visto',
    translation: 'Նա տեսավ / տեսել է (վերջերս)'
  },
  {
    id: 8,
    subject: 'Nosotros',
    verb: 'Ser',
    tense: Tense.Imperfecto,
    options: ['éramos', 'síamos', 'fuerteis', 'somos'],
    correctAnswer: 'éramos',
    translation: 'Մենք էինք (նախկինում)'
  },
  {
    id: 9,
    subject: 'Yo',
    verb: 'Poner',
    tense: Tense.Perfecto,
    options: ['he ponido', 'he puesto', 'ponía', 'he puestado'],
    correctAnswer: 'he puesto',
    translation: 'Ես դրեցի / դրել եմ (այսօր)'
  },
  {
    id: 10,
    subject: 'Tú',
    verb: 'Decir',
    tense: Tense.Perfecto,
    options: ['has dicido', 'has dicho', 'decías', 'has dechado'],
    correctAnswer: 'has dicho',
    translation: 'Դու ասացիր / ասել ես (վերջերս)'
  }
];

export default function VerbGame() {
  const [gameStatus, setGameStatus] = useState<'idle' | 'playing' | 'gameover' | 'victory'>('idle');
  const [currentChallengeIdx, setCurrentChallengeIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  const [streak, setStreak] = useState(0);
  const [highScore, setHighScore] = useState(0);

  // Card Flip visual cues
  const [selectedOpt, setSelectedOpt] = useState<string | null>(null);
  const [answerResult, setAnswerResult] = useState<'correct' | 'incorrect' | null>(null);

  // Load high score
  useEffect(() => {
    const saved = localStorage.getItem('es_past_tenses_highscore');
    if (saved) {
      setHighScore(parseInt(saved, 10));
    }
  }, []);

  const startNewGame = () => {
    setGameStatus('playing');
    setCurrentChallengeIdx(0);
    setScore(0);
    setLives(3);
    setStreak(0);
    setSelectedOpt(null);
    setAnswerResult(null);
  };

  const handleSelectAnswer = (opt: string) => {
    if (selectedOpt) return; // already answered

    setSelectedOpt(opt);
    const challenge = gameChallenges[currentChallengeIdx];
    const isCorrect = opt === challenge.correctAnswer;

    if (isCorrect) {
      setAnswerResult('correct');
      const newScore = score + 10 + streak * 2;
      setScore(newScore);
      setStreak((prev) => prev + 1);

      if (newScore > highScore) {
        setHighScore(newScore);
        localStorage.setItem('es_past_tenses_highscore', newScore.toString());
      }
    } else {
      setAnswerResult('incorrect');
      setLives((prev) => prev - 1);
      setStreak(0);
    }

    // Procced to next card after delay
    setTimeout(() => {
      if (lives - (isCorrect ? 0 : 1) <= 0) {
        setGameStatus('gameover');
      } else if (currentChallengeIdx >= gameChallenges.length - 1) {
        setGameStatus('victory');
      } else {
        setCurrentChallengeIdx((prev) => prev + 1);
        setSelectedOpt(null);
        setAnswerResult(null);
      }
    }, 1800);
  };

  const currentChallenge = gameChallenges[currentChallengeIdx];

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 max-w-xl mx-auto shadow-xs" id="game-container">
      {/* Starting Hub */}
      {gameStatus === 'idle' && (
        <div className="text-center py-8 space-y-6" id="game-lobby font-sans">
          <div className="w-16 h-16 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center mx-auto border border-indigo-100">
            <Gamepad2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
              Բայերի քարտային ճակատամարտ
            </h3>
            <p className="text-sm text-slate-500 leading-relaxed max-w-sm mx-auto font-sans">
              Բայերի անցյալ ձևերի արագ ստուգիչ։ Ձեզ ցույց կտրվեն դերանունը, բայը և պահանջվող ժամանակաձևը։ Ընտրեք ճիշտ քարտը 4 տարբերակներից։
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 grid grid-cols-2 gap-4 text-center max-w-xs mx-auto shadow-3xs font-sans">
            <div>
              <span className="text-3xs font-bold text-slate-400 block uppercase tracking-widest">Ձեր ռեկորդը</span>
              <span className="text-xl font-bold text-indigo-900 font-mono">{highScore}</span>
            </div>
            <div>
              <span className="text-3xs font-bold text-slate-400 block uppercase tracking-widest">Առավելագույն կոմբո</span>
              <span className="text-xl font-bold text-indigo-900 flex items-center justify-center gap-1 font-mono">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                x{gameChallenges.length}
              </span>
            </div>
          </div>

          <button
            id="btn-play-game"
            onClick={startNewGame}
            className="py-3.5 px-8 bg-indigo-900 hover:bg-indigo-850 transition-colors text-white font-bold text-xs md:text-sm rounded-xl shadow-md cursor-pointer border-b-2 border-indigo-600 w-full sm:w-auto font-sans"
          >
            Սկսել քարտերի մենամարտը
          </button>
        </div>
      )}

      {/* Active gameplay card */}
      {gameStatus === 'playing' && currentChallenge && (
        <div className="space-y-6" id="gameplay-area font-sans">
          {/* Dashboard Stats */}
          <div className="flex items-center justify-between border-b border-slate-100 pb-4 font-sans">
            <div className="flex gap-1.5 items-center">
              {[...Array(3)].map((_, i) => (
                <Heart
                  key={i}
                  className={`w-5 h-5 transition-colors ${
                    i < lives ? 'text-rose-500 fill-rose-500' : 'text-zinc-200'
                  }`}
                />
              ))}
            </div>

            <div className="text-right">
              <span className="text-3xs font-bold text-slate-450 block uppercase tracking-widest">
                ՄԻԱՎՈՐ
              </span>
              <span className="font-mono font-bold text-lg text-slate-900">{score}</span>
            </div>

            <div className="text-right">
              <span className="text-3xs font-bold text-slate-450 block uppercase tracking-widest">
                ԿՈՄԲՈ
              </span>
              <span className="font-mono text-xs font-bold bg-indigo-55 text-indigo-800 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                x{streak}
              </span>
            </div>
          </div>

          {/* Quest Master Card */}
          <div className="perspective-1000 py-4 font-sans">
            <div className="relative w-full h-48 bg-indigo-900 text-white rounded-2xl p-6 shadow-md border-b-4 border-indigo-550 border-indigo-500 overflow-hidden flex flex-col justify-between">
              {/* Card background decor */}
              <div className="absolute -right-12 -bottom-12 w-32 h-32 bg-white/5 rounded-full" />
              <div className="absolute -left-6 -top-6 w-20 h-20 bg-white/5 rounded-full" />

              <div className="flex justify-between items-start">
                <span className="text-2xs font-bold px-2.5 py-0.5 bg-white/10 rounded-full select-none text-indigo-200 uppercase tracking-widest">
                  {currentChallenge.tense}
                </span>
                <span className="text-2xs font-mono text-indigo-200 opacity-80">
                  Քարտ {currentChallengeIdx + 1}/{gameChallenges.length}
                </span>
              </div>

              <div className="text-center space-y-1">
                <div className="text-3xs text-indigo-200 font-bold tracking-widest uppercase">
                  ԴԵՐԱՆՈՒՆ + ԲԱՅ
                </div>
                <h4 className="text-3xl font-extrabold font-display tracking-tight">
                  {currentChallenge.subject} <span className="underline decoration-indigo-400 decoration-wavy font-bold">{currentChallenge.verb}</span>
                </h4>
              </div>

              <div className="text-center">
                <p className="text-2xs text-indigo-100 italic mt-1 bg-white/5 py-1.5 px-3.5 rounded-lg inline-block border border-white/5 font-sans font-semibold">
                  {currentChallenge.translation}
                </p>
              </div>
            </div>
          </div>

          {/* Answers grid */}
          <div className="grid grid-cols-2 gap-3">
            {currentChallenge.options.map((opt, oIdx) => {
              const isSelected = selectedOpt === opt;
              const isCorrectTarget = opt === currentChallenge.correctAnswer;

              let buttonClass = 'bg-white border-slate-200 hover:border-indigo-400 text-slate-800 hover:bg-slate-50';
              let suffixIcon = null;

              if (selectedOpt) {
                if (isSelected) {
                  if (isCorrectTarget) {
                    buttonClass = 'bg-emerald-600 border-emerald-700 text-white shadow-md scale-98 font-bold';
                    suffixIcon = <Check className="w-4 h-4 flex-shrink-0" />;
                  } else {
                    buttonClass = 'bg-rose-600 border-rose-700 text-white shadow-md scale-98 font-bold';
                    suffixIcon = <X className="w-4 h-4 flex-shrink-0" />;
                  }
                } else if (isCorrectTarget) {
                  buttonClass = 'bg-emerald-50 border-emerald-200 text-emerald-950 font-bold border-2';
                } else {
                  buttonClass = 'bg-slate-50 border-slate-100 text-slate-400 opacity-50';
                }
              }

              return (
                <button
                  key={oIdx}
                  id={`game-choice-${oIdx}`}
                  onClick={() => handleSelectAnswer(opt)}
                  disabled={selectedOpt !== null}
                  className={`p-4 rounded-xl border font-mono text-sm font-bold text-center transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${buttonClass}`}
                >
                  <span>{opt}</span>
                  {suffixIcon}
                </button>
              );
            })}
          </div>

          {/* Answer result comment */}
          {answerResult && (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center text-xs font-semibold py-1.5 animate-bounce font-sans"
            >
              {answerResult === 'correct' ? (
                <span className="text-emerald-700 flex items-center justify-center gap-1.5">
                  <Sparkles className="w-4 h-4" />
                  Հիանալի է։ +10 միավոր և կոմբո։
                </span>
              ) : (
                <span className="text-rose-700 flex items-center justify-center gap-1.5">
                  Սխալ է։ Կորցնում ենք կյանք...
                </span>
              )}
            </motion.div>
          )}
        </div>
      )}

      {/* Game Over frame */}
      {gameStatus === 'gameover' && (
        <div className="text-center py-8 space-y-6 font-sans" id="gameover-screen">
          <div className="w-16 h-16 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100 animate-pulse">
            <X className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-rose-950 font-display">
              Խաղն ավարտվեց
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-sans">
              Ձեր կյանքերը վերջացան։ Մի՛ հուսահատվեք. իսպաներենի քերականությունը նվաճվում է համառությամբ։ Կրկնե՛ք տեսությունը և վերադարձե՛ք։
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 max-w-xs mx-auto">
            <div className="text-3xs font-bold text-slate-400 uppercase">ՎԵՐՋՆԱԿԱՆ ՄԻԱՎՈՐ</div>
            <div className="text-3xl font-mono font-bold text-slate-900 mt-1">{score}</div>
          </div>

          <button
            id="btn-retry-gameover"
            onClick={startNewGame}
            className="py-3.5 px-8 bg-indigo-900 hover:bg-indigo-850 text-white font-bold text-xs md:text-sm rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 mx-auto border-b-2 border-indigo-650 font-sans"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Կրկին խաղալ</span>
          </button>
        </div>
      )}

      {/* Victory frame */}
      {gameStatus === 'victory' && (
        <div className="text-center py-8 space-y-6 font-sans" id="victory-screen">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 font-sans">
            <Trophy className="w-8 h-8 text-emerald-500" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-extrabold text-emerald-950 font-display animate-bounce">
              Հաղթանա՛կ։ ¡Felicidades!
            </h3>
            <p className="text-xs text-slate-500 max-w-sm mx-auto leading-relaxed font-sans">
              Դուք հաջողությամբ անցաք իսպաներենի անցյալ ժամանակների քարտային բոլոր մարտահրավերները։ Այժմ Pretérito Perfecto-ն և Imperfecto-ն ձեր լիակատար տիրապետության տակ են։
            </p>
          </div>

          <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 max-w-xs mx-auto grid grid-cols-2 gap-2">
            <div>
              <div className="text-3xs font-bold text-slate-400 uppercase">ՄԻԱՎՈՐՆԵՐ</div>
              <div className="text-2xl font-mono font-bold text-indigo-900">{score}</div>
            </div>
            <div>
              <div className="text-3xs font-bold text-slate-400 uppercase font-sans">ՌԵԿՈՐԴ</div>
              <div className="text-2xl font-mono font-bold text-indigo-900">{highScore}</div>
            </div>
          </div>

          <button
            id="btn-retry-victory"
            onClick={startNewGame}
            className="py-3.5 px-8 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs md:text-sm bg-emerald-900 hover:bg-emerald-850 rounded-xl shadow-md cursor-pointer flex items-center justify-center gap-2 mx-auto border-b-2 border-emerald-650 font-sans"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Անցնել փորձությունը ևս մեկ անգամ</span>
          </button>
        </div>
      )}
    </div>
  );
}
