/**
 * Created by holly on 14/03/16.
 */

let rostaId = '';

Template.viewRosta.onCreated(function() {
	//if(Rostas.find({}).count() > 0){Rostas.remove({});}
	rostaId = FlowRouter.current().params.id;
	Meteor.subscribe('getOncallPeriodsByRostaId', rostaId);
    console.log('Out: ' + OnCallPeriod.find({rostaId: rostaId}).count());
	Meteor.subscribe('teamMembers');
});

Template.viewRosta.helpers({
	getRostas: function(){
		return Rostas.findOne({_id: rostaId});
	},

	getTeamMembers: function() {
		let rosta = Rostas.find({_id: rostaId}).fetch();
		let periods = OnCallPeriod.find({rostaId: rosta[0]._id}).fetch();
        let teamMemberIds = [];
        _.each(periods, function(item){
            if(!_.contains(teamMemberIds, item.teamMemberId, 0)){
                teamMemberIds.push({memberId: item.teamMemberId, startDate: item.startDate, orderId: item.orderId});
            }
        });
        let teamMembers = [];
		 _.each(teamMemberIds, function(item){
			let member = TeamMembers.findOne({_id: item.memberId});
             let Period = {startDate: item.startDate, firstName: member.firstName, lastName: member.lastName, orderId: item.orderId};
             teamMembers.push(Period);
		});

		return teamMembers;
	}

});

Template.viewRosta.events({
	"click chooseRosta" (event, template) {
		event.preventDefault();
		FlowRouter.go('/rosta/');
	}
});

