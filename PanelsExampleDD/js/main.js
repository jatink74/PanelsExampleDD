require.config({
    baseUrl: "/js/lib/"
  , shim: {
      'jquery-ui': {
          deps: ['jquery']
      }
  }
  , paths: {
      app: ".."
    , models: "../models"
    , jquery: 'jquery-1.10.2'
  }
});

require(['knockout-3.2.0', 'models/players-view-model', 'domReady!'], function (ko, PlayersViewModel) {
    ko.applyBindings(new PlayersViewModel());
});
