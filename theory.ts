import { Tense, TheoryTopic, IrregularVerb } from './types';

export const theoryTopics: TheoryTopic[] = [
  {
    id: 'preterito_perfecto',
    title: 'Pretérito Perfecto (Անցյալ կատարյալ)',
    subtitle: 'Կապում է անցյալի գործողությունը ներկա պահի հետ',
    tense: Tense.Perfecto,
    useCases: [
      {
        title: 'Գործողություններ դեռ չավարտված ժամանակահատվածում',
        description: 'Օգտագործվում է, երբ այն ժամանակահատվածը, որում տեղի է ունեցել գործողությունը, դեռ չի ավարտվել (hoy, este mes, este año)։',
        examples: [
          { spanish: 'Hoy he desayunado fruta.', russian: 'Այսօր նախաճաշին միրգ եմ կերել։ (Այսօրը դեռ չի ավարտվել)' },
          { spanish: 'Este año hemos viajado a España.', russian: 'Այս տարի մենք ճանապարհորդել ենք Իսպանիա։ (Այս տարին դեռ շարունակվում է)' }
        ]
      },
      {
        title: 'Կյանքի փորձ (առանց հստակ ժամանակի)',
        description: 'Երբ խոսում ենք մեր կյանքում ընդհանրապես տեղի ունեցած կամ չունեցած իրադարձությունների մասին՝ առանց որոշակի ամսաթվի կամ ժամանակի նշման։',
        examples: [
          { spanish: '¿Alguna vez has comido paella?', russian: 'Դու երբևէ պաելյա կերե՞լ ես։ (Կյանքումդ ընդհանրապես)' },
          { spanish: 'Nunca he estado en Madrid.', russian: 'Ես երբեք չեմ եղել Մադրիդում։' }
        ]
      },
      {
        title: 'Վերջերս կատարված գործողություններ (արդյունքը ներկայում)',
        description: 'Գործողություններ, որոնք նոր են տեղի ունեցել, և դրանց արդյունքը կարևոր է ներկա պահին։',
        examples: [
          { spanish: 'He perdido mis llaves, no puedo entrar.', russian: 'Ես կորցրել եմ բանալիներս, չեմ կարողանում ներս մտնել։ (Կորցրել եմ վերջերս, արդյունքը՝ հիմա բանալի չունեմ)' }
        ]
      }
    ],
    temporalMarkers: [
      { word: 'hoy', translation: 'այսօր' },
      { word: 'esta mañana / tarde / semana', translation: 'այս առավոտ / կեսօրին / այս շաբաթ' },
      { word: 'este mes / año', translation: 'այս ամիս / այս տարի' },
      { word: 'ya', translation: 'արդեն' },
      { word: 'todavía no / aún no', translation: 'դեռ ոչ' },
      { word: 'últimamente', translation: 'վերջին շրջանում' },
      { word: 'alguna vez', translation: 'երբևէ' },
      { word: 'nunca', translation: 'երբեք' },
      { word: 'hace poco / hace un rato', translation: 'վերջերս / քիչ առաջ (այսօրվա ընթացքում)' }
    ],
    conjugationTable: [
      {
        ending: 'ar',
        yo: 'he cantado',
        tu: 'has cantado',
        el: 'ha cantado',
        nosotros: 'hemos cantado',
        vosotros: 'habéis cantado',
        ellos: 'han cantado'
      },
      {
        ending: 'er',
        yo: 'he comido',
        tu: 'has comido',
        el: 'ha comido',
        nosotros: 'hemos comido',
        vosotros: 'habéis comido',
        ellos: 'han comido'
      },
      {
        ending: 'ir',
        yo: 'he vivido',
        tu: 'has vivido',
        el: 'ha vivido',
        nosotros: 'hemos vivido',
        vosotros: 'habéis vivido',
        ellos: 'han vivido'
      }
    ]
  },
  {
    id: 'preterito_imperfecto',
    title: 'Pretérito Imperfecto (Անցյալ անկատար)',
    subtitle: 'Նկարագրում է անցյալում կրկնվող գործողությունները, սովորությունները և համատեքստը',
    tense: Tense.Imperfecto,
    useCases: [
      {
        title: 'Սովորություններ և կրկնվող գործողություններ',
        description: 'Օգտագործվում է անցյալում կանոնավոր, սովորական դարձած գործողություններ արտահայտելու համար (համարժեք է «նախկինում անում էի»-ին)։',
        examples: [
          { spanish: 'Cuando era niño, jugaba al fútbol todos los días.', russian: 'Երբ երեխա էի, ամեն օր ֆուտբոլ էի խաղում։' },
          { spanish: 'Antes vivíamos en un pueblo.', russian: 'Նախկինում մենք ապրում էինք գյուղում։' }
        ]
      },
      {
        title: 'Մարդկանց, վայրերի, եղանակի կամ վիճակի նկարագրություն',
        description: 'Երբ նկարագրում ենք անցյալի իրադարձությունների «ֆոնը»՝ ինչպիսին էր եղանակը, ինչ տեսք ունեին մարդիկ, ինչպես էին իրենց զգում։',
        examples: [
          { spanish: 'Hacía mucho sol y la playa estaba vacía.', russian: 'Շատ արևոտ էր, և լողափը դատարկ էր։' },
          { spanish: 'Tenía veinte años y estaba muy feliz.', russian: 'Ես քսան տարեկան էի և շատ երջանիկ էի։' }
        ]
      },
      {
        title: 'Զուգահեռ գործողություններ անցյալում',
        description: 'Օգտագործվում է, երբ անցյալում երկու կամ ավելի գործողություններ կատարվում էին միաժամանակ՝ առանց միմյանց ընդհատելու։',
        examples: [
          { spanish: 'Mientras mi madre cocinaba, yo estudiaba.', russian: 'Քանի դեռ մայրիկս ճաշ էր պատրաստում, ես սովորում էի։' }
        ]
      }
    ],
    temporalMarkers: [
      { word: 'antes', translation: 'նախկինում / առաջ' },
      { word: 'cuando era niño / joven', translation: 'երբ երեխա էի / երիտասարդ էի' },
      { word: 'todos los días / semanas / años', translation: 'ամեն օր / ամեն շաբաթ / ամեն տարի' },
      { word: 'a menudo / frecuentemente', translation: 'հաճախ / կանոնավոր կերպով' },
      { word: 'always / nunca (в прошлом)', translation: 'միշտ / երբեք (անցյալում)' },
      { word: 'de vez en cuando', translation: 'ժամանակ առ ժամանակ' },
      { word: 'los lunes / los fines de semana', translation: 'երկուշաբթի օրերին / հանգստյան օրերին (անցյալում)' },
      { word: 'mientras', translation: 'մինչդեռ / քանի դեռ' }
    ],
    conjugationTable: [
      {
        ending: 'ar',
        yo: 'cantaba',
        tu: 'cantabas',
        el: 'cantaba',
        nosotros: 'cantábamos',
        vosotros: 'cantabais',
        ellos: 'cantaban'
      },
      {
        ending: 'er',
        yo: 'comía',
        tu: 'comías',
        el: 'comía',
        nosotros: 'comíamos',
        vosotros: 'comíais',
        ellos: 'comían'
      },
      {
        ending: 'ir',
        yo: 'vivía',
        tu: 'vivías',
        el: 'vivía',
        nosotros: 'vivíamos',
        vosotros: 'vivíais',
        ellos: 'vivían'
      }
    ]
  }
];

export const irregularVerbs: IrregularVerb[] = [
  {
    verb: 'Abrir',
    translation: 'բացել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he abierto',
      tu: 'has abierto',
      el: 'ha abierto',
      nosotros: 'hemos abierto',
      vosotros: 'habéis abierto',
      ellos: 'han abierto'
    },
    note: 'Անցյալ դերբայը ունի abierto ձևը (ոչ թե «abrido»)։'
  },
  {
    verb: 'Decir',
    translation: 'ասել, խոսել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he dicho',
      tu: 'has dicho',
      el: 'ha dicho',
      nosotros: 'hemos dicho',
      vosotros: 'habéis dicho',
      ellos: 'han dicho'
    },
    note: 'Անցյալ դերբայը ունի dicho ձևը (ոչ թե «decido»)։'
  },
  {
    verb: 'Escribir',
    translation: 'գրել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he escrito',
      tu: 'has escrito',
      el: 'ha escrito',
      nosotros: 'hemos escrito',
      vosotros: 'habéis escrito',
      ellos: 'han escrito'
    },
    note: 'Անցյալ դերբայը ունի escrito ձևը (ոչ թե «escribido»)։'
  },
  {
    verb: 'Hacer',
    translation: 'անել, պատրաստել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he hecho',
      tu: 'has hecho',
      el: 'ha hecho',
      nosotros: 'hemos hecho',
      vosotros: 'habéis hecho',
      ellos: 'han hecho'
    },
    note: 'Անցյալ դերբայը ունի hecho ձևը (ոչ թե «hacido»)։'
  },
  {
    verb: 'Poner',
    translation: 'դնել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he puesto',
      tu: 'has puesto',
      el: 'ha puesto',
      nosotros: 'hemos puesto',
      vosotros: 'habéis puesto',
      ellos: 'han puesto'
    },
    note: 'Անցյալ դերբայը ունի puesto ձևը (ոչ թե «ponido»)։'
  },
  {
    verb: 'Ver',
    translation: 'տեսնել, նայել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he visto',
      tu: 'has visto',
      el: 'ha visto',
      nosotros: 'hemos visto',
      vosotros: 'habéis visto',
      ellos: 'han visto'
    },
    note: 'Անցյալ դերբայը ունի visto ձևը (ոչ թե «vido»)։'
  },
  {
    verb: 'Volver',
    translation: 'վերադառնալ',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he vuelto',
      tu: 'has vuelto',
      el: 'ha vuelto',
      nosotros: 'hemos vuelto',
      vosotros: 'habéis vuelto',
      ellos: 'han vuelto'
    },
    note: 'Անցյալ դերբայը ունի vuelto ձևը (ոչ թե «volvido»)։'
  },
  {
    verb: 'Romper',
    translation: 'կոտրել, պատռել',
    tense: Tense.Perfecto,
    forms: {
      yo: 'he roto',
      tu: 'has roto',
      el: 'ha roto',
      nosotros: 'hemos roto',
      vosotros: 'habéis roto',
      ellos: 'han roto'
    },
    note: 'Անցյալ դերբայը ունի roto ձևը (ոչ թե «rompido»)։'
  },

  // Imperfecto - ընդամենը 3 անկանոն բայ!
  {
    verb: 'Ser',
    translation: 'լինել (որպես մշտական հատկանիշ)',
    tense: Tense.Imperfecto,
    forms: {
      yo: 'era',
      tu: 'eras',
      el: 'era',
      nosotros: 'éramos',
      vosotros: 'erais',
      ellos: 'eran'
    },
    note: 'Ուշադրություն դարձրեք éramos ձևում շեշտի նշանին (tilde)։'
  },
  {
    verb: 'Ir',
    translation: 'գնալ',
    tense: Tense.Imperfecto,
    forms: {
      yo: 'iba',
      tu: 'ibas',
      el: 'iba',
      nosotros: 'íbamos',
      vosotros: 'ibais',
      ellos: 'iban'
    },
    note: 'Ուշադրություն դարձրեք íbamos ձևում շեշտի նշանին (tilde)։'
  },
  {
    verb: 'Ver',
    translation: 'տեսնել, նայել',
    tense: Tense.Imperfecto,
    forms: {
      yo: 'veía',
      tu: 'veías',
      el: 'veía',
      nosotros: 'veíamos',
      vosotros: 'veíais',
      ellos: 'veían'
    },
    note: 'Բոլոր ձևերը պահպանում են e տառը í-ից առաջ։'
  }
];
