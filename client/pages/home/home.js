/**
 * Created by adm9360 on 24/02/2016.
 */

Template.homePage.onCreated(function(){
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("groups");
    this.isGroupSelected = new ReactiveVar(false);
    this.groupName = new ReactiveVar(null);
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
    },

    groupName: function() {
        return Template.instance().groupName.get();
    },

    findGroupPhoneNo: function(groupId){

    }
});

Template.homePage.events({
    "change #groups": function(event, template){
        var group = template.$('select[id=groups]').val()
        if('select' !== group){
            //TODO: Go get the oncall periods for this group
            Template.instance().isGroupSelected.set(true);
            Template.instance().groupName.set(template.$('#groups option:selected').text());
        }
        else {
            Template.instance().isGroupSelected.set(false);
            Template.instance().groupName.set(null);
            alert("Choose a valid group");
        }
    }
});

