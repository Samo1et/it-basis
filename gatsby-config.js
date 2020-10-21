module.exports = {
  pathPrefix: '/it-basis',
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

    'gatsby-plugin-react-helmet',
  ],
  siteMetadata: {
    title: 'My page',
  },
};
