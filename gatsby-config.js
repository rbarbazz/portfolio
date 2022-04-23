module.exports = {
  siteMetadata: {
    title: 'Raphaël Barbazza',
    titleTemplate: '%s | Projects',
    description: 'My projects',
    socialLinks: {
      github: 'https://github.com/rbarbazz',
      linkedin: 'https://www.linkedin.com/in/raphaelbarbazza',
      website: 'https://raphaelbarbazza.com',
    },
  },
  plugins: [
    'gatsby-plugin-typescript',
    'gatsby-plugin-sass',
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/`,
      },
    },
  ],
}
