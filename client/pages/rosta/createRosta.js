/**
 * Created by holly on 29/03/16.
 */

Template.createRosta.onCreated(function(){

});

Template.createRosta.helpers({

});

Template.createRosta.onRendered(function(){
	this.$('.datetimepicker').datetimepicker({format: 'DD-MM-YYYY'});
	//$('#createRosta').validate();
});

Template.createRosta.events({
	"submit #createRosta" (event, template){
		event.preventDefault();
		let rosta = {
			rostaId: Rostas.find().count() + 1,
			rostaName: template.find("#rostaName").value,
			rostaStartDate: template.find("#rosterStartDate").value,
			duration: template.find("#duration").value
		}

		Rostas.insert(rosta);
	}
});