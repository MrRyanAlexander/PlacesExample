/*global ReviewsApp, $*/


window.ReviewsApp = {
    Models: {},
    Collections: {},
    Views: {},
    Routers: {},
    init: function () {
        'use strict';

        new this.Routers.Main();
        new this.Views.DefaultReviews();

        Parse.history.start();
    }
};

$(document).ready(function () {
    'use strict';
    Parse.$ = jQuery;

    Parse.initialize("OEwx0JnSAPsfiKZbdb9vrigk2CsOxluqyQInOFuO",
                   "sDbvLKAffGvwiejbFbPrlZLygMEZ4ZcYMwPGCY0Q");

    ReviewsApp.init();
});
