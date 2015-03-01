Package.describe({
  name: 'cwaring:basscss',
  version: '5.0.0_1',
  summary: 'Basscss packaged for Meteor',
  git: 'https://github.com/cwaring/meteor-basscss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.3.2');
  api.addFiles('client/basscss.css', 'client');
});