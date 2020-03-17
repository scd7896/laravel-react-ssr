const path = require('path');
const glob = require('glob-all');
const mix = require('laravel-mix');
const PurgecssPlugin = require('purgecss-webpack-plugin');


/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
.react('resources/js/entry-client.js', 'public/js/react')
.react('resources/js/entry-server.js', 'public/js/react')
