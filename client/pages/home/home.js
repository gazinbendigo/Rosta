/**
 * Created by adm9360 on 24/02/2016.
 */

Template.homePage.onCreated(function(){
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("groups");
    this.isTeamSelected = new ReactiveVar(false);
    this.teamName = new ReactiveVar(null);
});

Template.homePage.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    teams: function() {
        return Teams.find({});
    },

    teamsExist: function() {
        return Teams.find().count() > 0;
    },

    isTeamSelected: function() {
        return Template.instance().isTeamSelected.get();
    },

    groupName: function() {
        return Template.instance().teamName.get();
    },

    findGroupPhoneNo: function(groupId){

    }
});

Template.homePage.events({
    "change #teams": function(event, template){
        var group = template.$('select[id=teams]').val()
        if('select' !== group){
            //TODO: Go get the oncall periods for this group
            Template.instance().isTeamSelected.set(true);
            Template.instance().teamName.set(template.$('#teams option:selected').text());
        }
        else {
            Template.instance().isTeamSelected.set(false);
            Template.instance().teamName.set(null);
            alert("Choose a valid team");
        }
    }
});

