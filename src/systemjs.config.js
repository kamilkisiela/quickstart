/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      app: 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',

      'apollo-client':                      'npm:apollo-client/apollo.umd.js',
      'apollo-client-rxjs':                 'npm:apollo-client-rxjs/build/bundles/apollo-rxjs.umd.js',
      'apollo-angular':                     'npm:apollo-angular/build/bundles/apollo.umd.js',

      'whatwg-fetch':                       'npm:whatwg-fetch',

      'graphql-anywhere':                   'npm:graphql-anywhere',

      'graphql-tag':                        'npm:graphql-tag',
      'symbol-observable':                  'npm:symbol-observable',
      'redux':                              'npm:redux/dist/redux.min.js',

      'apollo-test-utils':                        'npm:apollo-test-utils',

      'graphql':                            'npm:graphql',
      'graphql-tools':                      'npm:graphql-tools',
      'deprecated-decorator':               'npm:deprecated-decorator',
      'node-uuid':                          'npm:node-uuid',
      'uuid':                               'npm:uuid',
      'iterall':                            'npm:iterall',
      'lodash':                             'npm:lodash'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      app: {
        defaultExtension: 'js'
      },
      rxjs: {
        defaultExtension: 'js'
      },
      'whatwg-fetch':               { main: './fetch.js', defaultExtension: 'js' },
      'redux':                      { format: 'cjs', defaultExtension: 'js' },
      'graphql-tag':                { main: './index.js', defaultExtension: 'js' },
      'apollo-test-utils':          { main: '/dist/src/index.js', defaultExtension: 'js' },
      'symbol-observable':          { main: './index.js', defaultExtension: 'js' },
      'graphql-anywhere':           {
        main: '/lib/src/index.js',
        defaultExtension: 'js'
      },
      'graphql':     {
        main: './index.js',
        defaultExtension: 'js',
        map: {
          './type': './type/index.js',
          './language': './language/index.js',
          './execution': './execution/index.js',
          './validation': './validation/index.js',
          './error': './error/index.js',
          './utilities': './utilities/index.js'
        },
      },
      'graphql-tools':              {
        main: '/dist/index.js',
        defaultExtension: 'js'
      },
      'deprecated-decorator':       { main: '/bld/index.js', defaultExtension: 'js' },
      'node-uuid':                  { main: './uuid.js', defaultExtension: 'js' },
      'uuid':                       { main: './lib/rng-browser.js', defaultExtension: 'js' },
      'iterall':                    { main: './index.js', defaultExtension: 'js' },
      'lodash':                     { main: './index.js', defaultExtension: 'js' }
    }
  });
})(this);
