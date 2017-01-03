/* globals __dirname, process, module */
var bundlePath = __dirname + (process.env.ENV === 'prod' ? '/dist' : '/build');
var path = require("path")
module.exports = {
  debug:true,
  cache: true,
	entry: [
    path.join(__dirname, '/src/js/loader.js')
  ],
  output: {
    path: bundlePath,
    filename: "loader.js"
  },
  module: {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?stage=0',
        include: path.join(__dirname, "src/js/vendor/material-ui/src"),
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader?stage=0',
        include: path.join(__dirname, "src/js/vendor/react-router/modules"),
      },
      {
        test: /\.(js|jsx)$/,
        loader: 'requirejs?stage=0',
        include: path.join(__dirname, "src/js/vendor/requirejs/require"),
      },
    ],
    loaders: [
      {
        test: /\.(js|jsx)$/,  //All .js and .jsx files
        loader: 'babel-loader?stage=0',
        include: path.join(__dirname, "src/js/vendor/material-ui/src"),
      },
			{
        test: /\.(js|jsx)$/,  //All .js and .jsx files
        exclude: /(node_modules|src\/js\/vendor)/,
        loader: 'babel-loader?stage=0'
      },
      {
        test: /\.(json)$/,  //All .js and .jsx files
        exclude: /(node_modules|src\/js\/vendor)/,
        loader: 'json'
      }
    ]
  },
  externals: {
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
    alias: {
      'alt': path.join(__dirname , 'src/js/vendor/alt/dist/alt'),
			'js': path.join(__dirname , 'src/js'),
      'react-dom': path.join(__dirname , 'src/js/vendor/react/react-dom'),
      'shared': path.join(__dirname , 'src/js/shared'),
      'components': path.join(__dirname , 'src/js/components'),
      'config': path.join(__dirname , 'src/js/config'),
      'dispatcher': path.join(__dirname , 'src/js/dispatcher'),
      'requirejs': path.join(__dirname , 'src/js/vendor/requirejs'),
      //'jszip-utils': path.join(__dirname , 'src/vendor/jszip-utils/dist/jszip-utils'),
      //'file-saver': path.join(__dirname , 'src/vendor/FileSaver/FileSaver'),
      //'main': path.join(__dirname , 'src/js/main'),
      'vendor': path.join( __dirname , 'src/js/vendor'),
			'babel-polyfill': path.join( __dirname , 'src/js/vendor/babel-polyfill/browser-polyfill')
    }
  }
};
