/**
 * Created by holly on 14/03/16.
 */

Template.viewRosta.onCreated(function() {
	let rostaId = FlowRouter.current().params.id;
	console.log('URL ID ' + rostaId);
	Template.instance().subscribe('rostas', rostaId);
});

Template.viewRosta.helpers({
	rosta() {
		let rosta = Rostas.findOne();
		if(rosta){
			return rosta;
		}
	},
	teamMembers() {
		let teamMembers = TeamMembers.find();
		if(teamMembers){
			return teamMembers;
		}
	}
});

