/**
 * Created by holly on 20/02/16.
 */


Template.manageRosta.onCreated(function() {
    //Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("getAllRosters");
    
});

Template.manageRosta.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    doRostasExist: function() {
        return Rostas.find().count() > 0;
    },

    getAllRostas: function() {
        return Rostas.find({}, {sort: {name: 1}}).fetch();
    },

    areStaffAssignedToRosta: function() {
        return TeamMembers.find();
    },

    getRostaLink: function(rostaId) {
        let params = {id: rostaId};
        let path = FlowRouter.path('viewRosta', params);
        return path;
    }



});



Template.manageRosta.events({

    "click .delete-x" (event, template) {
        event.preventDefault();
        let id = event.target.value;
        Rostas.remove(id);
    }

});

