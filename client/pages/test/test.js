/**
 * Created by holly on 21/03/16.
 */


Template.test.onCreated(function(){
	Meteor.subscribe("teamRosta");
});


Template.test.helpers({
	rosta: function() {
		return Rostas.find();
	}
});
	
