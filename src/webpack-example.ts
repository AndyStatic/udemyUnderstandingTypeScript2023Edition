//using Webpack
/**
 * can bundle code - put all files into one
 * optimize and minimize code - smalles var names from our readable code
 * easy build
 *
 * npm install --save-dev webpack webpack-cli webpack-dev-server typescript ts-loader
 * add webpack.config.js file
 *
 * "sourceMap": true need to be set in tsconfig.json
 *
 * add "build": "webpack" in packege.json
 * change "start": "lite-server", to "start": "webpack-dev-server"
 *
 * run 'npm run build' in terminal
 * it will create dist/bundle.js file with unreadable code that uses minification
 *
 *
 * point index.thml to use bundle.js
 * <script type="module" src="dist/bundle.js"></script>
 *
 * for webpack.config.production plugins
 * npm install --save-dev clean-webpack-plugin
 *
 * Official Webpack Docs: https://webpack.js.org/
 */

console.log("Hi");
