import { AnnotatedText, Tense } from './types';

export const textsData: AnnotatedText[] = [
  {
    id: 1,
    title: 'Տեքստ 1. Un viaje reciente a Barcelona (Վերջերս կատարած ճանապարհորդություն դեպի Բարսելոնա)',
    description: 'Այս տեքստում նկարագրվում են այս ամսվա ընթացքում կատարած վերջին ուղևորության իրադարձությունները (Pretérito Perfecto)՝ համակցված քաղաքի մթնոլորտի և եղանակի նկարագրությամբ (Pretérito Imperfecto)։ Սեղմեք ընդգծված բառերի վրա՝ դրանց քերականական վերլուծությունը տեսնելու համար, կամ սեղմեք նախադասությունների վրա՝ դրանց հայերեն թարգմանությունը տեսնելու համար։',
    paragraphs: [
      {
        sentences: [
          {
            text: 'Este mes yo {he viajado} a Barcelona con mis amigos.',
            translationArm: 'Այս ամիս ես իմ ընկերների հետ ճանապարհորդել եմ Բարսելոնա։'
          },
          {
            text: 'La ciudad {era} maravillosa y {hacía} un clima muy agradable todos los días.',
            translationArm: 'Քաղաքը հրաշալի էր, և ամեն օր շատ հաճելի եղանակ էր տիրում։'
          }
        ],
        annotations: [
          {
            word: 'he viajado',
            infinitive: 'viajar',
            tense: Tense.Perfecto,
            translation: 'ես ճանապարհորդել եմ / գնացել եմ',
            reason: 'Օգտագործվում է Pretérito Perfecto, քանի որ գործողությունը տեղի է ունեցել դեռ չավարտված ժամանակահատվածում («este mes» — այս ամսին)։'
          },
          {
            word: 'era',
            infinitive: 'ser',
            tense: Tense.Imperfecto,
            translation: 'կար / հրաշալի էր',
            reason: 'Օգտագործվում է Pretérito Imperfecto, քանի որ նկարագրում ենք անցյալում քաղաքի մշտական հատկանիշը (հրաշալի էր)։'
          },
          {
            word: 'hacía',
            infinitive: 'hacer',
            tense: Tense.Imperfecto,
            translation: 'եղանակը (լավն) էր / տիրում էր',
            reason: 'Օգտագործվում է Pretérito Imperfecto անցյալում եղանակի ֆոնային վիճակը նկարագրելու համար («hacía un clima...»)։'
          }
        ]
      },
      {
        sentences: [
          {
            text: 'Nosotros {hemos visitado} la Sagrada Familia y {hemos comido} una paella deliciosa cerca del mar.',
            translationArm: 'Մենք այցելել ենք Սագրադա Ֆամիլիա (Սուրբ Ընտանիքի տաճար) և ծովի մոտ համտեսել համեղ պաելյա։'
          },
          {
            text: 'Antes, yo no {conocía} este templo, pero siempre {quería} verlo.',
            translationArm: 'Նախկինում ես այս տաճարին ծանոթ չէի, բայց միշտ ցանկանում էի տեսնել այն։'
          }
        ],
        annotations: [
          {
            word: 'hemos visitado',
            infinitive: 'visitar',
            tense: Tense.Perfecto,
            translation: 'մենք այցելել ենք',
            reason: 'Ավարտված գործողություն այս ամսվա վերջին ուղևորության շրջանակներում։'
          },
          {
            word: 'hemos comido',
            infinitive: 'comer',
            tense: Tense.Perfecto,
            translation: 'մենք կերել ենք',
            reason: 'Որոշակի ավարտված գործողություն՝ կապված ներկա կյանքի փորձի հետ։'
          },
          {
            word: 'conocía',
            infinitive: 'conocer',
            tense: Tense.Imperfecto,
            translation: 'չգիտեի / ծանոթ չէի',
            reason: 'Օգտագործվում է Imperfecto անցյալում նախկին տևական մտավոր վիճակը նկարագրելու համար (ես չգիտեի / չէի ճանաչում այս տաճարը)։'
          },
          {
            word: 'quería',
            infinitive: 'querer',
            tense: Tense.Imperfecto,
            translation: 'ցանկանում էի',
            reason: 'Տևական ցանկություն անցյալում՝ առանց հստակ ժամանակային սահմանների նշման։'
          }
        ]
      },
      {
        sentences: [
          {
            text: 'Hoy {he escrito} una carta a mis padres sobre el viaje.',
            translationArm: 'Այսօր ես նամակ եմ գրել ծնողներիս ճանապարհորդության մասին։'
          },
          {
            text: '¡{Ha sido} una experiencia fenomenal!',
            translationArm: 'Դա ֆանտաստիկ փորձառություն էր։'
          }
        ],
        annotations: [
          {
            word: 'he escrito',
            infinitive: 'escribir',
            tense: Tense.Perfecto,
            translation: 'ես գրել եմ',
            reason: 'Գործողությունը տեղի է ունեցել այսօր («hoy»), ժամանակահատվածը չի ավարտվել։ «escribir» բայն ունի անկանոն դերբայ՝ «escrito»։'
          },
          {
            word: 'Ha sido',
            infinitive: 'ser',
            tense: Tense.Perfecto,
            translation: 'դա եղել է',
            reason: 'Տրվում է կյանքի վերջին իրադարձության գնահատականը, որի արդյունքը ներկայացվում է ներկա պահին։'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: 'Տեքստ 2. Recuerdos de mi infancia y mi pueblo hoy (Մանկության հուշերը և իմ գյուղն այսօր)',
    description: 'Այս տեքստում նկարագրվում են մանկության սովորությունները (Pretérito Imperfecto) և այս շաբաթվա վերջին օրերին տեղի ունեցած իրադարձությունները, երբ հերոսը տարիներ անց վերադարձել է հայրենի տուն (Pretérito Perfecto)։ Սեղմեք նախադասությունների վրա՝ դրանց հայերեն թարգմանությունը տեսնելու համար։',
    paragraphs: [
      {
        sentences: [
          {
            text: 'Cuando {era} niño, yo {vivía} en un pueblo muy tranquilo en el norte de España.',
            translationArm: 'Երբ երեխա էի, ես ապրում էի Իսպանիայի հյուսիսում գտնվող մի շատ հանգիստ գյուղում։'
          },
          {
            text: 'Todos los veranos mis amigos y yo {íbamos} al río y {jugábamos} todo el día sin preocuparnos de nada.',
            translationArm: 'Ամեն ամառ ընկերներով գնում էինք գետի մոտ և ամբողջ օրը խաղում էինք՝ առանց որևէ բանի մասին անհանգստանալու։'
          }
        ],
        annotations: [
          {
            word: 'era',
            infinitive: 'ser (անկանոն)',
            tense: Tense.Imperfecto,
            translation: 'ես երեխա էի',
            reason: 'Մանկության ժամանակաշրջանի դասական ներկայացումը («Cuando era niño»)՝ անցյալ կյանքի փուլերի նկարագրություն։'
          },
          {
            word: 'vivía',
            infinitive: 'vivir',
            tense: Tense.Imperfecto,
            translation: 'ես ապրում էի',
            reason: 'Անցյալում երկարատև գործողություն-վիճակ՝ առանց սկզբի և վերջի հստակ սահմանների։'
          },
          {
            word: 'íbamos',
            infinitive: 'ir (անկանոն)',
            tense: Tense.Imperfecto,
            translation: 'մենք գնում էինք',
            reason: 'Կրկնվող գործողություն («todos los veranos» — ամեն ամառ)։ «ir» բայը բացառություն է Imperfecto-ում։'
          },
          {
            word: 'jugábamos',
            infinitive: 'jugar',
            tense: Tense.Imperfecto,
            translation: 'մենք խաղում էինք',
            reason: 'Պարբերական սովորություն և անցյալում մանկական ֆոնային զբաղմունք։'
          }
        ]
      },
      {
        sentences: [
          {
            text: 'El paisaje {estaba} lleno de árboles verdes y las casas {eran} de piedra.',
            translationArm: 'Բնապատկերը լի էր կանաչ ծառերով, իսկ տները քարից էին։'
          },
          {
            text: 'Yo {tenía} un perro que siempre me {seguía} a todas partes.',
            translationArm: 'Ես մի շուն ունեի, որը միշտ ինձ հետևում էր ամենուր։'
          }
        ],
        annotations: [
          {
            word: 'estaba',
            infinitive: 'estar',
            tense: Tense.Imperfecto,
            translation: 'լի էր / ծածկված էր (լանդշաֆտը)',
            reason: 'Անցյալում բնության (լանդշաֆտի) տեսքի և վիճակի նկարագրություն։'
          },
          {
            word: 'eran',
            infinitive: 'ser (անկանոն)',
            tense: Tense.Imperfecto,
            translation: 'քարից էին / կառուցված էին',
            reason: 'Անցյալում առարկաների (տների) հատկանիշների նկարագրություն։ «ser» բայը անկանոն է։'
          },
          {
            word: 'tenía',
            infinitive: 'tener',
            tense: Tense.Imperfecto,
            translation: 'ես ունեի (շուն ունեի)',
            reason: 'Մանկության տարիներին որևէ բան ունենալու նկարագրություն («ես շուն ունեի»)։'
          },
          {
            word: 'seguía',
            infinitive: 'seguir',
            tense: Tense.Imperfecto,
            translation: 'հետևում էր ինձ / գալիս էր հետևիցս',
            reason: 'Մանկության տարիներին շան կողմից կրկնվող ուղեկցող գործողություն։'
          }
        ]
      },
      {
        sentences: [
          {
            text: 'Pero esta semana {he vuelto} al pueblo después de muchos años.',
            translationArm: 'Բայց այս շաբաթ ես երկար տարիներ անց վերադարձա տուն։'
          },
          {
            text: '¡Todo {ha cambiado} un poco!',
            translationArm: 'Ամեն ինչ մի փոքր փոխվել է։'
          },
          {
            text: 'Sin embargo, hoy {he visto} a mi amigo de infancia y nosotros {hemos hablado} durante horas.',
            translationArm: 'Այնուամենայնիվ, այսօր ես տեսա մանկությանս ընկերոջը, և մենք ժամերով զրուցեցինք։'
          }
        ],
        annotations: [
          {
            word: 'he vuelto',
            infinitive: 'volver',
            tense: Tense.Perfecto,
            translation: 'ես վերադարձել եմ',
            reason: 'Գործողությունը կատարվել է այս շաբաթ («esta semana» — դեռ չավարտված ժամանակաձև)։ «volver» բայն ունի անկանոն դերբայ՝ «vuelto»։'
          },
          {
            word: 'ha cambiado',
            infinitive: 'cambiar',
            tense: Tense.Perfecto,
            translation: 'ամեն ինչ փոխվել է',
            reason: 'Իրադարձությունը տեղի է ունեցել մինչև ներկա պահը, և մենք տեսնում ենք դրա հետևանքները իրականությունում։'
          },
          {
            word: 'he visto',
            infinitive: 'ver',
            tense: Tense.Perfecto,
            translation: 'ես տեսել եմ',
            reason: 'Կոնկրետ գործողությունը կատարվել է այսօր («hoy»)։ «ver» բայն ունի անկանոն դերբայ՝ «visto»։'
          },
          {
            word: 'hemos hablado',
            infinitive: 'hablar',
            tense: Tense.Perfecto,
            translation: 'մենք խոսել ենք',
            reason: 'Զրույցը տեղի է ունեցել այսօրվա ընթացքում («hoy»), գործողությունը վերջերս է ավարտվել։'
          }
        ]
      }
    ]
  }
];
