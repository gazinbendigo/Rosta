/**
 * Created by holly on 20/02/16.
 */

let ROSTA_NAME = "ROSTA_NAME";

Template.manageRosta.onCreated(function() {
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("teams");
    Meteor.subscribe("rostas");

    //Reactive vars
    //this.rostaName = new ReactiveVar();
});

Template.manageRosta.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    isTeamsExist: function() {
        return Teams.find().count() > 0;
    },

    teams: function(){
        return Teams.find({});
    },

    doRostasExist: function() {
        return Rostas.find().count() > 0;
    },

    rostas: function() {
        return Rostas.find({}, {sort: {name: 1}}).fetch();
    },



});

Template.manageRosta.onRendered(function(){
    $('#createRosta').validate();
});

Template.manageRosta.events({

    "change #teams" (event, template){
        event.preventDefault();
        let action = template.find("#createRosta :selected");
        let rosterName = template.find("#rostaName");
        //console.log(rosterName);
        if(_.isEqual(action.text, 'Create Team')){
            if(_.isEmpty(rosterName)) {
                //TODO: Add selected date etc to session.
                console.log("check");
                //rosterName.oninput = check(rosterName, "Please enter a name");
            }
            else {
                Session.set(ROSTA_NAME, rosterName);
                //FlowRouter.go('team');
            }


        }
        console.log("Selected action: " + action.text);
    },

    "submit #createRosta" (event, template){
        event.preventDefault();
        let nextRostaId = Rostas.find().count() + 1;
        Session.set('nextRostaId', nextRostaId);
        Session.set('createNewRosta', true);
        FlowRouter.go('/');
    }
});

