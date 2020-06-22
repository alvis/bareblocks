// const { generateConfig } = require('gatsby-plugin-ts-config');

// const path = require('path');
// const tsconfig = require('./tsconfig.json');
// const moduleResolverOpts = {};
// if (tsconfig && tsconfig.compilerOptions) {
//   if (tsconfig.compilerOptions.baseUrl)
//     moduleResolverOpts.root = [
//       path.resolve(__dirname, tsconfig.compilerOptions.baseUrl),
//     ];
//   if (tsconfig.compilerOptions.paths)
//     moduleResolverOpts.alias = Object.entries(
//       tsconfig.compilerOptions.paths,
//     ).reduce((acc, [key, val]) => {
//       acc[key.replace(/\/\*$/, '')] = val[0].replace(/\/\*$/, '');
//       return acc;
//     }, {});
// }

// module.exports = generateConfig({
//   // configDir: '.gatsby',
//   babel: {
//     plugins: [
//       [require.resolve('babel-plugin-module-resolver'), moduleResolverOpts],
//     ],
//   },
// });
module.exports = {
  plugins: [`gatsby-plugin-ts-config`],
};
