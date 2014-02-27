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
  console.log("Find me, I'm broken")
  App.router = new Router();
  // Backbone.history.start();
});