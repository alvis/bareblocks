/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Specify the configuration related to
 *            node generation.
 *
 *            See https://www.gatsbyjs.org/docs/node-apis
 *            for detailed usage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2020 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import { readFileSync } from 'fs';
import { resolve } from 'path';

import type { GatsbyNode } from 'gatsby';

import type { CompilerOptions } from 'typescript';

// export const createPages: GatsbyNode['createPages'] = async (parameters): Promise<void> => {};
// export const createPagesStatefully: GatsbyNode['createPagesStatefully'] = async (parameters): Promise<void> => {};

// export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = async (parameters): Promise<void> => {};

// export const onCreateNode: GatsbyNode['onCreateNode'] = async (parameters): Promise<void> => {};
// export const onCreatePage: GatsbyNode['onCreatePage'] = async (parameters): Promise<void> => {};

// export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = async (parameters): Promise<void> => {};

// export const onPreInit: GatsbyNode['onPreInit'] = async (parameters): Promise<void> => {};
// export const onPreExtractQueries: GatsbyNode['onPreExtractQueries'] = async (parameters): Promise<void> => {};

// export const onPreBootstrap: GatsbyNode['onPreBootstrap'] = async (parameters): Promise<void> => {};
// export const onPostBootstrap: GatsbyNode['onPostBootstrap'] = async (parameters): Promise<void> => {};

// export const onPreBuild: GatsbyNode['onPreBuild'] = async (parameters): Promise<void> => {};
// export const onPostBuild: GatsbyNode['onPostBuild'] = async (parameters): Promise<void> => {};

// export const preprocessSource: GatsbyNode['preprocessSource'] = async (parameters): Promise<string> => {};
// export const resolvableExtensions: GatsbyNode['resolvableExtensions'] = async (parameters): Promise<string[]> => {};
// export const setFieldsOnGraphQLNodeType: GatsbyNode['setFieldsOnGraphQLNodeType'] = async (parameters): Promise<{ [field: string]: GraphQLField<any, any> }> => {};
// export const sourceNodes: GatsbyNode['sourceNodes'] = async (parameters): Promise<void> => {};

// use babel to transpile typescript
export const onCreateBabelConfig: GatsbyNode['onCreateBabelConfig'] = async ({
  actions,
}): Promise<void> => {
  actions.setBabelPreset({
    name: '@babel/preset-typescript',
    options: {},
  });

  actions.setBabelPreset({
    name: '@babel/preset-env',
    options: {
      targets: '> 0.25%, not dead',
    },
  });

  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-class-properties', // 'babel-plugin-transform-class-properties',
    options: {},
  });

  // add module resolution configuration specified in tsconfig
  const path = getTSPathAlias();
  if (path) {
    actions.setBabelPlugin({
      name: 'babel-plugin-module-resolver',
      options: {
        extensions: ['.d.ts', '.ts', '.tsx', '.js', '.jsx'],
        ...path,
      },
    });
  }
};

/**
 * get the path setting for babel-plugin-module-resolver from tsconfig
 * @returns path alias if present
 */
function getTSPathAlias(): {
  root: string;
  alias: Record<string, string>;
} | void {
  const { baseUrl, paths } = getTSCompilerOptions();

  if (paths) {
    const alias = Object.fromEntries(
      Object.entries(paths)
        .filter(([key]) => key !== '*')
        .map(([key, [path]]) => {
          // must start with ./, not just dir
          const prefixedPath = path.startsWith('./') ? path : `./${path}`;

          // replace * as a regular expression replacement
          return convertTSPathToAlias(key, prefixedPath);
        }),
    );

    return { root: baseUrl ?? '.', alias };
  }
}

/**
 * map a TS path to a module loader alias
 * @param key mapping key
 * @param path ts path
 * @returns pairs of module loader alias
 */
function convertTSPathToAlias(key: string, path: string): [string, string] {
  return key.endsWith('*')
    ? [`^${key.replace(/\*$/, '(.+)')}`, path.replace(/\*$/, '\\1')]
    : [key, path];
}

/**
 * get compiler options from tsconfig.json
 * @returns compiler options
 */
function getTSCompilerOptions(): CompilerOptions {
  const tsconfig = JSON.parse(
    readFileSync(resolve(__dirname, 'tsconfig.json')).toString(),
  ) as {
    /** the compilerOptions in tsconfig.json */
    compilerOptions?: CompilerOptions;
  };

  return tsconfig.compilerOptions ?? {};
}
