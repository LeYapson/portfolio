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
    date: 'Jun 2024 - Aujourd\'hui',
  },
  {
    title: 'mentor junior Informatique',
    company_name: 'Montpellier Ynov Campus',
    icon: microverse,
    iconBg: '#333333',
    date: 'Fev 2024 - Jun 2024',
  },
  {
    title: 'Developpeur Web front-end',
    company_name: 'Essential Life Services',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aou 2023 - Sep 2023',
  },
  {
    title: 'Licence informatique',
    company_name: 'Montpellier ynov campus',
    icon: microverse,
    iconBg: '#333333',
    date: 'Sep 2022 - Aujourd\'hui',
  },
  {
    title: 'Licence en électronique, électrotechnique et automatisation',
    company_name: 'Universite des sciences de Montpellier',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Sep 2020 - Jul 2022',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'Car With A Gun',
    description: 'Un jeu top-down shooter construit avec godot et gdscript.',
    tags: [
      {
        name: 'godot',
        color: 'blue-text-gradient',
      },
      {
        name: 'gdscript',
        color: 'green-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/LeYapson/Car_With_A_Gun',
  },
  {
    id: 'project-2',
    name: 'Pascal BOT',
    description: 'Un bot discord de modération et de quiz construit avec python et discord.py.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'discord',
        color: 'green-text-gradient',
      },
    ],
    image: pascal,
    repo: 'https://github.com/LeYapson/PASCAL_BOT_V1.0',
  },
  {
    id: 'project-3',
    name: 'Abdel Run',
    description:
      'Un jeu de défilement infini construit avec golang et raylib-go.',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient',
      },
      {
        name: 'raylib-go',
        color: 'green-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/LeYapson/Abdel_Run',
  },
  {
    id: 'project-4',
    name: 'Forynov',
    description: 'Il s\'agit d\'un site de forum construit avec golang, SqLite et bootstrap.',
    tags: [
      {
        name: 'golang',
        color: 'blue-text-gradient',
      },
      {
        name: 'sqlite',
        color: 'green-text-gradient',
      },
      {
        name: 'bootstrap',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/LeYapson/forynov',
  },
  {
    id: 'project-5',
    name: 'Elifes',
    description: 'stage de développement web pour la refonte graphique du site web de l\'entreprise',
    tags: [
      {
        name: 'Bootstrap',
        color: 'blue-text-gradient',
      },
      {
        name: 'HTML',
        color: 'green-text-gradient',
      },
      {
        name: 'CSS',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/LeYapson/portfolio/blob/main/src/components/files/StageElife.pdf',
  },
];

export { services, technologies, experiences, projects };
