/**
 * Created by holly on 14/02/16.
 */

Meteor.methods({
    addGroup: function(params){
        Groups.insert(params);
    },

    deleteGroup: function(params) {
        Groups.delete(params);
    }
});