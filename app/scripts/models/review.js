/*global ReviewsApp, Backbone*/

ReviewsApp.Models = ReviewsApp.Models || {};

(function () {
    'use strict';

    ReviewsApp.Models.Review = Parse.Object.extend({

        className: 'Review'
    });

})();
