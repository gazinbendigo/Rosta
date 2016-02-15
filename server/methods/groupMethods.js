/**
 * Created by adm9360 on 15/02/2016.
 */


Meteor.methods({
    addGroup: function(params){
        Groups.insert(params);
    }
});