module.exports = {
  siteMetadata: {
    title: 'Raphaël Barbazza',
    titleTemplate: '%s | Full Stack Developer',
    description: 'Full Stack Developer, based in Vancouver, BC. I mainly work with React and Node.',
    socialLinks: {
      github: 'https://github.com/rbarbazz',
      linkedin: 'https://www.linkedin.com/in/raphaelbarbazza/',
      email: 'mailto:raphael.barbazza@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        trackingId: `UA-150391065-1`,
        head: true,
        anonymize: false,
      },
    },
  ],
};
