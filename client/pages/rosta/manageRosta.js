/**
 * Created by holly on 20/02/16.
 */

Template.manageRosta.onCreated(function() {
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("teams");
    Meteor.subscribe("teamMembers");
});

Template.manageRosta.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    isTeamsExist: function() {
        return Teams.find().count() > 0;
    },

    teams: function(){
        return Groups.find({});
    }

});

Template.manageRosta.events({
    "submit #createRosta" (event, template){
        event.preventDefault();
        let nextRostaId = Rostas.find().count() + 1;
        Session.set('nextRostaId', nextRostaId);
        Session.set('createNewRosta', true);
        FlowRouter.go('/groups');
    }
});