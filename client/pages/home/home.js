/**
 * Created by adm9360 on 24/02/2016.
 */

Template.homePage.onCreated(function(){
    Meteor.subscribe("onCallPeriod");
    Meteor.subscribe("getAllRosters");
});

Template.homePage.helpers({
    onCallPeriods: function() {
        return OncallPeriod.find({});
    },

    rostas: function() {
        return Rostas.find({});
    },

    rostaHasTeamMembers: function(rostaId) {
        let id = 1;
        let count = OnCallPeriod.find({teamMemberId: {$gt: 0}, rostaId: rostaId}).count() > 0;
        return count;
        // if(count){
        //     return true;
        // }
        // return false;
    },

    teamName: function() {
        return Template.instance().teamName.get();
    },

    getRostaPath: function(rostaId) {
        let params = {id: rostaId};
        let path = FlowRouter.path('view', params);
        return path;
    }

});

Template.homePage.events({
    "change #rostas": function(event, template){
        let rostaId = template.$('#rostas').val();
        if('select' !== rostaId){
            //TODO: Go get the oncall periods for this group
            Meteor.call('findRostaById', rostaId, function(err, res){
                if(err){
                    console.log(err);
                }
                else {

                }
            });
        }
        else {
            alert("Choose a valid team");
        }
    },

    "click #createRosta": function(event, template){
        FlowRouter.go('rosta');
    }
});



