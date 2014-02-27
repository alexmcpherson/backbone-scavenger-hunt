App.Views.AboutView = Backbone.View.extend({

  initialize: function() {
    $('li.hidden').removeClass('hidden');

    this.template = _.template( $('#aboutView').html() );
  },

  render: function() {
    var markup = this.template(); //string returned here
    this.$el.html( markup ); //DOM manipulation with jQuery

    //And the $el right here is not on the page yet
    //The router handles that
  }

});