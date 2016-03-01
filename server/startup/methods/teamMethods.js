/**
 * Created by holly on 14/02/16.
 */

Meteor.methods({
    addTeam: function(params){
        Teams.insert(params);
    },

    deleteTeam: function(params) {
        Teams.delete(params);
    }
});