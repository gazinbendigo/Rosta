/**
 * Created by holly on 14/03/16.
 */

Template.viewRosta.onCreated(function() {
	let rostaId = FlowRouter.current().params.id;
	Meteor.subscribe('getRostaById', rostaId);
	//Template.instance().subscribe('rostas', rostaId);
});

Template.viewRosta.helpers({
	getRostas: function(){
		return Rostas.find();
	},

	getTeamMembers: function() {
		let periods = OnCallPeriod.find({rostaId: this._id}).fetch();
		let teamMembers = [];
		forEach(function(element){
			teamMembers.push(TeamMembers.find({id: element.teamMemberId}));
		})
		console.log(JSON.stringify(teamMembers));
		return teamMembers;
	},

	getOnCallPeriods: function() {
		return OnCallPeriod.find({rostaId: this._id});
	},

	doesNotRostaExist: function() {
		return false; // Rostas.find({}).count() < 1;
	}
});

Template.viewRosta.events({
	"click chooseRosta" (event, template) {
		event.preventDefault();
		FlowRouter.go('/rosta/');
	}
});

