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
        let path = FlowRouter.path('view', params);
        return path;
    }



});

Template.manageRosta.onRendered(function(){
    this.$('.datetimepicker').datetimepicker({format: 'DD-MM-YYYY'});
    //$('#createRosta').validate();
});

Template.manageRosta.events({

    "submit #createRosta" (event, template){
        event.preventDefault();
        let rosta = {
            rostaId: Rostas.find().count() + 1,
            rostaName: template.find("#rostaName").value,
            rostaStartDate: template.find("#rosterStartDate").value,
            durationType: template.find("#oncallPeriod").value
        }

        Rostas.insert(rosta);
    },

    "click .delete-x" (event, template) {
        event.preventDefault();
        let id = event.target.value;
        Rostas.remove(id);
    }

});

