App.Views.CitiesView = Backbone.View.extend({

  className: 'row',

  initialize: function() {
    this.template = _.template( $('#citiesView').html() );

    this.collection = new App.Collections.Cities();

    //What's this line do? Relevant to #4
    this.collection.on('reset', _.bind(this.render, this));
  },

  render: function() {
    var markup = this.template({
      models: this.collection.toJSON()
    });

    this.$el.html( markup );
  }

});