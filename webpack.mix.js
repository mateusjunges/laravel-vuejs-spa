const mix = require('laravel-mix');

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
mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css');

mix.extend('aliasConfig', new class {
    webpackConfig(webpackConfig) {
        webpackConfig.resolve.extensions.push('.js', '.json', '.vue');
        webpackConfig.resolve.alias = {
            'vue$': 'vue/dist/vue.esm.js',
            '@': __dirname + '/resources/js',
            '@components': __dirname + '/resources/js/components/',
            '@views': __dirname + '/resources/js/views',
            '@api': __dirname + '/resources/js/api',
            '@routes': __dirname + '/resources/js/routes'
        };
    }
});
mix.aliasConfig();
