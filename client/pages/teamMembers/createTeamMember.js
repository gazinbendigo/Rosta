/**
 * Created by holly on 29/03/16.
 */

Template.createTeamMember.onCreated(function(){
	Meteor.subscribe('teamMembers');
	Meteor.subscribe('getAllRosters');
});

Template.createTeamMember.helpers({
	rostas: function() {
		return Rostas.find({});
	}
});

Template.createTeamMember.events({

});