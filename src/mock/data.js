import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ben Hammond | Software Develop && Song Builder',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Coding Projects Portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hi, I'm",
  name: 'Ben Hammond',
  subtitle: `I'm A Denver Developer and Song Builder`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'ben-headphones-square.jpg',
  paragraphOne: '1',
  paragraphTwo: '2',
  paragraphThree: '3',
  resume:
    'https://docs.google.com/document/d/1nYJf1ZjGetUo8lFbwoyf23prkTw-0H_HiqvMKlY5_nw/edit?usp=sharing',
};

// PROJECTS DATA
// Important Note: All the images must live inside the src/images/ folder in order for Gatsby to show the images correctly.
export const projectsData = [
  {
    id: nanoid(),
    img: 'tanks.png',
    title: 'Tanks!',
    info: 'In-Browser Artillery Game',
    info2:
      'Multiplayer, animated artillery game in JavaScript, JQuery, and HTML Canvas; built in one week. Incorporated programmatically generated terrain and destruction when collision detected, gravity for tank placement, scalable multiplayer mode, and responsive, accessible design.',
    url: 'https://benhammondmusic.github.io/tanks',
    repo: 'https://github.com/benhammondmusic/benhammondmusic.github.io/tree/main/tanks',
  },
  {
    id: nanoid(),
    img: 'family-friendly-header.png',
    title: 'Family Friendly',
    info: 'Plots crowd-sourced baby changing table locations for caregivers of all genders',
    info2: `Delegates and restricts users' CRUD permissions with OAuth2; uses JavaScript Map API to plot user location and data points; integrates a deployed MongoDB Atlas NoSQL database; internally operates on a RESTful API backend in Node and Express with EJS templating`,
    url: 'https://benhammond-familyfriendly.herokuapp.com/',
    repo: 'https://github.com/benhammondmusic/familyfriendly',
  },
  {
    id: nanoid(),
    img: 'GigUploader-code.png',
    title: '',
    info: '',
    info2: '',
    url: 'https://blog.benhammond.tech/giguploader',
    repo: 'https://github.com/benhammondmusic/giguploader',
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would You Like To Work Together?',
  btn: 'Email Me',
  email: 'benjamin.hammond@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/benhammondmusic',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/benhammondmusic/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/benhammondmusic/',
    },
    {
      id: nanoid(),
      name: 'code',
      url: 'https://blog.benhammond.tech',
    },
    {
      id: nanoid(),
      name: 'music',
      url: 'https://www.benhammondmusic.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
