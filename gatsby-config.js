module.exports = {
  siteMetadata: {
    title: 'Raphaël Barbazza',
    titleTemplate: '%s | Full Stack Developer',
    description:
      'Full Stack Developer, based in Vancouver, BC. I mainly work with React and Node.',
    socialLinks: {
      github: 'https://github.com/rbarbazz',
      linkedin: 'https://www.linkedin.com/in/raphaelbarbazza/',
      email: 'mailto:raphael.barbazza@gmail.com',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      },
    },
  ],
}
