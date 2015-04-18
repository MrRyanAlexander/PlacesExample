/*global ReviewsApp, Backbone, JST*/

ReviewsApp.Views = ReviewsApp.Views || {};

(function () {
    'use strict';

    ReviewsApp.Views.DefaultReviews = Parse.View.extend({

        template: JST['app/scripts/templates/defaultReviews.ejs'],

        el: '.content',

        autocomplete: function() {},

        initialize: function () {

            var that = this;
            var input = document.getElementById('search');
            var countryRestrict = { 'country': 'us' };

            this.autocomplete = new google.maps.places.Autocomplete(input,
                {
                    types: ['(cities)'],
                    componentRestrictions: countryRestrict
                }
            );
            
            google.maps.event.addListener(this.autocomplete, 'place_changed', onPlaceChanged);

            function onPlaceChanged() {
                var place = that.autocomplete.getPlace();
                  if (place.geometry) {
                    that.search(place.geometry.viewport);
                  } else {
                    input.placeholder = 'Enter a city';
                  }
            };
            
            this.render("detail+detail+detail");
        },

        render: function () {

            var defaultLocation = new google.maps.LatLngBounds(
              new google.maps.LatLng(-33.8902, 151.1759),
              new google.maps.LatLng(-33.8474, 151.2631));
            this.search(defaultLocation);
            /*
                var that = this, places = [], places_ids = [];
                var request = {
                    query: 'Monterey+Inn+Hotel+90744'
                };

                var service = new google.maps.places.PlacesService($('#places').get(0));
                service.textSearch(request, function(results, status, pagination) {
                    if (status != google.maps.places.PlacesServiceStatus.OK) {
                        that.$el.html(that.template({places:{},reviews:{},reviews_ids:{}}))
                    } else {
                        for (var i = 0; i < results.length; i++) {
                          places_ids.push(results[i].place_id);
                          places.push(results[i]);
                        }
                        var reviews = new ReviewsApp.Collections.Reviews();
                        var query = new Parse.Query(ReviewsApp.Models.Review);
                        query.containedIn("place_id",places_ids);
                        reviews.query = query;
                        reviews.fetch({
                            success: function(reviews) {
                                var reviews_ids = [];
                                for (var i = 0; i < reviews.models.length; i++) {
                                    reviews_ids.push(reviews.models[i].attributes.place_id);
                                }
                                that.$el.html(that.template({places:places,reviews:reviews.models,review_ids:reviews_ids}));
                            },
                            error: function(reviews, error) {
                                that.$el.html(that.template(reviews.models.toJSON()));
                            }
                        });
                    }
                    if (pagination.hasNextPage) {
                        var moreButton = $('#more');
                        moreButton.disabled = false;
                        moreButton.click(function() {
                            moreButton.disabled = true;
                            pagination.nextPage();
                        });
                    }
                });
            */
        }, 

        service: new google.maps.places.PlacesService($('#places').get(0)),

        search: function(location) {
            var that = this, places = [], places_ids = [];

            var request = {
                bounds: location,
                types: ['lodging']
            };

            //if (this.service == undefined) {
                //this.service = new google.maps.places.PlacesService($('#places').get(0));
            //};
            

            this.service.nearbySearch(request, function(results, status, pagination) {

                if (status != google.maps.places.PlacesServiceStatus.OK) {
                    //return {places:{},reviews:{},reviews_ids:{}};
                    that.$el.html(that.template({places:{},reviews:{},reviews_ids:{}}))
                } else {
                    for (var i = 0; i < results.length; i++) {
                      places_ids.push(results[i].place_id);
                      places.push(results[i]);
                    }
                    //console.log(places);
                    var reviews = new ReviewsApp.Collections.Reviews();
                    var query = new Parse.Query(ReviewsApp.Models.Review);
                    query.containedIn("place_id",places_ids);
                    reviews.query = query;
                    reviews.fetch({
                        success: function(reviews) {
                            var reviews_ids = [];
                            for (var i = 0; i < reviews.models.length; i++) {
                                reviews_ids.push(reviews.models[i].attributes.place_id);
                            }
                            //return {places:places,reviews:reviews.models,review_ids:reviews_ids};

                            that.$el.html(that.template({places:places,reviews:reviews.models,review_ids:reviews_ids}));
                        },
                        error: function(reviews, error) {
                            //return reviews.models.toJSON();
                            that.$el.html(that.template(reviews.models.toJSON()));
                        }
                    });
                }
                if (pagination.hasNextPage) {
                    var moreButton = $('#more');
                    moreButton.disabled = false;
                    moreButton.click(function() {
                        moreButton.disabled = true;
                        console.log(pagination);
                        pagination.nextPage();
                    });
                }
            });
        }
    });

})();
