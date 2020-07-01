/**
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 * @summary   The layout for the landing page
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';

import type { FC } from 'react';

import type { LandingLayoutQuery } from '@graphql';

export const Landing: FC = (props) => {
  const data = useStaticQuery<LandingLayoutQuery>(
    graphql`
      query LandingLayout {
        site {
          siteMetadata {
            title
          }
        }
      }
    `,
  );

  return (
    <React.StrictMode>
      <h1>{data.site?.siteMetadata?.title ?? 'Default Title'}</h1>
      {props.children}
    </React.StrictMode>
  );
};

Landing.displayName = 'Layout';
