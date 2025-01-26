type ExperienceStep = {
  name?: string;
  description: string[];
};

export type ExperienceType = {
  level: number;
  name: string;
  description: string;
  steps: ExperienceStep[];
};

export const data: ExperienceType[] = [
  {
    level: 1,
    name: "Eu cu mine",
    description:
      "Este format din 4 experiențe unice menite să te ducă pas cu pas mai aproape de... tine. Întâlnirile sunt lunare și abordează o tematică nouă de fiecare dată.",
    steps: [
      {
        name: "Primul pas în dezvoltare",
        description: [
          "Introducere în dezvoltare personală- ce este și cum mă ajută în viața de zi cu zi, relații, familie, carieră și cuplu",
          "Cunoaștere - exerciții și jocuri pentru coeziunea grupului de lucru",
          "Principii sanogene în dezvoltarea personală  1.0 - Tu",
          "Autocunoaştere - tennici și exerciții pentru descoperirea de sine",
          "Instrumente și metode de introspecție",
          "Resursele interioare. Accesarea voluntară a resurselo interioare la nevoie",
        ],
      },
      {
        name: "Cu și despre emoții",
        description: [
          "Inteligența emoțională - ce sunt emoțiile și ce rol au?",
          "Reglarea emoținală - ...și ce facem cu ele?",
          "Empatia",
          "Aplicabilitatea integinței emoționale în diferite arii ale vieții",
        ],
      },
      {
        name: "Dincolo de gânduri",
        description: [
          "Conștient vs. Inconștient și cum comunicăm cu fiecare",
          "Mecanisme de apărare - ce sunt și cum apar, cu ce ne ajută și cum ne încurcă",
          "Persoană, personalitate și personaj",
          "Ego - prieten sau dușman?",
          "Stiluri de atașament, trăsături de personalitate și...cine ești tu de fapt?",
        ],
      },
      {
        name: "Integrare",
        description: [
          "Exerciții recapitulative și integrarea cunoștințelor și abilităților dobândite în toate ariile vieții",
          "Restructurare comportamentală - cum vei face de acum înainte?",
          "Feedback, evaluarea cursului",
          "Susținerea probei practice 😉",
        ],
      },
    ],
  },
  {
    level: 2,
    name: "Eu și ceilalți",
    description:
      "Este format din 4 experiențe unice menite să te ducă pas cu pas mai aproape de... cei din jurul tău. Întâlnirile sunt lunare și abordează o tematică nouă de fiecare dată.",
    steps: [
      {
        name: "Arta Comunicării",
        description: [
          "Exerciții și jocuri pentru coeziunea grupului de lucru",
          'Gândire critică, dialogul socratic, comunicare sau "arta de a pune întrebări"',
          "Rapportul - metoda de conectare cu interlocutorul care va schimba felul în care comunici",
        ],
      },
      {
        name: "Secretele comunicării",
        description: [
          "Principii sanogene în dezvoltarea personală 2.0 - cum și de ce suntem diferiți",
          "Asertivitatea și comunicarea non-violentă",
          "Dinamica conflictelor - patternuri în conflicte și cum contribuim la ele",
          "Rezolvarea conflictelor anterioare",
          "Prevenirea conflictelor viitoare",
        ],
      },
      {
        name: "Arta Iubirii",
        description: [
          "Iubire, dragoste, cuplu și puțină chimie",
          "Aplicarea tehnicilor învățate în relația de cuplu",
          "Comunicarea sanogenă în cuplu. Relația sătoasă vs. Relația de cuplu",
          "Manipularea și cum o identificăm",
        ],
      },
      {
        name: "Integrare",
        description: [
          "Exerciții recapitulative și integrarea cunoștințelor și abilităților dobândite în toate ariile vieții",
          "Restructurare comportamentală - cum vei face de acum înainte?",
          "Feedback, evaluarea cursului",
          "Susținerea probei practice 😉",
        ],
      },
    ],
  },
  {
    level: 3,
    name: "Eu, în lume și în viață",
    description:
      "Este format din 4 experiențe unice menite să te ducă pas cu pas mai aproape de... eul tău autentic în raport cu misiunea vieții tale. Întâlnirile sunt lunare și abordează o tematică nouă de fiecare dată.",
    steps: [
      {
        name: "Între Vis și Realitate",
        description: [
          "Exerciții și jocuri pentru coeziunea grupului de lucru",
          "Visul creator - motorul vieții. Care este misiunea ta?",
          "Setarea și utilizarea corectă a obiectivelor",
          "Construirea motivației  necesară pentru atingerea obiectivelor",
        ],
      },
      {
        name: "Strategii de viață",
        description: [
          "Principii sanogene ale dezvoltării personale 3.0 - Intenția",
          "Tehnica pentru identificarea motivelor profunde din spatele comportamentelor",
          "Strategii pentru a face față provocărilor și cum transformi obstacole în oportunități",
        ],
      },
      {
        name: "Valori și principii",
        description: [
          "Exerciții pentru identifcarea valorilor de viață, conștientizarea acestora și integrarea noilor valori",
          "Convigerile limitative și tehnici pentru identificarea acestora",
          "Tranformarea convingerilor și valorilor în cel mai puternic avantaj al tău!",
        ],
      },
      {
        name: "Integrare",
        description: [
          "Exerciții recapitulative și integrarea cunoștințelor și abilităților dobândite în toate ariile vieții",
          "Restructurare comportamentală - cum vei face de acum înainte?",
          "Feedback, evaluarea cursului",
          "Susținerea probei practice 😉",
        ],
      },
    ],
  },
];
