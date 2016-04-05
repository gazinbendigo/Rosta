/**
 * Created by holly on 14/03/16.
 */

Template.viewRosta.onCreated(function() {
	//if(Rostas.find({}).count() > 0){Rostas.remove({});}
	let rostaId = FlowRouter.current().params.id;
	console.log('Out: ' + rostaId);
	Meteor.subscribe('getRostaById', rostaId);
	console.log(Rostas.find({}).count());
	//Meteor.subscribe('getOncallPeriodsByRostaId', rostaId);
	//Meteor.subscribe('teamMembers');
});

Template.viewRosta.helpers({
	getRostas: function(){
		return Rostas.find({});
	},

	getTeamMembers: function() {
		console.log('Start');
		let rosta = Rostas.find({}).fetch();
		console.log(JSON.stringify(rosta));
		// let periods = OnCallPeriod.find({}).fetch();
		// console.log(JSON.stringify(periods));
		// _.each(periods, function(item){
		// 	console.log(item.teamMemberId);
		// 	let member = TeamMembers.find({_id: item.teamMemberId});
		// 	console.log(member.firstName);
		// });

		// let teamMembers = [];
		// console.log(teamMembers.length);
		console.log('End');
		return 'End of method';
	}


});

Template.viewRosta.events({
	"click chooseRosta" (event, template) {
		event.preventDefault();
		FlowRouter.go('/rosta/');
	}
});

