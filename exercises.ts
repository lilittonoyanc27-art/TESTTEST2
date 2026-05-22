import { Tense, ExerciseDefinition } from './types';

export const exercisesData: ExerciseDefinition[] = [
  {
    id: 1,
    title: 'Վարժություն 1. Ժամանակի ցուցիչների դասակարգում',
    description: 'Բաշխեք ժամանակային ցուցիչները (marcadores temporales) երկու սյունակների միջև՝ կախված նրանից, թե որ ժամանակաձևի հետ են դրանք օգտագործվում։',
    type: 'categorization',
    items: [
      {
        id: 101,
        question: 'hoy (այսօր)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Perfecto'],
        hint: 'Նշանակում է «այսօր»։ Այս օրը դեռ չի ավարտվել։',
        explanation: '«Hoy»-ը (այսօր) մատնանշում է դեռ չավարտված ժամանակահատված, հետևաբար օգտագործվում է Pretérito Perfecto-ի հետ։',
        tense: Tense.Perfecto
      },
      {
        id: 102,
        question: 'antes (նախկինում)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Imperfecto'],
        hint: 'Նշանակում է «նախկինում»։ Մատնանշում է սովորություններ կամ վիճակներ անորոշ անցյալում։',
        explanation: '«Antes»-ը մատնանշում է հակադրություն ներկայի հետ և վերաբերում է անցյալի ֆոնային նկարագրությանը, որը Pretérito Imperfecto-ի դասական դեպք է։',
        tense: Tense.Imperfecto
      },
      {
        id: 103,
        question: 'cuando era niño (երբ երեխա էի)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Imperfecto'],
        hint: 'Նշանակում է «երբ երեխա էի»։ Նկարագրում է մանկության շրջանը։',
        explanation: '«Cuando era niño» արտահայտությունը նկարագրում է մանկության սովորությունները կամ հատկանիշները, ուստի պահանջում է Pretérito Imperfecto:',
        tense: Tense.Imperfecto
      },
      {
        id: 104,
        question: 'esta mañana (այս առավոտ)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Perfecto'],
        hint: 'Նշանակում է «այս առավոտ»։ Վերաբերում է այսօրվա օրվան։',
        explanation: '«Esta mañana»-ն այսօրվա օրվա մի մասն է, չավարտված ժամանակահատված, ուստի օգտագործվում է Pretérito Perfecto:',
        tense: Tense.Perfecto
      },
      {
        id: 105,
        question: 'todos los días (ամեն օր)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Imperfecto'],
        hint: 'Նշանակում է «ամեն օր»։ Կայուն կրկնելիություն անցյալում։',
        explanation: 'Անցյալում կանոնավոր կերպով կրկնվող առօրյա գործողությունները միշտ արտահայտվում են Pretérito Imperfecto-ով։',
        tense: Tense.Imperfecto
      },
      {
        id: 106,
        question: 'ya (արդեն)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Perfecto'],
        hint: 'Նշանակում է «արդեն»։ Կապում է ավարտված գործողությունը ներկա պահի հետ։',
        explanation: '«Ya»-ն (արդեն) ցույց է տալիս, որ գործողությունն արդեն իսկ իրականացվել է, բայց դրա կարևորությունը կամ արդյունքը կապված է ներկայի հետ։ Սա Pretérito Perfecto-ի բնորոշ ցուցիչ է։',
        tense: Tense.Perfecto
      },
      {
        id: 107,
        question: 'a menudo (հաճախ)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Imperfecto'],
        hint: 'Նշանակում է «հաճախ»։ Մատնանշում է պարբերական սովորություն անցյալում։',
        explanation: '«A menudo»-ն (հաճախ) մատնանշում է անցյալում գործողության պարբերականությունը, ինչը պահանջում է Pretérito Imperfecto-ի կիրառում։',
        tense: Tense.Imperfecto
      },
      {
        id: 108,
        question: 'este mes (այս ամիս)',
        sentenceBefore: '',
        sentenceAfter: '',
        correctAnswers: ['Pretérito Perfecto'],
        hint: 'Նշանակում է «այս ամիս»։ Ընթացիկ ամիսը դեռ շարունակվում է։',
        explanation: '«Este mes»-ն (այս ամիս) ընդգրկում է դեռ չավարտված ժամանակահատված (այս ամիսը), ուստի օգտագործվում է Pretérito Perfecto-ն։',
        tense: Tense.Perfecto
      }
    ]
  },
  {
    id: 2,
    title: 'Վարժություն 2. Բայերի խոնարհումը Pretérito Perfecto-ում',
    description: 'Տեղադրեք բայի ճիշտ ձևը Pretérito Perfecto-ում։ Գրեք օժանդակ բայը (he/has/ha/hemos/habéis/han) և դերբայի ձևը (ներառյալ անկանոն ձևերը)։',
    type: 'fill-blanks',
    items: [
      {
        id: 201,
        question: 'Esta mañana yo (ayudar) a mi madre en el jardín.',
        sentenceBefore: 'Esta mañana yo ',
        sentenceAfter: ' a mi madre en el jardín.',
        verbInfinitive: 'ayudar',
        correctAnswers: ['he ayudado'],
        hint: '«yo»-ի համար օգտագործվում է «he»։ «ayudar»-ը կանոնավոր բայ է -ar վերջավորությամբ (ստանում է -ado)։',
        explanation: '«yo» ենթական պահանջում է «he»-ն։ «ayudar» բայի դերբայը կազմվում է ստանդարտ ձևով՝ «ayudado»։ Միասին ստացվում է «he ayudado»։',
        tense: Tense.Perfecto
      },
      {
        id: 202,
        question: '¿Tú ya (escribir) los deberes de español?',
        sentenceBefore: '¿Tú ya ',
        sentenceAfter: ' los deberes de español?',
        verbInfinitive: 'escribir',
        correctAnswers: ['has escrito'],
        hint: '«tú»-ի համար օգտագործվում է «has»։ «escribir» բայը բացառություն է անցյալ դերբայներում։',
        explanation: '«tú» ենթական պահանջում է օժանդակ «has»-ը։ «escribir» բայն ունի անկանոն դերբայ՝ «escrito» (ոչ թե escribido!)։ Արդյունքը՝ «has escrito»։',
        tense: Tense.Perfecto
      },
      {
        id: 203,
        question: 'Este mes nosotros (comer) mucha verdura fresca.',
        sentenceBefore: 'Este mes nosotros ',
        sentenceAfter: ' mucha verdura fresca.',
        verbInfinitive: 'comer',
        correctAnswers: ['hemos comido'],
        hint: '«nosotros»-ի համար օգտագործվում է «hemos»։ «comer»-ը կանոնավոր բայ է -er վերջավորությամբ (ստանում է -ido)։',
        explanation: '«nosotros» ենթական պահանջում է օժանդակ «hemos»-ը։ «comer» բայի դերբայը «comido» է։ Ստացվում է «hemos comido»։',
        tense: Tense.Perfecto
      },
      {
        id: 204,
        question: 'Mis hermanos todavía no (volver) de sus vacaciones.',
        sentenceBefore: 'Mis hermanos todavía no ',
        sentenceAfter: ' de sus vacaciones.',
        verbInfinitive: 'volver',
        correctAnswers: ['han vuelto'],
        hint: '«mis hermanos»-ի (ellos) համար օժանդակ բայը «han»-ն է։ «volver»-ը բացառություն է անցյալ դերբայներում։',
        explanation: 'Երրորդ դեմքի հոգնակի թվի («ellos») համար օգտագործվում է «han»-ը։ «volver» բայն ունի անկանոն դերբայ՝ «vuelto»։ Պատասխանն է՝ «han vuelto»։',
        tense: Tense.Perfecto
      }
    ]
  },
  {
    id: 3,
    title: 'Վարժություն 3. Բայերի խոնարհումը Pretérito Imperfecto-ում',
    description: 'Լրացրեք բացթողումները Pretérito Imperfecto ձևով (նկարագրելով անցյալի կրկնվող գործողությունները կամ մանկության սովորությունները)։',
    type: 'fill-blanks',
    items: [
      {
        id: 301,
        question: 'Cuando yo era pequeño (jugar) al fútbol con mis amigos.',
        sentenceBefore: 'Cuando yo era pequeño, ',
        sentenceAfter: ' al fútbol con mis amigos.',
        verbInfinitive: 'jugar',
        correctAnswers: ['jugaba'],
        hint: '«yo» ձևը -AR վերջավորությամբ բայերի համար ավարտվում է «-aba»-ով։',
        explanation: '«jugar»-ը կանոնավոր բայ է -AR վերջավորությամբ։ «yo» դեմքի համար Imperfecto-ի վերջավորությունը «-aba» է։ «jugaba»-ն նկարագրում է մանկության տարիներին կանոնավոր ֆուտբոլ խաղալը։',
        tense: Tense.Imperfecto
      },
      {
        id: 302,
        question: 'Antes, mis abuelos (vivir) en una casa muy antigua.',
        sentenceBefore: 'Antes, mis abuelos ',
        sentenceAfter: ' en una casa muy antigua.',
        verbInfinitive: 'vivir',
        correctAnswers: ['vivían'],
        hint: 'Ենթական «ellos» է (mis abuelos)։ -IR վերջավորությամբ բայերի համար վերջավորությունը կլինի «-ían»՝ գրավոր շեշտով (tilde)։',
        explanation: '«vivir» բայը -IR վերջավորությամբ է։ Երրորդ դեմքի հոգնակի թվի ձևը («նրանք») «vivían» է։ Նկարագրում է անցյալում երկարատև բնակության վիճակը։',
        tense: Tense.Imperfecto
      },
      {
        id: 303,
        question: 'Cada verano nosotros (ir) a acampar a la montaña.',
        sentenceBefore: 'Cada verano nosotros ',
        sentenceAfter: ' a acampar a la montaña.',
        verbInfinitive: 'ir',
        correctAnswers: ['íbamos'],
        hint: '«ir» բայը Imperfecto-ի 3 բացառություններից մեկն է։ «nosotros»-ի ձևը գրվում է շեշտով (tilde)։',
        explanation: '«ir» բայը անկանոն է՝ «iba, ibas...»։ Մեզ անհրաժեշտ է «nosotros» ձևը, այսինքն՝ «íbamos» (պարտադիր «í»-ի վրա շեշտով)։',
        tense: Tense.Imperfecto
      },
      {
        id: 304,
        question: 'En invierno siempre (hacer) mucho frío en mi habitación.',
        sentenceBefore: 'En invierno siempre ',
        sentenceAfter: ' mucho frío en mi habitación.',
        verbInfinitive: 'hacer',
        correctAnswers: ['hacía'],
        hint: 'Եղանակի անդեմ արտահայտության վերջավորությունը (él/ella/usted) -ER վերջավորությամբ բայերի համար «-ía» է։',
        explanation: 'Եղանակի անդեմ արտահայտությունն օգտագործում է եզակի թվի 3-րդ դեմքը։ «hacer» բայը -ER վերջավորությամբ ստանում է «-ía» վերջավորությունը, այսինքն՝ «hacía»։ Նկարագրում է եղանակային վիճակը։',
        tense: Tense.Imperfecto
      }
    ]
  },
  {
    id: 4,
    title: 'Վարժություն 4. Perfecto, թե՞ Imperfecto: Ընտրեք ճիշտ ժամանակաձևը',
    description: 'Ընտրեք անցյալ ժամանակի ճիշտ տարբերակը՝ հիմնվելով նախադասության իմաստի և ժամանակային ցուցիչների վրա։',
    type: 'multiple-choice',
    items: [
      {
        id: 401,
        question: 'Este año nosotros _______ a Barcelona de vacaciones.',
        sentenceBefore: 'Este año nosotros ',
        sentenceAfter: ' a Barcelona de vacaciones.',
        options: ['hemos ido', 'íbamos'],
        correctAnswers: ['hemos ido'],
        hint: 'Ուշադրություն դարձրեք «Este año» (այս տարի) ցուցիչին. այս տարին դեռ չի ավարտվել։',
        explanation: '«Este año»-ն ընդգրկում է ընթացիկ, դեռ չավարտված ժամանակահատվածը։ Սա Pretérito Perfecto-ի («hemos ido») հիմնական ցուցիչն է։',
        tense: Tense.Perfecto
      },
      {
        id: 402,
        question: 'Cuando yo _______ diez años, me gustaba leer cómics de aventuras.',
        sentenceBefore: 'Cuando yo ',
        sentenceAfter: ' diez años, me gustaba leer cómics de aventuras.',
        options: ['he tenido', 'tenía'],
        correctAnswers: ['tenía'],
        hint: 'Անցյալում տարիք նշելիս միշտ օգտագործվում է մեկ որոշակի ժամանակաձև։',
        explanation: 'Տարիքի նշումը («tenía 10 años») համարվում է անցյալում ֆոնի դասական նկարագրություն և արտահայտվում է Pretérito Imperfecto-ով («tenía»)։',
        tense: Tense.Imperfecto
      },
      {
        id: 403,
        question: '¿Tú _______ a María esta mañana en la universidad?',
        sentenceBefore: '¿Tú ',
        sentenceAfter: ' a María esta mañana en la universidad?',
        options: ['has visto', 'veías'],
        correctAnswers: ['has visto'],
        hint: '«esta mañana» (այս առավոտ) ցուցիչը վերաբերում է այսօրվան, իսկ տեսնելը («ver») կարճատև, ավարտված գործողություն է։',
        explanation: '«esta mañana»-ն դեռ չավարտված ժամանակ է (այսօր)։ Բացի այդ, մարդուն տեսնելը ավարտված, եզակի գործողություն է, որը պահանջում է Perfecto («has visto»՝ անկանոն դերբայով)։',
        tense: Tense.Perfecto
      },
      {
        id: 404,
        question: 'Mi abuela siempre me _______ empanadillas cuando yo la visitaba de pequeño.',
        sentenceBefore: 'Mi abuela siempre me ',
        sentenceAfter: ' empanadillas cuando yo la visitaba de pequeño.',
        options: ['ha preparado', 'preparaba'],
        correctAnswers: ['preparaba'],
        hint: '«siempre» (միշտ) և «visitaba» (այցելում էի) ցուցիչները մատնանշում են կրկնվող, սովորական դարձած գործողություն անցյալում։',
        explanation: 'Քանի որ նկարագրվում է տատիկի պարբերական սովորությունը անցյալում (ամեն անգամ այցելելիս կարկանդակներ պատրաստելը), օգտագործվում է Imperfecto («preparaba»)։',
        tense: Tense.Imperfecto
      }
    ]
  },
  {
    id: 5,
    title: 'Վարժություն 5. Նախադասության կառուցում',
    description: 'Հավաքեք քերականորեն ճիշտ նախադասություն առաջարկված բառերից՝ ճիշտ հերթականությամբ։',
    type: 'sentence-builder',
    items: [
      {
        id: 501,
        question: 'Hoy hemos comido una paella deliciosa',
        sentenceBefore: 'Կազմեք նախադասություն հետևյալ իմաստով՝ «Այսօր մենք համեղ պաելյա կերանք»',
        sentenceAfter: '',
        options: ['Hoy', 'hemos', 'comido', 'una', 'paella', 'deliciosa'],
        correctAnswers: ['Hoy hemos comido una paella deliciosa'],
        hint: 'Սկսեք «Hoy» ժամանակային ցուցիչով, այնուհետև դրեք օժանդակ «hemos» բայը և «comido» դերբայը։',
        explanation: 'Իսպաներենում բառերի հերթականությունը բավականին ճկուն է, բայց ստանդարտ կառուցվածքն է՝ Ցուցիչ (Hoy) + Օժանդակ բայ (hemos) + Դերբայ (comido) + Ուղիղ խնդիր (una paella deliciosa)։',
        tense: Tense.Perfecto
      },
      {
        id: 502,
        question: 'Antes yo iba mucho al cine',
        sentenceBefore: 'Կազմեք նախադասություն հետևյալ իմաստով՝ «Նախկինում ես հաճախ էի կինո գնում»',
        sentenceAfter: '',
        options: ['Antes', 'yo', 'iba', 'mucho', 'al', 'cine'],
        correctAnswers: ['Antes yo iba mucho al cine', 'Antes iba mucho al cine yo'],
        hint: 'Օգտագործեք «Antes» ցուցիչը, այնուհետև դերանունը և «iba» անկանոն բայը («ir» բայի Imperfecto ձևը)։',
        explanation: '«Antes» բառը սահմանում է անցյալի սովորության համատեքստը։ «iba mucho al cine» կառույցը լրացնում է նախադասությունը։',
        tense: Tense.Imperfecto
      },
      {
        id: 503,
        question: 'Esta semana has escrito tres cartas',
        sentenceBefore: 'Կազմեք նախադասություն հետևյալ իմաստով՝ «Այս շաբաթ դու երեք նամակ ես գրել»',
        sentenceAfter: '',
        options: ['Esta', 'semana', 'has', 'escrito', 'tres', 'cartas'],
        correctAnswers: ['Esta semana has escrito tres cartas'],
        hint: 'Նախ տեղադրեք «Esta semana» ժամանակային արտահայտությունը, ապա ստորոգյալը (օժանդակ «has» + անկանոն դերբայ «escrito»)։',
        explanation: '«Esta semana»-ն Perfecto-ի ցուցիչ է։ Դրան հաջորդում է բայի երկրորդ դեմքի եզակի ձևը՝ անկանոն «escrito» դերբայով + լրացումը։',
        tense: Tense.Perfecto
      }
    ]
  },
  {
    id: 6,
    title: 'Վարժություն 6. Երկու ժամանակաձևերի բացառությունների թեստ',
    description: 'Հատուկ մարտահրավեր. ստուգեք Pretérito Perfecto-ի անկանոն դերբայների և Pretérito Imperfecto-ի 3 բացառությունների ձեր գիտելիքները։',
    type: 'multiple-choice',
    items: [
      {
        id: 601,
        question: '¿Qué has _______ (hacer) hoy en el gimnasio?',
        sentenceBefore: '¿Qué has ',
        sentenceAfter: ' hoy en el gimnasio?',
        options: ['hecho', 'hacido', 'haciendo'],
        correctAnswers: ['hecho'],
        hint: '«hacer» բայը Pretérito Perfecto-ի ամենահաճախ հանդիպող բացառություններից է։',
        explanation: '«hacer»-ը վերածվում է բացառապես «hecho» դերբայի։ «hacido» ձև գոյություն չունի։',
        tense: Tense.Perfecto
      },
      {
        id: 602,
        question: 'De niños, nosotros _______ (ser) muy ruidosos y traviesos.',
        sentenceBefore: 'De niños, nosotros ',
        sentenceAfter: ' muy ruidosos y traviesos.',
        options: ['éramos', 'seríamos', 'síamos'],
        correctAnswers: ['éramos'],
        hint: '«ser»-ը բացառություն է Imperfecto-ում։ «nosotros» ձևում գրվում է շեշտով (tilde)։',
        explanation: '«ser» բայը Pretérito Imperfecto-ում ունի հետևյալ ձևերը՝ era, eras, era, éramos, erais, eran։ Մեզ անհրաժեշտ է «éramos» ձևը։',
        tense: Tense.Imperfecto
      },
      {
        id: 603,
        question: 'El plato se ha _______ (romper) al caer al suelo.',
        sentenceBefore: 'El plato se ha ',
        sentenceAfter: ' al caer al suelo.',
        options: ['rompido', 'roto', 'abierto'],
        correctAnswers: ['roto'],
        hint: '«romper» (կոտրել) բայն ունի անկանոն դերբայ անցյալ ժամանակում։',
        explanation: '«romper»-ը կազմում է «roto» դերբայը։ «rompido»-ն համարվում է կոպիտ քերականական սխալ։',
        tense: Tense.Perfecto
      },
      {
        id: 604,
        question: 'Antes, de noche nosotros _______ (ver) las estrellas por la ventana.',
        sentenceBefore: 'Antes, de noche nosotros ',
        sentenceAfter: ' las estrellas por la ventana.',
        options: ['veíamos', 'vemos', 'vimos'],
        correctAnswers: ['veíamos'],
        hint: '«ver» բայը Imperfecto-ում պահպանում է «ve-» հիմքը, որին միանում են «-ía» վերջավորությունները։',
        explanation: '«ver» բայը բացառություն է և Imperfecto-ում ունի veía, veías, veía, veíamos, veíais, veían ձևերը՝ պահպանելով «e» տառը։',
        tense: Tense.Imperfecto
      }
    ]
  }
];
