

Package.describe({
  name: 'grottolabs:mithril',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Mithril for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/Grottolabs/meteor-mithril',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "mithril": "0.2.0"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2-rc.12');
  api.use('ecmascript');
  api.use(['cosmos:browserify@0.4.0'], 'client');

  api.addFiles([
    'client.browserify.js',
    'functions.js'
  ], 'client');

  api.export("m", 'client')

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('mithril');
  api.addFiles('mithril-tests.js');
});
