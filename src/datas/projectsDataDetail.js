const projectsDataDetail = [
  {
    title: "Délices Culinaires",
    description: {
      intro:
        "Projet personnel développé en React. Ce site présente une variété de recettes de cuisine.",
      objective:
        "L'objectif principal était de créer une plateforme intuitive et réactive de recettes de cuisine, tout en maîtrisant la gestion d'état avec Redux. Je voulais également concevoir une architecture modulaire avec des composants réutilisables, optimiser les performances de l'application et garantir sa fluidité sur tous les appareils grâce à un design adapté.",
      challenge:
        "La principale difficulté du projet a été de réfléchir à la structure à adopter pour une navigation intuitive de l'utilisateur. La conceptualisation de l'UI/UX m'a demandé une réflexion approfondie, particulièrement dans l'anticipation des besoins et des comportements des utilisateurs. L’outil Figma m’a permis de tester différents prototypes avant d'arriver à la version finale.",
      collaboration: [
        "En travaillant en équipe, et notamment en adoptant des méthodologies comme Agile et Scrum, plusieurs améliorations auraient été possibles pour ce projet.",
        "1. Des revues de code régulières auraient assuré une meilleure qualité grâce aux échanges et au partage de connaissances.",
        "2. La collaboration lors des phases de conception UI/UX aurait apporté différentes perspectives, contribuant à un design plus riche et abouti.",
        "3. En collaborant avec une équipe, nous aurions pu solliciter un éventail plus large d'utilisateurs pour tester le projet, offrant ainsi des retours plus variés.",
        "4. Le partage des tâches aurait accéléré le développement, chaque membre apportant ses compétences spécifiques.",
      ],
      optimizationAndAccessibility:
        "J'ai activement cherché à rendre ce site inclusif en mettant l'accent sur l'accessibilité. En utilisant le Color Contrast Checker de WebAIM, j'ai sélectionné des contrastes de couleurs conformes aux normes WCAG, assurant une meilleure lisibilité pour tous, y compris ceux ayant des troubles de la vision des couleurs.     Comme pour tous les développements la performance est au centre des priorités. Aussi, on utilise le moins de modules et librairies possible.",
    },
    additionalImages: [
      "/assets/delices_culinaires/delice_culinaire_recette.png",
      "/assets/delices_culinaires/delice culinaire_exemple.png",
    ],
    toolsAndTech: [
      "- React & React-Router-Dom: Création et gestion de l'interface utilisateur, y compris la navigation.",
      "- Redux & React-Redux: Gestion centralisée de l'état de l'application.",
      "- Styled-Components: Styling CSS-in-JS pour une conception personnalisée.",
      "- Vite: Outil de développement pour une construction rapide et un développement efficace.",
      "- Figma: Conception et prototypage de l'UI/UX.",
      "- Vercel: Déploiement et hébergement de l'application.",
    ],
    // ... Autres champs que vous voulez ajouter pour les détails
  },

  {
    title: "Clone de la page d'accueil Météo France",
    description: {
      intro:
        "Ce projet consistait à reproduire fidèlement la page d'accueil du site Météo France en utilisant exclusivement HTML et CSS.",
      objective:
        "L'objectif principal de ce projet était de comprendre et de maîtriser les bases fondamentales du développement web. En travaillant sans frameworks ni bibliothèques, j'ai cherché à affiner mes compétences en matière de mise en page, de typographie et de responsivité.",
      challenge:
        "La plus grande difficulté de ce projet a été de reproduire avec précision les différents éléments de design du site original, tout en assurant une compatibilité sur les différents navigateurs et tailles d'écran. Ce défi m'a permis d'approfondir ma compréhension des nuances et subtilités du CSS.",
      collaboration: [
        "Ce projet étant une reproduction individuelle, je n'ai pas travaillé en collaboration avec d'autres. Toutefois, l'apport d'une équipe aurait pu offrir des perspectives différentes sur la mise en page et le design, et m'aurait permis d'apprendre de nouvelles astuces et techniques.",
      ],
      optimizationAndAccessibility: "",
    },
    additionalImages: ["/assets/clone_meteoFrance/meteoFrance_mobile.png"],
    toolsAndTech: [
      "HTML: Structure de base du site et mise en place des éléments principaux.",
      "CSS: Personnalisation, design, et mise en page responsive du site.",
    ],
  },
];

export default projectsDataDetail;
