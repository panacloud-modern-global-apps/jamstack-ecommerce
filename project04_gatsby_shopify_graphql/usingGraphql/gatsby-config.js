/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config();
module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-shopify`,
      options: {
        // The domain name of your Shopify shop.
        shopName: process.env.SHOP_NAME,
        // The storefront access token
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
  ],
}
