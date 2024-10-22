/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Define actions to be loaded in the clients' browser.
 *
 *            See https://www.gatsbyjs.org/docs/browser-apis
 *            for detailed usage.
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { Auth0Provider } from '@auth0/auth0-react';
import { navigate } from 'gatsby';
import React from 'react';

import type { GatsbyBrowser } from 'gatsby';

// export const disableCorePrefetching: GatsbyBrowser['disableCorePrefetching'] = (): boolean => {};

// export const onClientEntry: GatsbyBrowser['onClientEntry'] = (): void => {}

// export const onInitialClientRender: GatsbyBrowser['onInitialClientRender'] = (): void => {};

// export const onPrefetchPathname: GatsbyBrowser['onPrefetchPathname'] = (parameters): void => {};

// export const onPreRouteUpdate: GatsbyBrowser['onPreRouteUpdate'] = (parameters): void => {};
// export const onRouteUpdate: GatsbyBrowser['onRouteUpdate'] = (parameters): void => {};
// export const onRouteUpdateDelayed: GatsbyBrowser['onRouteUpdateDelayed'] = (parameters): void => {};

// export const onServiceWorkerActive: GatsbyBrowser['onServiceWorkerActive'] = (parameters): void => {};
// export const onServiceWorkerInstalled: GatsbyBrowser['onServiceWorkerInstalled'] = (parameters): void => {};
// export const onServiceWorkerRedundant: GatsbyBrowser['onServiceWorkerRedundant'] = (parameters): void => {};
// export const onServiceWorkerUpdateFound: GatsbyBrowser['onServiceWorkerUpdateFound'] = (parameters): void => {};
// export const registerServiceWorker: GatsbyBrowser['registerServiceWorker'] = (): boolean => {};

// export const replaceComponentRenderer: GatsbyBrowser['replaceComponentRenderer'] = (parameters): void => {};

// export const shouldUpdateScroll: GatsbyBrowser['shouldUpdateScroll'] = (parameters): void => {};

// export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = (parameters): JSX.Element => {};
// export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = (parameters): JSX.Element => {};

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({
  element,
}): JSX.Element => {
  const domain = process.env.GATSBY_AUTH0_DOMAIN;
  const clientID = process.env.GATSBY_AUTH0_CLIENT_ID;

  if (!domain || !clientID) {
    throw new ReferenceError(`Auth0's domain or client id is undefined`);
  }

  return (
    // for authentication
    <Auth0Provider
      domain={domain}
      clientId={clientID}
      redirectUri={window.location.origin}
      onRedirectCallback={(appState) =>
        navigate(appState?.returnTo || '/', { replace: true })
      }>
      {element}
    </Auth0Provider>
  );
};
