import blog from '../public/blog.png';
import caimito from '../public/caimito.png';
import invaders from '../public/invaders.png';
import letchat from '../public/letchat.png';
import mentor from '../public/mentor.png';
import metaverve from '../public/metaverse.png';
import portfolio from '../public/portfolio.png';
import restaurant from '../public/restaurant.png';
import vegan from '../public/vegan.png';

const projectsData = [
  {
    imgUrl: portfolio,
    title: 'Old Portfolio',
    text: 'First Portfolio made with React and Sass, I learn a lot from this project and I will keep it as a memory of my first steps in the web development world.',
    live: 'https://react-portafolio-two.vercel.app/',
    gitHub: 'https://github.com/lakorthus',
    span: ['React', 'Css', 'JavaScript', 'Firebase'],
  },
  {
    imgUrl: invaders,
    title: 'Space Invaders',
    text: 'Space Invaders is a game made with javascript, I used the canvas element to make this game.',
    live: 'https://space-invaders-five.vercel.app/',
    gitHub:
      'https://github.com/Lakorthus/games-projects/tree/master/SpaceInvaders',
    span: ['JavaScript', 'Canvas'],
  },
  {
    imgUrl: caimito,
    title: 'Caimito',
    text: 'Caimito, like the exotic fruit from South America is a personal project to make Sass easy, fun and customisable. Feel free to modify this file to send me a pull request to improve the library.',
    live: 'https://sass-easy.vercel.app/',
    gitHub: 'https://github.com/Lakorthus/sass-easy',
    span: ['React', 'Gulp', 'SCss', 'Responsive Design'],
  },
  {
    imgUrl: vegan,
    title: 'La Vegan Loca',
    text: 'Freelance project for a vegan agency, this is a figma design to code project, I used Next.js and TailwindCSS to make this project.',
    gitHub: 'https://github.com/lakorthus',
    span: ['Figma', 'Cypress', 'TypeScript', 'TailwindCSS', 'Jest'],
  },
  {
    imgUrl: letchat,
    title: 'LetChat',
    text: 'LetChat is a platform aimed to improve communication between Landlords and Tenants. Built in a Team of 5, we used Next.js, React, FireBase, Sql, TypeScript and TailwindCSS to make this project.',
    live: 'https://letchat.co.uk',
    gitHub: 'https://github.com/Lakorthus/bc13_final-project_front-end-git-gud',
    span: [
      'React',
      'Next.js',
      'TypeScript',
      'FireBase',
      'SQl',
      'Jest',
      'Cypress',
    ],
  },
  {
    imgUrl: metaverve,
    title: 'Project Metarvese',
    text: 'This project is a personal project to learn Framer Motion, I used React and TailwindCSS to make this project.',
    gitHub: 'https://github.com/Lakorthus/project-metaverse',
    span: ['React', 'Framer Motion', 'TailwindCSS'],
  },
  {
    imgUrl: blog,
    title: 'Sanity Blog',
    text: 'This is a blog made with Next.js and TailwindCSS, I used the CMS Sanity to make this project.',
    live: 'https://port-blog-ten.vercel.app/',
    gitHub: 'https://github.com/Lakorthus/port-blog',
    span: ['Next.js', 'TailwindCSS', 'Sanity'],
  },
  {
    imgUrl: restaurant,
    title: 'Restaurant Website',
    text: 'This is a restaurant website made with Sass, I used the BEM methodology to make this project.',
    live: 'https://open-class-projects.vercel.app/',
    gitHub:
      'https://github.com/Lakorthus/open-class-projects/tree/main/project3-ohmyfood-EN',
    span: ['Html', 'Css', 'Sass', 'BEM'],
  },
  {
    imgUrl: mentor,
    title: 'Frontend Mentor',
    text: 'Frontend Mentor is a platform to improve your skills in Frontend Development, I used html, css and javascript to make all the projects in this page.',
    live: 'https://frontend-mentor-challenge-omega.vercel.app/',
    gitHub: 'https://github.com/Lakorthus/FrontendMentorChallenge',
    span: ['Html', 'Css', 'JavaScript'],
  },
];

export default projectsData;
