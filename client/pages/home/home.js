/**
 * Created by adm9360 on 24/02/2016.
 */

Template.homePage.onCreated(function(){
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("rostas");
});

Template.homePage.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    rostas: function() {
        return Rostas.find({});
    },

    rostasExist: function() {
        return false;//Teams.find().count() > 0;
    },

    groupName: function() {
        return Template.instance().teamName.get();
    }

});

Template.homePage.events({
    "change #rostas": function(event, template){
        var rosta = template.$('select[id=rostas]').val()
        if('select' !== rosta){
            //TODO: Go get the oncall periods for this group

        }
        else {
            alert("Choose a valid team");
        }
    }
});

