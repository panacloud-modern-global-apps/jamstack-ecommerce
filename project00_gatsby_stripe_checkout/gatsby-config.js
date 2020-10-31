/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  /* Your site config here */
    plugins: [
      {
        resolve: `gatsby-source-stripe`,
        options: {
          objects: ["Price"],
          secretKey: process.env.STRIPE_SECRET_KEY,
          downloadFiles: false,
        },
      },

  ],
}
