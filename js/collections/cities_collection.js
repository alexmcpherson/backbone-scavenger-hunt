App.Collections.Cities = Backbone.Collection.extend({

  url: function() {
    var base_url = 'http://api.openweathermap.org/data/2.1/find/city?cnt=10&';
    var full_url = base_url + "lat=" + this.lat + "&lon=" + this.lon;

    return full_url
  },

  fetch: function(a,b,c) {
    var self = this;

    $.ajax({
      url: this.url(),
      crossDomain: true,
      dataType: 'jsonp'
    }).done(function(response) {
      console.log("I got a weather response! Now what do I do with it...")
    });

  },

  model: App.Models.City
})