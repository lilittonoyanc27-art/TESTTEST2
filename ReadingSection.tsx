import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { textsData } from './texts';
import { Tense } from './types';
import { BookOpen, Info, CheckCircle, HelpCircle, FileText, ChevronRight, X } from 'lucide-react';

export default function ReadingSection() {
  const [activeTextId, setActiveTextId] = useState<number>(1);
  const [selectedAnnotation, setSelectedAnnotation] = useState<{
    word: string;
    infinitive: string;
    tense: Tense;
    translation: string;
    reason: string;
  } | null>(null);
  const [selectedSentenceKey, setSelectedSentenceKey] = useState<string | null>(null);

  const activeText = textsData.find((t) => t.id === activeTextId);

  // Parse paragraphs and return JSX with highlighted verbs
  const renderParagraphText = (
    text: string,
    annotations: {
      word: string;
      infinitive: string;
      tense: Tense;
      translation: string;
      reason: string;
    }[] = []
  ) => {
    // Regex to split by terms enclosed in curly braces like {he viajado}
    const parts = text.split(/(\{.*?\})/g);

    return parts.map((part, index) => {
      // Check if this part matches `{something}`
      if (part.startsWith('{') && part.endsWith('}')) {
        const wordName = part.substring(1, part.length - 1);
        const annotation = annotations.find((ann) => ann.word.toLowerCase() === wordName.toLowerCase());

        if (annotation) {
          const isSelected = selectedAnnotation?.word.toLowerCase() === wordName.toLowerCase();
          return (
            <button
              key={index}
              id={`highlighted-verb-${wordName.replace(/\s+/g, '-')}`}
              onClick={(e) => {
                e.stopPropagation(); // Avoid triggering sentence-level translation click
                setSelectedAnnotation(annotation);
              }}
              className={`px-2 py-0.5 mx-0.5 rounded-md font-mono font-bold text-xs md:text-sm transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-indigo-900 border-indigo-500 border text-white shadow-md'
                  : annotation.tense === Tense.Perfecto
                  ? 'bg-indigo-50 text-indigo-900 border-b-2 border-indigo-500 hover:bg-indigo-100'
                  : 'bg-emerald-50 text-emerald-900 border-b-2 border-emerald-500 hover:bg-emerald-100'
              }`}
            >
              {wordName}
            </button>
          );
        }
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="reading-section-container">
      {/* Middle/Left Main Text Frame */}
      <div className="lg:col-span-2 space-y-6">
        {/* Texts Toggle */}
        <div className="flex p-1.5 bg-white rounded-2xl border border-slate-200 gap-1 shadow-xs">
          {textsData.map((t) => (
            <button
              key={t.id}
              id={`text-tab-${t.id}`}
              onClick={() => {
                setActiveTextId(t.id);
                setSelectedAnnotation(null);
                setSelectedSentenceKey(null);
              }}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-xs md:text-sm transition-all text-center flex items-center justify-center gap-2 cursor-pointer ${
                activeTextId === t.id
                  ? 'bg-indigo-900 text-white shadow-md border-b-2 border-indigo-500'
                  : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
              }`}
            >
              <FileText className="w-4 h-4 flex-shrink-0 text-indigo-400" />
              <span>Տեքստ {t.id}</span>
            </button>
          ))}
        </div>

        {/* Text Paper Canvas */}
        {activeText && (
          <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-xs relative overflow-hidden">
            {/* Header decor */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-indigo-500" />

            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-extrabold text-slate-900 font-display mt-2">
                {activeText.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed border-b border-slate-100 pb-4">
                {activeText.description}
              </p>
            </div>

            {/* Reading passages with highlights */}
            <div className="space-y-6 my-6 text-slate-800 text-sm md:text-base leading-relaxed font-sans">
              {activeText.paragraphs.map((p, pIdx) => (
                <div 
                  key={pIdx} 
                  className="p-5 bg-slate-50/50 rounded-2xl border border-slate-200/80 shadow-3xs hover:bg-slate-50/85 transition-all flex flex-col gap-3"
                >
                  <div className="leading-loose">
                    {p.sentences.map((s, sIdx) => {
                      const isSelected = selectedSentenceKey === `${pIdx}-${sIdx}`;
                      return (
                        <span
                          key={sIdx}
                          onClick={() => {
                            setSelectedSentenceKey(isSelected ? null : `${pIdx}-${sIdx}`);
                          }}
                          className={`inline cursor-pointer transition-all duration-200 rounded px-1.5 py-1 border mr-1.5 ${
                            isSelected
                              ? 'bg-indigo-50 text-indigo-950 font-medium border-indigo-200/70 shadow-3xs'
                              : 'border-transparent hover:bg-slate-100/70 hover:text-indigo-950'
                          }`}
                          title="Սեղմեք նախադասության հայերեն թարգմանությունը տեսնելու համար"
                        >
                          {renderParagraphText(s.text, p.annotations)}
                        </span>
                      );
                    })}
                  </div>

                  <AnimatePresence>
                    {p.sentences.map((s, sIdx) => {
                      const isSelected = selectedSentenceKey === `${pIdx}-${sIdx}`;
                      if (!isSelected) return null;
                      return (
                        <motion.div
                          key={`trans-${sIdx}`}
                          initial={{ opacity: 0, height: 0, marginTop: 0 }}
                          animate={{ opacity: 1, height: 'auto', marginTop: 8 }}
                          exit={{ opacity: 0, height: 0, marginTop: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="bg-indigo-50/80 border-l-4 border-indigo-600 p-4 rounded-r-xl text-indigo-950 font-sans text-xs md:text-sm flex items-start gap-4 shadow-3xs">
                            <span className="bg-indigo-200 font-bold px-2 py-0.5 rounded text-3xs uppercase tracking-wider text-indigo-800 mt-0.5">🇦🇲 Հայերեն թարգմանություն</span>
                            <div className="flex-1 space-y-1">
                              <p className="text-2xs font-bold text-slate-400 uppercase tracking-widest font-mono">Իսպաներեն`</p>
                              <p className="font-medium text-slate-700 font-sans italic text-xs md:text-sm">«{s.text.replace(/\{/g, '').replace(/\}/g, '')}»</p>
                              <div className="h-px bg-indigo-100/50 my-1.5" />
                              <p className="text-2xs font-bold text-indigo-400 uppercase tracking-widest font-mono">Հայերեն`</p>
                              <p className="font-extrabold text-indigo-950 font-sans text-sm md:text-base leading-relaxed">{s.translationArm}</p>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setSelectedSentenceKey(null);
                              }}
                              className="text-indigo-700 hover:text-indigo-950 hover:bg-indigo-150 p-1.5 rounded-full transition-all cursor-pointer"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Footer tips */}
            <div className="flex items-center gap-2 text-2xs text-slate-400 mt-4 pt-4 border-t border-slate-100 font-sans">
              <span className="inline-block w-4 h-2 bg-indigo-100 border-b-2 border-indigo-500 rounded-xs" />
              <span>— Pretérito Perfecto (Ավարտվածություն)</span>
              <span className="inline-block w-4 h-2 bg-emerald-100 border-b-2 border-emerald-500 rounded-xs ml-4" />
              <span>— Pretérito Imperfecto (Ընթացք / Ֆոն)</span>
            </div>
          </div>
        )}
      </div>

      {/* Right Explanation Tooltip Frame */}
      <div className="lg:col-span-1">
        <AnimatePresence mode="wait">
          {selectedAnnotation ? (
            <motion.div
              key={selectedAnnotation.word}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm sticky top-6 space-y-4"
              id="selected-verb-explanations"
            >
              {/* Card Header close */}
              <div className="flex justify-between items-start">
                <span className={`text-2xs font-bold uppercase tracking-widest px-2.5 py-1 rounded border ${
                  selectedAnnotation.tense === Tense.Perfecto
                    ? 'bg-indigo-50 border-indigo-100 text-indigo-800'
                    : 'bg-emerald-50 border-emerald-100 text-emerald-800'
                }`}>
                  {selectedAnnotation.tense}
                </span>
                <button
                  id="btn-close-tooltip"
                  onClick={() => setSelectedAnnotation(null)}
                  className="p-1 rounded-full text-zinc-400 hover:text-zinc-650 hover:bg-zinc-150 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Title verb form */}
              <div>
                <h4 className="text-2xl font-mono font-bold text-slate-900">
                  {selectedAnnotation.word}
                </h4>
                <div className="text-xs text-slate-500 mt-1 font-mono">
                  Անորոշ ձև (Infinitive)՝ <b className="text-slate-800 font-bold">{selectedAnnotation.infinitive}</b>
                </div>
              </div>

              {/* Translation */}
              <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                <div className="text-3xs uppercase text-slate-400 tracking-wider font-bold mb-1">Թարգմանություն՝</div>
                <p className="text-sm font-extrabold text-slate-900 font-sans">
                  «{selectedAnnotation.translation}»
                </p>
              </div>

              {/* Syntax validation explain */}
              <div className="space-y-2">
                <div className="text-3xs uppercase text-slate-400 tracking-wider font-bold">Ինչո՞ւ հենց այս ժամանակաձևը։</div>
                <p className="text-xs text-slate-650 leading-relaxed bg-slate-50/50 p-3.5 rounded-xl border border-slate-200/60 font-medium font-sans">
                  {selectedAnnotation.reason}
                </p>
              </div>

              <div className="text-2xs italic text-center text-slate-400 bg-slate-50 py-2.5 rounded-xl font-sans">
                Սեղմեք տեքստի մյուս ընդգծված բառերի վրա՝ դրանց վերլուծությունը տեսնելու համար։
              </div>
            </motion.div>
          ) : (
            <div className="bg-white p-6 rounded-2xl border border-dashed border-slate-300 text-center space-y-4 sticky top-6 font-sans">
              <div className="w-12 h-12 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto border border-indigo-100">
                <Info className="w-5 h-5 animate-pulse" />
              </div>
              <h4 className="font-bold text-slate-900 text-sm font-display font-sans">Օգնական ու Թարգմանիչ</h4>
              <div className="text-xs text-slate-500 leading-relaxed space-y-3 text-left bg-slate-50/40 p-3 rounded-xl border border-slate-100">
                <p className="leading-relaxed">
                  💡 <b className="text-indigo-900">Բայերի վերլուծություն</b>․ Սեղմեք ընդգծված բայերի վրա՝ դրանց քերականական վերլուծությունը և բացատրությունը տեսնելու համար։
                </p>
                <div className="h-px bg-slate-200" />
                <p className="leading-relaxed">
                  🇦🇲 <b className="text-indigo-900">Նախադասությունների թարգմանություն</b>․ Սեղմեք ցանկացած նախադասության վրա՝ դրա <b>հայերեն թարգմանությունը</b> հենց տեղում բացելու համար։
                </p>
              </div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
