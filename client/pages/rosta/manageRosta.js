/**
 * Created by holly on 20/02/16.
 */

//let ROSTA_NAME = "ROSTA_NAME";

Template.manageRosta.onCreated(function() {
    //Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("rostas");
    let rostaId = 1; //FlowRouter.current().params._id;
    //Template.instance().subscribe( 'rostas', postId );
    //Reactive vars
    //this.rostaName = new ReactiveVar();
});

Template.manageRosta.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    doRostasExist: function() {
        return Rostas.find().count() > 0;
    },

    rostas: function() {
        return Rostas.find({}, {sort: {name: 1}}).fetch();
    },

    areStaffAssignedToRosta: function() {
        return TeamMembers.find();
    }

});

Template.manageRosta.onRendered(function(){
    this.$('.datetimepicker').datetimepicker({format: 'DD-MM-YYYY'});
    //$('#createRosta').validate();
});

Template.manageRosta.events({

    //"change #teams" (event, template){
    //    event.preventDefault();
    //    let action = template.find("#createRosta :selected");
    //    let rosterName = template.find("#rostaName");
    //    //console.log(rosterName);
    //    if(_.isEqual(action.text, 'Create Team')){
    //        if(_.isEmpty(rosterName)) {
    //            //TODO: Add selected date etc to session.
    //            console.log("check");
    //            //rosterName.oninput = check(rosterName, "Please enter a name");
    //        }
    //        else {
    //            Session.set(ROSTA_NAME, rosterName);
    //            //FlowRouter.go('team');
    //        }
    //
    //
    //    }
    //    console.log("Selected action: " + action.text);
    //},

    "submit #createRosta" (event, template){
        event.preventDefault();
        let n = template.find("#rostaName").value;
        console.log(n);
        let d = template.find("#rosterStartDate").value;
        console.log(d);
        let rosta = {
            rostaId: Rostas.find().count() + 1,
            rostaName: template.find("#rostaName").value,
            rostaStartDate: template.find("#rosterStartDate").value
        }

        Meteor.call('addRosta', rosta, function(err, result){
            if(err) {
                console.log(err);
            }
        });
    },

    "click #viewRosta" (event, template) {
        event.preventDefault();
        //let rostaId = template.find().value;
        FlowRouter.go('/rosta/' + 1);
    }
});

