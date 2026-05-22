import React, { useState } from 'react';
import { motion } from 'motion/react';
import { theoryTopics, irregularVerbs } from './theory';
import { Tense } from './types';
import { BookOpen, Sparkles, HelpCircle, Check, Award, AlertCircle, Info } from 'lucide-react';

export default function TheorySection() {
  const [activeTab, setActiveTab] = useState<'perfecto' | 'imperfecto' | 'irregulars'>('perfecto');

  const activeTopic = theoryTopics.find(
    (topic) => topic.id === (activeTab === 'perfecto' ? 'preterito_perfecto' : 'preterito_imperfecto')
  );

  return (
    <div className="space-y-6" id="theory-section-container">
      {/* Tab Navigation */}
      <div className="flex flex-wrap p-1.5 bg-white rounded-2xl border border-slate-200 shadow-xs gap-1">
        <button
          id="tab-perfecto"
          onClick={() => setActiveTab('perfecto')}
          className={`flex-1 min-w-[140px] py-3.5 px-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'perfecto'
              ? 'bg-indigo-900 text-white shadow-md shadow-indigo-100 border-b-2 border-indigo-500'
              : 'text-slate-600 hover:text-indigo-900 hover:bg-slate-50'
          }`}
        >
          <Sparkles className="w-4 h-4 text-indigo-400" />
          Pretérito Perfecto
        </button>
        <button
          id="tab-imperfecto"
          onClick={() => setActiveTab('imperfecto')}
          className={`flex-1 min-w-[140px] py-3.5 px-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'imperfecto'
              ? 'bg-emerald-900 text-white shadow-md shadow-emerald-100 border-b-2 border-emerald-500'
              : 'text-slate-600 hover:text-emerald-900 hover:bg-slate-50'
          }`}
        >
          <BookOpen className="w-4 h-4 text-emerald-400" />
          Pretérito Imperfecto
        </button>
        <button
          id="tab-irregulars"
          onClick={() => setActiveTab('irregulars')}
          className={`flex-1 min-w-[140px] py-3.5 px-4 rounded-xl font-bold text-xs md:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer ${
            activeTab === 'irregulars'
              ? 'bg-rose-900 text-white shadow-md shadow-rose-100 border-b-2 border-rose-500'
              : 'text-slate-600 hover:text-rose-900 hover:bg-slate-50'
          }`}
        >
          <AlertCircle className="w-4 h-4 text-rose-400" />
          Անկանոն բայեր (Irregulares)
        </button>
      </div>

      {/* Main Content Area */}
      <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xs border border-slate-200">
        {activeTab !== 'irregulars' && activeTopic ? (
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Header */}
            <div className="border-b border-slate-100 pb-5">
              <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-bold uppercase mb-3 ${
                activeTab === 'perfecto' 
                  ? 'bg-indigo-50 text-indigo-800 border border-indigo-100' 
                  : 'bg-emerald-50 text-emerald-800 border border-emerald-100'
              }`}>
                {activeTopic.tense}
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                {activeTopic.title}
              </h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                {activeTopic.subtitle}
              </p>
            </div>

            {/* Conjugation Grid */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <span className={`w-2.5 h-2.5 rotate-45 ${activeTab === 'perfecto' ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                Կանոնավոր բայերի խոնարհումը (Conjugación)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {activeTopic.conjugationTable.map((conj) => (
                  <div key={conj.ending} className={`rounded-xl p-5 border ${
                    activeTab === 'perfecto' 
                      ? 'bg-indigo-50/20 border-indigo-100/60' 
                      : 'bg-emerald-50/20 border-emerald-100/60'
                  }`}>
                    <div className={`text-center font-bold uppercase tracking-widest text-xs border-b pb-2 mb-3 ${
                      activeTab === 'perfecto' 
                        ? 'text-indigo-900 border-indigo-100' 
                        : 'text-emerald-950 border-emerald-100'
                    }`}>
                      -{conj.ending.toUpperCase()} վերջավորությամբ բայեր
                    </div>
                    <div className="space-y-2 text-sm font-mono text-slate-800">
                      <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-1">
                        <span className="opacity-60 font-sans">Yo</span>
                        <span className={`font-bold ${activeTab === 'perfecto' ? 'text-indigo-700' : 'text-emerald-700'}`}>{conj.yo}</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-1">
                        <span className="opacity-60 font-sans">Tú</span>
                        <span className={`font-bold ${activeTab === 'perfecto' ? 'text-indigo-700' : 'text-emerald-700'}`}>{conj.tu}</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-1">
                        <span className="opacity-60 font-sans">Él / Ella</span>
                        <span className={`font-bold ${activeTab === 'perfecto' ? 'text-indigo-700' : 'text-emerald-700'}`}>{conj.el}</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-1">
                        <span className="opacity-60 font-sans">Nosotros</span>
                        <span className={`font-bold ${activeTab === 'perfecto' ? 'text-indigo-700' : 'text-emerald-700'}`}>{conj.nosotros}</span>
                      </div>
                      <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-1">
                        <span className="opacity-60 font-sans">Vosotros</span>
                        <span className={`font-bold ${activeTab === 'perfecto' ? 'text-indigo-700' : 'text-emerald-700'}`}>{conj.vosotros}</span>
                      </div>
                      <div className="flex justify-between pb-1">
                        <span className="opacity-60 font-sans">Ellos / Ellas</span>
                        <span className={`font-bold ${activeTab === 'perfecto' ? 'text-indigo-700' : 'text-emerald-700'}`}>{conj.ellos}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Use Cases */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <span className={`w-2.5 h-2.5 rotate-45 ${activeTab === 'perfecto' ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                Կիրառման հիմնական դեպքերը (Uso)
              </h4>
              <div className="space-y-4">
                {activeTopic.useCases.map((use, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-5 border border-slate-200 shadow-2xs flex gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-md flex items-center justify-center font-bold text-sm ${
                      activeTab === 'perfecto' 
                        ? 'bg-indigo-50 text-indigo-800 border border-indigo-100' 
                        : 'bg-emerald-50 text-emerald-800 border border-emerald-100'
                    }`}>
                      {idx + 1}
                    </div>
                    <div className="space-y-2">
                      <h5 className="font-bold text-slate-900 text-base">{use.title}</h5>
                      <p className="text-slate-600 text-sm leading-relaxed">{use.description}</p>
                      <div className={`mt-3 pl-3 border-l-2 space-y-1 ${
                        activeTab === 'perfecto' ? 'border-indigo-400/40' : 'border-emerald-400/40'
                      }`}>
                        {use.examples.map((ex, exIdx) => (
                          <div key={exIdx} className="text-xs">
                            <span className="font-bold text-slate-950 block md:inline font-mono">{ex.spanish}</span>
                            <span className="text-slate-500 md:ml-2 block md:inline">— {ex.russian}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Temporal Markers */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <span className={`w-2.5 h-2.5 rotate-45 ${activeTab === 'perfecto' ? 'bg-indigo-500' : 'bg-emerald-500'}`} />
                Ժամանակի ցուցիչներ (Marcadores temporales)
              </h4>
              <p className="text-xs text-slate-500">
                Հուշող բառեր, որոնք մատնանշում են տվյալ ժամանակաձևի ընտրության անհրաժեշտությունը.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {activeTopic.temporalMarkers.map((marker, mIdx) => (
                  <div
                    key={mIdx}
                    className={`p-3 bg-slate-50 rounded-lg border border-slate-200/80 hover:border-slate-300 transition-colors`}
                  >
                    <div className="font-bold text-slate-900 font-mono text-sm">{marker.word}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{marker.translation}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="irregulars"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-8"
          >
            {/* Irregulars Header */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-rose-50 text-rose-800 text-xs font-bold uppercase mb-3 border border-rose-100">
                Irregulares
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 font-display">
                Բայերի բացառություններն ու անկանոն ձևերը
              </h3>
              <p className="text-slate-500 text-sm mt-1 leading-relaxed">
                Իսպաներենում որոշ բայեր խոնարհվում են անկանոն կերպով։ Pretérito Perfecto-ում փոխվում են դերբայներական ձևերը, իսկ Pretérito Imperfecto-ում կա ընդամենը 3 անկանոն բայ։
              </p>
            </div>

            {/* Pretérito Perfecto Irregular Participles */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <span className="w-2.5 h-2.5 rotate-45 bg-rose-500" />
                Անկանոն դերբայներ (Pretérito Perfecto)
              </h4>
              <p className="text-xs text-slate-500">
                Այս ձևերի անգիր հիշելը չափազանց կարևոր է։ Օժանդակ <b>haber</b> բայը խոնարհվում է սովորական կանոնով, սակայն դերբայը ենթարկվում է փոփոխության.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {irregularVerbs
                  .filter((v) => v.tense === Tense.Perfecto)
                  .map((v, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-rose-50/10 rounded-xl border border-rose-100 hover:border-rose-200 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline justify-between border-b border-rose-100/40 pb-2">
                          <span className="font-extrabold text-lg text-slate-900 font-sans">
                            {v.verb}
                          </span>
                          <span className="text-xs text-rose-700 font-mono italic">({v.translation})</span>
                        </div>
                        <div className="mt-3 bg-white py-2 px-3 rounded-lg border border-slate-100 shadow-2xs">
                          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-xs font-mono">
                            <div><span className="opacity-55 font-sans">yo</span> <strong className="text-rose-700">{v.forms.yo}</strong></div>
                            <div><span className="opacity-55 font-sans">nosotros</span> <strong className="text-rose-700">{v.forms.nosotros}</strong></div>
                            <div><span className="opacity-55 font-sans">tú</span> <strong className="text-rose-700">{v.forms.tu}</strong></div>
                            <div><span className="opacity-55 font-sans">vosotros</span> <strong className="text-rose-700">{v.forms.vosotros}</strong></div>
                            <div><span className="opacity-55 font-sans">él/ella</span> <strong className="text-rose-700">{v.forms.el}</strong></div>
                            <div><span className="opacity-55 font-sans">ellos/as</span> <strong className="text-rose-700">{v.forms.ellos}</strong></div>
                          </div>
                        </div>
                      </div>
                      <p className="text-xs text-rose-800 mt-2 bg-rose-50/50 p-2 rounded-md flex items-center gap-1.5 border border-rose-100/60 font-medium">
                        <Info className="w-3.5 h-3.5 flex-shrink-0 text-rose-600" />
                        {v.note}
                      </p>
                    </div>
                  ))}
              </div>
            </div>

            {/* Pretérito Imperfecto 3 exceptions */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-slate-900 flex items-center gap-2 font-display">
                <span className="w-2.5 h-2.5 rotate-45 bg-rose-500" />
                Ընդամենը 3 բացառություն Pretérito Imperfecto-ում
              </h4>
              <p className="text-xs text-slate-500 font-medium">
                Սա հիանալի նորություն է. Imperfecto ժամանակաձևում միայն երեք բայերն են խոնարհվում անկանոն։ Իսպաներենի մնացած բոլոր բայերը լիովին կանոնավոր են։
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {irregularVerbs
                  .filter((v) => v.tense === Tense.Imperfecto)
                  .map((v, idx) => (
                    <div
                      key={idx}
                      className="p-5 bg-rose-50/10 rounded-xl border border-rose-100 shadow-2xs flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-baseline justify-between border-b border-rose-100 pb-2 mb-3">
                          <span className="font-extrabold text-xl text-slate-900 font-sans">
                            {v.verb}
                          </span>
                          <span className="text-xs text-rose-700 font-medium italic">({v.translation})</span>
                        </div>
                        <div className="space-y-1.5 font-mono text-sm text-slate-800">
                          <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-0.5">
                            <span className="text-xs font-sans opacity-65">Yo</span>
                            <span className="font-bold text-rose-600">{v.forms.yo}</span>
                          </div>
                          <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-0.5">
                            <span className="text-xs font-sans opacity-65">Tú</span>
                            <span className="font-bold text-rose-600">{v.forms.tu}</span>
                          </div>
                          <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-0.5">
                            <span className="text-xs font-sans opacity-65">Él / Ella</span>
                            <span className="font-bold text-rose-600">{v.forms.el}</span>
                          </div>
                          <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-0.5">
                            <span className="text-xs font-sans opacity-65">Nosotros</span>
                            <span className="font-bold text-rose-600">{v.forms.nosotros}</span>
                          </div>
                          <div className="flex justify-between border-b border-dashed border-slate-200/50 pb-0.5">
                            <span className="text-xs font-sans opacity-65">Vosotros</span>
                            <span className="font-bold text-rose-600">{v.forms.vosotros}</span>
                          </div>
                          <div className="flex justify-between pb-0.5">
                            <span className="text-xs font-sans opacity-65">Ellos / as</span>
                            <span className="font-bold text-rose-600">{v.forms.ellos}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 bg-white/80 text-xs text-rose-900 p-2.5 rounded-lg border border-rose-100 flex items-start gap-1.5">
                        <Info className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                        <span>{v.note}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
