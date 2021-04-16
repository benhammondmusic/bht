import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Ben Hammond | Denver Developer',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Coding Projects Portfolio',
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm",
  name: 'Ben Hammond',
  subtitle: `(Denver Dev && Song Builder)`,
  cta: 'Learn More',
};

// ABOUT DATA
// this data is hard-coded in <About> jsx
export const aboutData = {
  img: 'ben-headphones-square.jpg',
  paragraphOne: `Denver Developer | JavaScript | React | Node | Python`,
  paragraphTwo: ``,
  paragraphThree: ``,
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
    info: 'JavaScript Artillery Game',
    info2:
      'Animated JS game using JQuery and HTML Canvas; built in one week. Incorporated programmatically generated terrain and collision detection / destruction, gravity, scalable multiplayer mode, and responsive design.',
    url: 'https://benhammondmusic.github.io/tanks',
    repo: 'https://github.com/benhammondmusic/benhammondmusic.github.io/tree/main/tanks',
    blogPost: 'https://blog.benhammond.tech/tanks',
  },
  {
    id: nanoid(),
    img: 'family-friendly-header.png',
    title: 'Family Friendly',
    info: 'Crowd-sourced changing table locations for caregivers of all genders',
    info2: `Delegates and restricts users' CRUD permissions with OAuth2; plots user location and data with a Map API; integrates a deployed MongoDB Atlas NoSQL database; internally operates a RESTful API backend in Node/Express with EJS templating`,
    url: 'https://benhammond-familyfriendly.herokuapp.com/',
    repo: 'https://github.com/benhammondmusic/familyfriendly',
    blogPost: 'https://blog.benhammond.tech/familyfriendly',
  },
  {
    id: nanoid(),
    img: 'GigUploader-code.png',
    title: 'GigUploader',
    info: 'Boost music promotion with Python',
    info2: `Automate gig promotion by programmatically submitting to multiple online event services. User inputs details into a local .xls spreadsheet, and the data is uploaded publicly to Songkick, BandsInTown, Strumsy, and privately to Dubsado. Further integration propagates this information to Spotify, Google, a user's Google Calendar, and many more locations.`,
    repo: 'https://github.com/benhammondmusic/giguploader',
    blogPost: 'https://blog.benhammond.tech/giguploader',
  },
];

// // CONTACT DATA
// export const contactData = {
//   cta: 'Would You Like To Build Something Together?',
//   btn: 'Email Me',
//   email: 'hello@benhammond.tech',
// };

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
