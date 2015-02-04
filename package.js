Package.describe({
  name: 'ramsay:errors',
  version: '1.0.0',
  // Brief, one-line summary of the package.
  summary: 'Basic error notification package - a slightly more advanced version of the Disvover Meteor tutorial',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/ramsaylanier/meteor-errors-package',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.1');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.addFiles([
    'ramsay:errors.html', 
    'ramsay:errors.js',
    'ramsay:errors.css'
  ], 'client');

  if (api.export) 
    api.export('Errors');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ramsay:errors');
  api.addFiles('ramsay:errors-tests.js');
});
