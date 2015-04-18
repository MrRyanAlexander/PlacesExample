/*global ReviewsApp, Backbone*/

ReviewsApp.Collections = ReviewsApp.Collections || {};

(function () {
    'use strict';

    ReviewsApp.Collections.Places = Parse.Collection.extend({

        model: ReviewsApp.Models.Places

    });

})();
