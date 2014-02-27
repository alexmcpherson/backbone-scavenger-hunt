App.Collections.Cities = Backbone.Collection.extend({

  url: function() {
    if (!this.lat || !this.lon) {
      throw new Error("I need a lat and a long to build my URL")
    }

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