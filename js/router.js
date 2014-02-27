var Router = Backbone.Router.extend({

  initialize: function() {
    this.$container = $('#main'); //saves this to prevent future lookups
  },

  routes: {
    '': 'index',
    'about': 'aboutPage',
    'weather': 'weatherPage'
  },

  index: function() {
    //nothing happens here, initial content is just in index.html
  },

  aboutPage: function() {
    this.tearDown();

    this.currentView = new App.Views.AboutView();
    this.currentView.render();

    this.$container.html( this.currentView.$el );

  },

  weatherPage: function() {
    this.tearDown();

    this.currentView = new App.Views.WeatherView();
    this.currentView.render();

    this.$container.html( this.currentView.$el );
  },

  tearDown: function() {
    if (this.currentView) {
      this.currentView.remove();
    }
  }

});