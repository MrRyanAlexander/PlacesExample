/*global ReviewsApp, Backbone, JST*/

ReviewsApp.Views = ReviewsApp.Views || {};

(function () {
    'use strict';

    ReviewsApp.Views.Test = Parse.View.extend({

        template: JST['app/scripts/templates/test.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {},

        initialize: function () {
            //this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            //this.$el.html(this.template(this.model.toJSON()));
        }

    });

})();
