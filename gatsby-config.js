module.exports = {
  pathPrefix: '/it-basis',
  siteMetadata: {
    siteUrl: 'https://samo1et.github.io/it-basis'
  },
  plugins: [
    'gatsby-plugin-top-layout',
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', Disallow: '/' }]
      }
    },
    'gatsby-plugin-react-helmet',
  ]
};
