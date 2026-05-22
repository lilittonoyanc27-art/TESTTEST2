import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { exercisesData } from './exercises';
import { ExerciseDefinition, ExerciseItem } from './types';
import {
  Award,
  CheckCircle,
  XCircle,
  Sparkles,
  HelpCircle,
  Play,
  ArrowRight,
  RotateCcw,
  Check,
  Languages,
  BookOpenText,
  BadgeAlert
} from 'lucide-react';

export default function ExerciseBuilder() {
  const [selectedExId, setSelectedExId] = useState<number | null>(null);
  const [exProgress, setExProgress] = useState<Record<number, { completed: boolean; score: number }>>({});
  
  // Game states inside an active exercise
  const [currentItemIdx, setCurrentItemIdx] = useState(0);
  const [userAnswerText, setUserAnswerText] = useState(''); // for fill-blanks
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // for multichoice
  const [categorizedItems, setCategorizedItems] = useState<Record<string, 'Perfecto' | 'Imperfecto' | null>>({}); // for categorization
  const [builderWords, setBuilderWords] = useState<string[]>([]); // current builder slots
  const [availableWords, setAvailableWords] = useState<string[]>([]); // left-over builder slots
  
  const [isChecked, setIsChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const activeEx = exercisesData.find((ex) => ex.id === selectedExId);
  const currentItem: ExerciseItem | undefined = activeEx?.items[currentItemIdx];

  // Initialize questions/states
  useEffect(() => {
    if (activeEx && currentItem) {
      setUserAnswerText('');
      setSelectedOption(null);
      setShowExplanation(false);
      setIsChecked(false);
      setIsCorrect(null);

      if (activeEx.type === 'sentence-builder' && currentItem.options) {
        // Shuffle options for sentence builder
        const words = [...currentItem.options].sort(() => Math.random() - 0.5);
        setAvailableWords(words);
        setBuilderWords([]);
      }
    }
  }, [selectedExId, currentItemIdx]);

  // Handle choice in multiple-choice
  const selectMC = (opt: string) => {
    if (isChecked) return;
    setSelectedOption(opt);
  };

  // Handle Click / Categorization
  const handleAssignCategory = (wordId: string, category: 'Perfecto' | 'Imperfecto') => {
    if (isChecked) return;
    setCategorizedItems((prev) => ({
      ...prev,
      [wordId]: category,
    }));
  };

  // Sentence Builder helpers
  const addWordToBuilder = (word: string, idx: number) => {
    if (isChecked) return;
    setBuilderWords((prev) => [...prev, word]);
    setAvailableWords((prev) => prev.filter((_, i) => i !== idx));
  };

  const removeWordFromBuilder = (word: string, idx: number) => {
    if (isChecked) return;
    setBuilderWords((prev) => prev.filter((_, i) => i !== idx));
    setAvailableWords((prev) => [...prev, word]);
  };

  const checkAnswer = () => {
    if (!activeEx || !currentItem) return;

    let correct = false;

    if (activeEx.type === 'fill-blanks') {
      const sanitized = userAnswerText.trim().toLowerCase().replace(/\s+/g, ' ');
      correct = currentItem.correctAnswers.some(
        (ans) => ans.trim().toLowerCase() === sanitized
      );
    } else if (activeEx.type === 'multiple-choice') {
      correct = currentItem.correctAnswers.includes(selectedOption || '');
    } else if (activeEx.type === 'categorization') {
      const userCategory = categorizedItems[currentItem.id.toString()];
      const trueCategory = currentItem.correctAnswers[0] === 'Pretérito Perfecto' ? 'Perfecto' : 'Imperfecto';
      correct = userCategory === trueCategory;
    } else if (activeEx.type === 'sentence-builder') {
      const builtSentence = builderWords.join(' ');
      correct = currentItem.correctAnswers.some(
        (ans) => ans.trim().toLowerCase().replace(/[¿?¡!.,]/g, '') === builtSentence.trim().toLowerCase().replace(/[¿?¡!.,]/g, '')
      );
    }

    setIsCorrect(correct);
    setIsChecked(true);
    if (correct) {
      setScore((prev) => prev + 1);
    }
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    if (!activeEx) return;

    if (currentItemIdx < activeEx.items.length - 1) {
      setCurrentItemIdx((prev) => prev + 1);
    } else {
      // Exercise finished
      const finalScore = isCorrect ? score : score; // final state adjustment
      setExProgress((prev) => ({
        ...prev,
        [activeEx.id]: { completed: true, score: finalScore },
      }));
      // Reset game play states
      setSelectedExId(null);
    }
  };

  const resetExercise = () => {
    setCurrentItemIdx(0);
    setUserAnswerText('');
    setSelectedOption(null);
    setCategorizedItems({});
    setBuilderWords([]);
    setIsChecked(false);
    setIsCorrect(null);
    setScore(0);
    setShowExplanation(false);
  };

  const selectExercise = (id: number) => {
    setSelectedExId(id);
    setCurrentItemIdx(0);
    setScore(0);
    setUserAnswerText('');
    setSelectedOption(null);
    setCategorizedItems({});
    setBuilderWords([]);
    setIsChecked(false);
    setIsCorrect(null);
    setShowExplanation(false);
  };

  return (
    <div className="space-y-6" id="exercises-container">
      {!selectedExId ? (
        // Exercises Selection Grid
        <div className="space-y-6" id="ex-selection-grid">
          <div className="bg-indigo-900 text-white rounded-2xl p-6 border-b-4 border-indigo-500 shadow-sm">
            <h3 className="text-xl font-bold font-display flex items-center gap-2">
              <BookOpenText className="w-5 h-5 text-indigo-300" />
              6 ինտերակտիվ վարժություններ մանրամասն բացատրություններով
            </h3>
            <p className="text-sm text-indigo-100 mt-2 leading-relaxed">
              Յուրաքանչյուր վարժություն մշակված է կոնկրետ կանոնի կամ թեմայի ասպեկտի համար։ Անցեք դրանք բոլորը՝ հասցնելու անցյալ ժամանակաձևերի կիրառությունը կատարելության։
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {exercisesData.map((ex) => {
              const progress = exProgress[ex.id];
              return (
                <div
                  key={ex.id}
                  id={`exercise-card-${ex.id}`}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs hover:border-indigo-400 hover:shadow-xs transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-2">
                      <span className="text-xs font-bold px-2.5 py-1 bg-slate-100 text-slate-800 rounded-md border border-slate-200">
                        Վարժ. {ex.id}
                      </span>
                      {progress?.completed && (
                        <span className="text-xs font-semibold px-2.5 py-0.5 bg-emerald-50 text-emerald-700 rounded-md flex items-center gap-1">
                          <Check className="w-3.5 h-3.5" />
                          Արդյունք՝ {progress.score}/{ex.items.length}
                        </span>
                      )}
                    </div>
                    <h4 className="font-extrabold text-slate-900 text-base">{ex.title}</h4>
                    <p className="text-xs text-slate-500 mt-1.5 lines-clamp-3 leading-relaxed">
                      {ex.description}
                    </p>
                  </div>
                  <button
                    id={`btn-start-ex-${ex.id}`}
                    onClick={() => selectExercise(ex.id)}
                    className="w-full mt-4 flex items-center justify-center gap-2 py-2.5 px-4 bg-indigo-950 hover:bg-indigo-900 transition-colors text-white font-bold text-xs rounded-xl shadow-2xs cursor-pointer border-b border-indigo-500"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    {progress?.completed ? 'Կրկնել վարժությունը' : 'Սկսել վարժությունը'}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        // Active Exercise View
        activeEx && currentItem && (
          <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-6" id="active-exercise-panel">
            {/* Header / Tracker */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
              <div>
                <button
                  id="btn-back-to-list"
                  onClick={() => setSelectedExId(null)}
                  className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1 mb-1 cursor-pointer"
                >
                  ← Վերադառնալ վարժությունների ցանկին
                </button>
                <h4 className="font-extrabold text-slate-900 text-lg font-display">{activeEx.title}</h4>
              </div>

              <div className="text-right">
                <div className="text-xs text-slate-500 font-mono">
                  Հարց {currentItemIdx + 1} {activeEx.items.length}-ից
                </div>
                {/* Score bar */}
                <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-1.5 overflow-hidden">
                  <div
                    className="h-full bg-indigo-600 transition-all duration-300"
                    style={{ width: `${((currentItemIdx + 1) / activeEx.items.length) * 100}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Prompt */}
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 text-slate-700 text-sm">
              <strong className="text-slate-900 font-bold">Հանձնարարություն՝</strong> {activeEx.description}
            </div>

            {/* Interaction Sandbox based on EX type */}
            <div className="py-2" id="interaction-sandbox">
              {/* Category Sorting */}
              {activeEx.type === 'categorization' && (
                <div className="space-y-6">
                  <div className="text-center py-6">
                    <span className="text-2xl font-bold text-slate-900 font-mono block mb-2 px-6 py-3 bg-slate-50 inline-block rounded-xl border border-slate-200 shadow-2xs">
                      {currentItem.question}
                    </span>
                    <p className="text-xs text-slate-500 mt-2">Ո՞ր ժամանակաձևին է պատկանում այս ժամանակային ցուցիչը։</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <button
                      id="opt-sort-perfecto"
                      onClick={() => handleAssignCategory(currentItem.id.toString(), 'Perfecto')}
                      className={`text-center p-5 rounded-xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer ${
                        categorizedItems[currentItem.id.toString()] === 'Perfecto'
                          ? 'bg-indigo-900 text-white border-indigo-500 shadow-md scale-102'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      Pretérito Perfecto
                      <span className="block text-3xs font-normal opacity-75 mt-0.5">(Կապված է ներկայի հետ)</span>
                    </button>

                    <button
                      id="opt-sort-imperfecto"
                      onClick={() => handleAssignCategory(currentItem.id.toString(), 'Imperfecto')}
                      className={`text-center p-5 rounded-xl border-2 font-bold text-sm transition-all duration-200 cursor-pointer ${
                        categorizedItems[currentItem.id.toString()] === 'Imperfecto'
                          ? 'bg-emerald-900 text-white border-emerald-500 shadow-md scale-102'
                          : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:border-slate-300'
                      }`}
                    >
                      Pretérito Imperfecto
                      <span className="block text-3xs font-normal opacity-75 mt-0.5">(Սովորություն / Ֆոն անցյալում)</span>
                    </button>
                  </div>
                </div>
              )}

              {/* Fill in the blanks */}
              {activeEx.type === 'fill-blanks' && (
                <div className="space-y-4">
                  <div className="text-lg text-slate-900 font-sans leading-relaxed text-center py-5 px-3 bg-slate-50 rounded-xl border border-slate-200/50">
                    {currentItem.sentenceBefore}
                    <input
                      id="input-fill-blank"
                      type="text"
                      value={userAnswerText}
                      onChange={(e) => {
                        if (isChecked) return;
                        setUserAnswerText(e.target.value);
                      }}
                      disabled={isChecked}
                      placeholder="..."
                      className="border-b-2 border-indigo-500 bg-transparent text-slate-900 px-2 font-mono text-center font-bold focus:outline-none focus:border-indigo-700 mx-2 w-48 transition-colors text-base"
                    />
                    {currentItem.sentenceAfter}
                  </div>
                  <div className="flex justify-center">
                    <span className="text-xs text-slate-500 font-mono italic">
                      Բայի անորոշ ձևը (Infinitive)՝ <strong className="text-indigo-600 font-bold">{currentItem.verbInfinitive}</strong>
                    </span>
                  </div>
                </div>
              )}

              {/* Multiple Choice Selection */}
              {activeEx.type === 'multiple-choice' && (
                <div className="space-y-4">
                  <div className="text-lg text-slate-900 font-sans leading-relaxed text-center py-4 mb-4">
                    {currentItem.sentenceBefore}
                    <span className="underline decoration-indigo-500 font-bold px-2 py-0.5 bg-indigo-50 text-indigo-900 rounded-md font-mono">
                      {selectedOption || ' ? '}
                    </span>
                    {currentItem.sentenceAfter}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto">
                    {currentItem.options?.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        id={`btn-opt-${oIdx}`}
                        onClick={() => selectMC(opt)}
                        disabled={isChecked}
                        className={`p-4 rounded-xl border font-mono text-sm font-bold text-center transition-all cursor-pointer ${
                          selectedOption === opt
                            ? 'bg-indigo-900 border-indigo-500 text-white shadow-md font-bold'
                            : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Sentence Builder */}
              {activeEx.type === 'sentence-builder' && (
                <div className="space-y-6">
                  {/* Visual Builder Slots */}
                  <div className="min-h-[100px] bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-wrap gap-2 items-center justify-center">
                    {builderWords.length === 0 ? (
                      <span className="text-xs text-slate-400 italic font-medium">Սեղմեք ներքևի բառերի քարտերի վրա՝ քերականորեն ճիշտ նախադասություն կառուցելու համար</span>
                    ) : (
                      <AnimatePresence>
                        {builderWords.map((word, bIdx) => (
                          <motion.button
                            key={`${word}-${bIdx}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={() => removeWordFromBuilder(word, bIdx)}
                            className="bg-indigo-900 text-white font-mono text-xs md:text-sm px-3 py-1.5 rounded-lg font-bold border border-indigo-500 shadow-2xs hover:bg-indigo-800 cursor-pointer"
                          >
                            {word}
                          </motion.button>
                        ))}
                      </AnimatePresence>
                    )}
                  </div>

                  {/* Word Options Available */}
                  <div className="space-y-2">
                    <div className="text-2xs font-bold text-slate-400 uppercase tracking-widest text-center">Հասանելի բառեր՝</div>
                    <div className="flex flex-wrap justify-center gap-2">
                      {availableWords.map((word, aIdx) => (
                        <button
                          key={`${word}-${aIdx}`}
                          id={`word-opt-${aIdx}`}
                          onClick={() => addWordToBuilder(word, aIdx)}
                          disabled={isChecked}
                          className="px-3 py-1.5 bg-white border border-slate-200 font-mono text-xs md:text-sm font-bold text-slate-700 rounded-lg hover:border-indigo-400 hover:bg-slate-50 transition-all disabled:opacity-45 cursor-pointer"
                        >
                          {word}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Hint & Verification Panel */}
            <div className="space-y-4 border-t border-slate-100 pt-5">
              {!isChecked ? (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  {/* Hint details */}
                  <div className="flex items-center gap-2 bg-slate-50 px-3.5 py-2.5 rounded-lg text-xs text-slate-600 border border-slate-200/50">
                    <HelpCircle className="w-4 h-4 text-indigo-500 flex-shrink-0" />
                    <span><strong className="font-bold">Հուշում՝</strong> {currentItem.hint}</span>
                  </div>

                  <button
                    id="btn-verify-answer"
                    onClick={checkAnswer}
                    disabled={
                      (activeEx.type === 'fill-blanks' && !userAnswerText.trim()) ||
                      (activeEx.type === 'multiple-choice' && !selectedOption) ||
                      (activeEx.type === 'sentence-builder' && builderWords.length === 0) ||
                      (activeEx.type === 'categorization' && !categorizedItems[currentItem.id.toString()])
                    }
                    className="ml-auto py-2.5 px-6 bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs md:text-sm rounded-xl transition-all shadow-md disabled:bg-slate-100 disabled:text-slate-400 disabled:shadow-none cursor-pointer border-b-2 border-indigo-600"
                  >
                    Ստուգել պատասխանը
                  </button>
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {/* Correct/Incorrect banner */}
                  {isCorrect ? (
                    <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-emerald-950 text-sm">Ճիշտ պատասխան։ Excelente!</h5>
                        <p className="text-xs text-emerald-800 mt-1">
                          Դուք միանգամայն ճիշտ եք՝ <b>{currentItem.correctAnswers.join(' / ')}</b>
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-rose-50 rounded-xl p-4 border border-rose-100 flex items-start gap-3">
                      <XCircle className="w-5 h-5 text-rose-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-bold text-rose-950 text-sm">Սխալ կա։ No te preocupes!</h5>
                        <p className="text-xs text-rose-800 mt-1">
                          Ճիշտ պատասխանն է՝ <b className="font-mono text-rose-900">{currentItem.correctAnswers.join(' / ')}</b>
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Explanation card */}
                  <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs text-slate-600 leading-relaxed">
                    <div className="font-bold text-indigo-900 flex items-center gap-1.5 mb-1.5 uppercase tracking-wide text-2xs">
                      <Languages className="w-3.5 h-3.5" />
                      Կանոնի բացատրությունը (Explicación)՝
                    </div>
                    {currentItem.explanation}
                  </div>

                  {/* Next Button / Reset */}
                  <div className="flex justify-end gap-2">
                    <button
                      id="btn-restart-item"
                      onClick={resetExercise}
                      className="py-2 px-4 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      Վերսկսել վարժությունը
                    </button>

                    <button
                      id="btn-next-step"
                      onClick={nextQuestion}
                      className="py-2.5 px-6 bg-indigo-900 hover:bg-indigo-800 text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center gap-1.5 cursor-pointer border-b-2 border-indigo-600"
                    >
                      <span>
                        {currentItemIdx < activeEx.items.length - 1 ? 'Հաջորդ հարցը' : 'Ավարտել վարժությունը'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        )
      )}
    </div>
  );
}
