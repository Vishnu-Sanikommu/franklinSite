// module.exports = {
//   root: true,
//   extends: 'airbnb-base',
//   env: {
//     browser: true,
//   },
//   parser: '@babel/eslint-parser',
//   parserOptions: {
//     allowImportExportEverywhere: true,
//     sourceType: 'module',
//     requireConfigFile: false,
//   },
//   rules: {
//     'import/extensions': ['error', { js: 'always' }], // require js file extensions in imports
//     'linebreak-style': ['error', 'unix'], // enforce unix linebreaks
//     'no-param-reassign': [2, { props: false }], // allow modifying properties of param
//   },
// };

module.exports = {
  root: true,
  extends: 'airbnb-base',
  env: {
    browser: true,
    node: true, // Allow Node.js global variables
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    allowImportExportEverywhere: true,
    sourceType: 'module', // Use 'module' for ES6 imports
    requireConfigFile: false,
  },
  rules: {
    'import/extensions': ['error', { js: 'always', json: 'always' }], // Require js file extensions in imports
    'linebreak-style': ['error', 'unix'], // Enforce Unix linebreaks
    'no-param-reassign': [2, { props: false }], // Allow modifying properties of param
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }], // Allow importing dev dependencies
    'global-require': 'off', // Allow require() calls
    'import/no-unresolved': 'off', // Disable unresolved import errors if using dynamic imports
    "no-console": 'off'
  },
};
