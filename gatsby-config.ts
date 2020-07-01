/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Specify the configuration for Gatsby.
 *
 *            See https://www.gatsbyjs.org/docs/gatsby-config
 *            for detailed usage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import type { GatsbyConfig } from 'gatsby';

// export const siteMetadata: GatsbyConfig['siteMetadata'] = {};

// export const plugins: GatsbyConfig['plugins'] = [];

// export const pathPrefix: GatsbyConfig['pathPrefix'] = '';

// export const polyfill: GatsbyConfig['polyfill'] = true;

// export const mapping: GatsbyConfig['mapping'] = {};

// export const proxy: GatsbyConfig['proxy'] = {};

// export const developMiddleware: GatsbyConfig['developMiddleware'] = middleware => {};

export const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: `A Gatsby Web App`,
};

export const plugins: GatsbyConfig['plugins'] = [
  'gatsby-plugin-react-helmet',
  {
    resolve: `gatsby-plugin-graphql-codegen`,
    options: {
      fileName: `./types/@graphql.ts`,
    },
  },
];

export default {
  siteMetadata,
  plugins,
};
