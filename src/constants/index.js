import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  coverhunt,
  kelhel,
  microverse,
  movie,
  pascal,
  ivalua,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'A propos',
  },
  {
    id: 'projects',
    title: 'Projets',
  },
  {
    id: 'experience',
    title: 'Experiences',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Ingénieur Études et Développement spécialisé en C#, .NET, et SQL Server.',
    company_name: 'Ivalua',
    icon: ivalua,
    iconBg: '#333333',
    date: 'Oct 2024 - Aujourd\'hui',
    description: 'Poste actuelle, Cela fait 1 an que je travaille en tant que software enginner au sein de l\'équipe SRM. Tous le monde est super sympa et veille à ma montée en compétence. Je travaille sur divers aspect, que ce soit sur la résolution de bugs ou bien sur l\'évolution du logiciel. comme évolution, j\'ai réaliser le refactoring d\'un ancien module plus utilisé et la mise place d\'un filtre pour archiver les fournisseur inactifs au moyen d\'un tag. Ivalua est une entreprise française spécialisée dans les solutions de gestion des achats et des dépenses pour les grandes entreprises. Fondée en 2000, elle propose une plateforme logicielle complète qui aide les organisations à optimiser leurs processus d\'achats, de la gestion des fournisseurs à la facturation. Ivalua est reconnue pour sa flexibilité, permettant aux entreprises de personnaliser leurs solutions en fonction de leurs besoins spécifiques. Elle compte parmi ses clients de grandes multinationales dans divers secteurs, comme l\'automobile, la finance et la technologie.',
  },
  {
    title: 'mentor junior Informatique',
    company_name: 'Montpellier Ynov Campus',
    icon: microverse,
    iconBg: '#333333',
    date: 'Fev 2024 - Jun 2024',
    description: 'De la période de Février a Juin, j\'ai été mentor junior en informatique à Montpellier Ynov Campus. J\'ai aidé les étudiants à résoudre des problèmes de programmation, à comprendre les concepts de base de la programmation et à améliorer leurs compétences en développement web. J\'ai également organisé des ateliers et des séances de tutorat pour les étudiants qui avaient besoin d\'aide supplémentaire. C\'était une expérience enrichissante qui m\'a permis de partager mes connaissances et d\'aider les autres à réussir dans le domaine de l\'informatique.',
  },
  {
    title: 'Developpeur Web front-end',
    company_name: 'Essential Life Services',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aou 2023 - Sep 2023',
    description: 'Durant l\'été de ma première année de bachelor, j\'ai effectué un stage de développement web chez Essential Life Services, une entreprise ivoirienne spécialisée dans les services de d\'hôtellerie et de restauration sur plateforme pétrolière. J\'ai travaillé sur la refonte graphique de leur site web, en utilisant des technologies comme HTML, CSS et Bootstrap. J\'ai également aidé à la création de nouvelles fonctionnalités et à l\'optimisation des performances du site. Ce stage m\'a permis d\'acquérir de l\'expérience dans le développement web et de mettre en pratique mes compétences en programmation.',
  },
  {
    title: 'Licence informatique',
    company_name: 'Montpellier ynov campus',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2022 - Aujourd\'hui',
    description : 'Ma formation actuelle. Durant mes deux premières années, j\'ai acquis des compétences en développement web et en développement logiciel, en utilisant des technologies comme HTML, CSS, JavaScript, React, Node.js, et SQL. J\'ai également appris les principes de la programmation orientée objet, de la conception de bases de données, et de la gestion de projets informatiques. J\'ai travaillé sur plusieurs projets individuels et en équipe, ce qui m\'a permis de développer mes compétences en programmation et de me familiariser avec les bonnes pratiques de développement logiciel.',
  },
  {
    title: 'Licence en électronique, électrotechnique et automatisation',
    company_name: 'Universite des sciences de Montpellier',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2020 - Jul 2022',
    description : 'J\'ai effectué mes deux premières années dans le supérieur à l\'université des sciences de Montpellier. J\'ai étudié l\'électronique, l\'électrotechnique et l\'automatisation, en apprenant les principes de base de l\'électricité, de l\'électronique, et de l\'automatisation. J\'ai malheuresement échoué deux fois de suite ma première année mais j\'ai pu me constituer une base solide pour la suite de mes études notamment grâce aux cours d\'algorithmique et de programmation et et de programmation impérative que j\'ai pu suivre.',
  },
];

const projects = [
  {
    name: "Portfolio React",
    description: "Mon portfolio personnel développé avec React, Tailwind CSS et Framer Motion. Il présente mes projets, expériences et compétences avec un design moderne et des animations fluides.",
    tags: [
      {
        name: "react",
        color: "from-blue-400 to-blue-600",
      },
      {
        name: "tailwind",
        color: "from-cyan-400 to-blue-500",
      },
      {
        name: "framer-motion",
        color: "from-purple-400 to-pink-500",
      },
    ],
    image: komikult, // Utilisez une image existante ou ajoutez votre image
    source_code_link: "https://github.com/LeYapson/portfolio",
  },
  {
    name: "Application de Gestion", 
    description: "Application de gestion développée en C# et .NET avec base de données SQL Server. Interface utilisateur moderne avec fonctionnalités CRUD complètes.",
    tags: [
      {
        name: "csharp",
        color: "from-purple-500 to-blue-600",
      },
      {
        name: "dotnet",
        color: "from-blue-500 to-purple-600",
      },
      {
        name: "sql-server",
        color: "from-orange-400 to-red-500",
      },
    ],
    image: leaderboard, // Utilisez une image existante ou ajoutez votre image
    source_code_link: "https://github.com/LeYapson/gestion-app",
  },
  {
    name: "Jeu Godot",
    description: "Jeu 2D développé avec le moteur Godot, incluant système de score, animations et effets sonores. Mécaniques de jeu fluides et interface utilisateur intuitive.",
    tags: [
      {
        name: "godot",
        color: "from-blue-500 to-purple-600",
      },
      {
        name: "gdscript",
        color: "from-green-400 to-blue-500",
      },
      {
        name: "gamedev",
        color: "from-pink-400 to-red-500",
      },
    ],
    image: math, // Utilisez une image existante ou ajoutez votre image
    source_code_link: "https://github.com/LeYapson/godot-game",
  },
];

export { services, technologies, experiences, projects };
