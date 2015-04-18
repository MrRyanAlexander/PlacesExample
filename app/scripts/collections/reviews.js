/*global ReviewsApp, Backbone*/

ReviewsApp.Collections = ReviewsApp.Collections || {};

(function () {
    'use strict';

    ReviewsApp.Collections.Reviews = Parse.Collection.extend({

        model: ReviewsApp.Models.Reviews

    });

})();
