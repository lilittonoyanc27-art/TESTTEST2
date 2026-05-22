export enum Tense {
  Perfecto = 'Pretérito Perfecto',
  Imperfecto = 'Pretérito Imperfecto',
}

export interface VerbExplanation {
  verb: string;
  tense: Tense;
  infinitivo: string;
  explanation: string;
  translation: string;
}

export interface TheoryTopic {
  id: string;
  title: string;
  subtitle: string;
  tense: Tense | 'both';
  useCases: {
    title: string;
    description: string;
    examples: { spanish: string; russian: string }[];
  }[];
  temporalMarkers: { word: string; translation: string }[];
  conjugationTable: {
    ending: 'ar' | 'er' | 'ir';
    yo: string;
    tu: string;
    el: string;
    nosotros: string;
    vosotros: string;
    ellos: string;
  }[];
}

export interface IrregularVerb {
  verb: string;
  translation: string;
  tense: Tense;
  forms: {
    yo: string;
    tu: string;
    el: string;
    nosotros: string;
    vosotros: string;
    ellos: string;
  };
  note: string;
}

export interface ExerciseItem {
  id: number;
  question: string;
  sentenceBefore: string;
  sentenceAfter: string;
  options?: string[]; // For multiple choice
  correctAnswers: string[]; // Possible correct answers (e.g. case insensitive / variations)
  verbInfinitive?: string;
  hint: string;
  explanation: string;
  tense: Tense;
}

export interface ExerciseDefinition {
  id: number;
  title: string;
  description: string;
  type: 'categorization' | 'fill-blanks' | 'multiple-choice' | 'sentence-builder';
  items: ExerciseItem[];
}

export interface AnnotatedText {
  id: number;
  title: string;
  description: string;
  paragraphs: {
    sentences: {
      text: string;
      translationArm: string;
    }[];
    annotations?: {
      word: string;
      infinitive: string;
      tense: Tense;
      translation: string;
      reason: string;
    }[];
  }[];
}

export interface GameCard {
  id: string;
  frontText: string;
  backText: string;
  isFlipped: boolean;
  isMatched: boolean;
  type: 'verb' | 'meaning' | 'conjugation' | 'tense-marker';
  matchId: string; // ID of matching card
}
