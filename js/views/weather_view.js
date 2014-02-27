App.Views.WeatherView = Backbone.View.extend({

  initialize: function() {
    this.template = _.template( $('#weatherView').html() );

    //Creates a child view
    this.citiesView = new App.Views.CitiesView();

    $('h1').text('Weather Page');

  },

  events: {
    'click .btn-success': 'checkWeather'
  },

  checkWeather: function(e) {
    e.preventDefault();

    //You'll need to set the right lat and lon on the collection
    //so it can build its URL properly, then call fetch like below

    // this.citiesView.collection.fetch();
  },

  resetForm: function() {
    //TODO, empty the value of the lat/long. Start with the events hash above
  },

  render: function() {
    var markup = this.template();
    this.$el.html( markup );

    this.citiesView.render(); //fills up child view's $el
    this.$el.append( this.citiesView.$el ); //puts it on the page
  }

});