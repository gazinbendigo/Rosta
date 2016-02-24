/**
 * Created by adm9360 on 24/02/2016.
 */

Template.homePage.onCreated(function(){
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("groups");
    this.isGroupSelected = new ReactiveVar(false);
});

Template.homePage.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    groups: function() {
        return Groups.find({});
    },

    groupsExist: function() {
        return Groups.find().count() > 0;
    },

    isGroupSelected: function() {
        return Template.instance().isGroupSelected.get();
    }
});

Template.homePage.events({
    "change #groups": function(event, template){
        var group = $("#groups").val();
        //TODO: Go get the oncall periods for this group
        Template.instance().isGroupSelected.set(true);
    }
});