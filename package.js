Package.describe({
  name: 'kit:basscss',
  version: '5.2.1',
  summary: 'Basscss packaged for Meteor',
  git: 'https://github.com/cwaring/meteor-basscss.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('client/basscss.css', 'client');
});
