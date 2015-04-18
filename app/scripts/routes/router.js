/*global ReviewsApp, Backbone*/

ReviewsApp.Routers = ReviewsApp.Routers || {};

(function () {
    'use strict';

    ReviewsApp.Routers.Main = Parse.Router.extend({

		routes: {
			""      :    "home",
		    "help"  :    "help"

		},

		home: function() {
		},
		help: function() {
		    //
		    console.log("Loaded help");
		},

		search: function(query, page) {
		}
    });

})();
