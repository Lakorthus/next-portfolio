import caimito from '../public/caimito.png';
import metaverve from '../public/frame.png';
import letchat from '../public/letchat.png';
import portfolio from '../public/portfolio.png';
import vegan from '../public/vegan.png';

const projectsData = [
  {
    imgUrl: portfolio,
    title: 'Old Portfolio',
    text: 'Project text',
    live: 'https://react-portafolio-two.vercel.app/',
    gitHub: 'https://github.com/lakorthus',
    span: ['React', 'Css', 'JavaScript', 'Firebase'],
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
    text: 'Project text',
    gitHub: 'https://github.com/lakorthus',
    span: ['Figma', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    imgUrl: letchat,
    title: 'LetChat',
    text: 'Project text',
    live: 'https://github.com/Lakorthus/bc13_final-project_front-end-git-gud',
    gitHub: 'https://letchat.co.uk',
    span: ['React', 'Next.js', 'TypeScript', 'TailwindCSS'],
  },
  {
    imgUrl: metaverve,
    title: 'Project Metarvese',
    text: 'Project text',
    gitHub: 'https://github.com/Lakorthus/project-metaverse',
    span: ['React', 'Framer Motion', 'TailwindCSS'],
  },
];

export default projectsData;
