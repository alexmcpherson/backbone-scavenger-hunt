var Router = Backbone.Router.extend({

  initialize: function() {
    this.$container = $('#main'); //saves this to prevent future lookups
  },

  routes: {
    '': 'index',
    'about': 'aboutPageCallBackFunction',
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

    console.log("What else is in the Views area of App?")
  },

  tearDown: function() {
    // This releases events/DOM nodes from memory
    if (this.currentView) {
      this.currentView.remove();
    }
  }

});