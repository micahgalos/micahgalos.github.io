module.exports = {
  siteTitle: ' Micah Galos | Recent Graduate ',
  siteDescription:
    'Micah Galos is recent graduate at UCR, actively looking for software engineering positions.',
  siteKeywords:
    'Micah Galos, Micah, Galos, micahgalos',
  siteUrl: 'https://micahgalos.github.io/',
  siteLanguage: 'en_US',
  googleAnalyticsID: 'UA-230893048-1',
  googleVerification: '87MSri6ugOnOiGKDmKGjBO5LJdWVZRCU2NmXGBHSzyY',
  name: 'Micah Galos',
  location: 'Riverside, California',
  email: 'micahzugalos@gmail.com',
  github: 'https://github.com/micahgalos',
  twitterHandle: '@micahgalos',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/micahgalos',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/micahgalos/',
    },
    /*{
      name: 'Codepen',
      url: 'https://codepen.io/micahgalos',
    },*/
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/micahgalos',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/micahgalos',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
