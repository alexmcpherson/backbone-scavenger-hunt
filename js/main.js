window.App = {
  Views: {},
  Models: {},
  Collections: {}
};

$.ajaxSetup({
  crossDomain : true,
  dataType : 'jsonp'
});

$(function() {
  App.router = new Router();
  Backbone.history.start();
});