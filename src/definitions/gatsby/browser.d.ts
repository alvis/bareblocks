/**
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 * @summary   Definitions for gatsby-browser.ts
 *
 *            See https://www.gatsbyjs.org/docs/browser-apis
 *            for detailed usage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2018 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import type { Action, History, Location } from 'history';
import type { ComponentType } from 'react';

import type { PageProps } from '#definitions/gatsby/page';

export interface Page {
  path: string; // any valid URL. Must start with a forward slash
  jsonName: string; // metadata of this page
  componentChunkName: string; // the chunk of this component
}

export interface PageResources {
  component: ComponentType;
  page: Page;
}

export type disableCorePrefetching = () => boolean;

export type onClientEntry = () => void;
export type onInitialClientRender = () => void;

interface OnRouteUpdate {
  action: Action;
  location: Location;
}
export type onRouteUpdate = (parameters: OnRouteUpdate) => void;
export type onPreRouteUpdate = onRouteUpdate;
export type onRouteUpdateDelayed = onRouteUpdate;

interface OnPrefetchPathname {
  pathname: string;
}
export type onPrefetchPathname = (parameters: OnPrefetchPathname) => void;

interface OnServiceWorker {
  serviceWorker: ServiceWorker;
}

export type onServiceWorkerActive = (parameters: OnServiceWorker) => void;
export type onServiceWorkerInstalled = (parameters: OnServiceWorker) => void;
export type onServiceWorkerRedundant = (parameters: OnServiceWorker) => void;
export type onServiceWorkerUpdateFound = (parameters: OnServiceWorker) => void;

export type registerServiceWorker = () => boolean;

interface ReplaceComponentRenderer<PageProps extends Record<string, unknown>> {
  props: PageProps & { pageResources: PageResources };
  loader: {
    getResourcesForPathname: (
      path: string,
      callback: (pageResources?: PageResources) => void,
    ) => null | PageResources;
  };
}
export type replaceComponentRenderer<
  PageProps extends Record<string, unknown> = Record<string, unknown>
> = (parameters: ReplaceComponentRenderer<PageProps>) => void;

// export type replaceHydrateFunction = () => (
//   element: JSX.Element,
//   container: Element,
//   callback: () => void
// ) => void;

interface ShouldUpdateScroll {
  prevRouterProps: {
    history: History;
    location: Location;
  };
  pathname: string;
}
export type shouldUpdateScroll = (parameters: ShouldUpdateScroll) => void;

interface WrapPageElement {
  element: JSX.Element;
  props: Record<string, unknown>;
}
export type wrapPageElement = (parameters: WrapPageElement) => void;

interface WrapRootElement {
  element: JSX.Element;
}
export type wrapRootElement = (parameters: WrapRootElement) => void;
