Package.describe({
  name: 'clinical:ui-alert-panel',
  summary: 'WebComponent providing alert panel designed to work with header navbars.',
  version: '1.0.0',
  git: 'http://github.com/awatson1978/clinical-ui-alert-panel.git'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('less@1.0.11', 'client');
  api.use('templating@1.0.9', 'client');
  api.use('session@1.0.4', 'client');
  api.use('numtel:webcomponent@0.0.3', 'client');

  api.addFiles('component/alert-panel.less', 'client');
  api.addFiles('component/alert-panel.html', 'client');
  api.addFiles('component/alert-panel.js', 'client');

  api.export('AlertPanel', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('less');
  api.use('templating');
  api.use('session');
  api.use('clinical:alert-panel');

  api.addFiles('alert-panel-tests.js');
});
