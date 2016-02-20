/**
 * Created by holly on 20/02/16.
 */

Meteor.methods({
    addRosta: function(params) {
        Rosta.insert(params);
    }


});