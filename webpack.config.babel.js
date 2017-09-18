import webpack       from 'webpack';
import autoprefixer  from 'autoprefixer';
import poststylus    from 'poststylus';
import path          from 'path';
import {rules}       from './webpack.rules';
import {index}       from './index.manifest';
import indexTemplate from 'html-webpack-template-pug';
import HtmlPlugin    from 'html-webpack-plugin';
import BrowserSync   from 'browser-sync-webpack-plugin';

export default {
  watch: true,
  entry:{app: './src/app/app.ts'},
  module:{ exprContextCritical: false},
  resolve: {
    modules: [
      path.resolve('./src/app'),
      path.resolve('node_modules')
    ],
    extensions: ['.tsx', '.ts', '.js']
  },
  output:{
    path: path.resolve('./dist'),
    sourceMapFilename: '[file].map',
    filename:'[name].development.js',
  },
  devtool: 'source-map',
  plugins:[
    new BrowserSync({
      host: 'localhost',
      port: 8000,
      server: { baseDir: ['./dist'] }
    }),
    new webpack.ExtendedAPIPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: module=>{
       return module.context && module.context.includes('node_modules');
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      mangle: false,
      compress: {warnings: false,},
      output: {comments: false},
      sourceMap: true
    }),
    new webpack.ContextReplacementPlugin( //prevent warnings from angular core
      /angular(\\|\/)core(\\|\/)@angular/,
      path.join(__dirname,'src/app')
    ),
    new webpack.DefinePlugin({'process.env': {NODE_ENV: '"development"'}}),
    new HtmlPlugin({
      inject: false,
      template: indexTemplate,
      mobile: true,
      injectExtras: index,
      title: 'Pinsight Portal'
    }),
    new webpack.LoaderOptionsPlugin({
      options: {stylus: {use: [poststylus(['autoprefixer'])]}}
    })
  ],
  module:{rules}
};

