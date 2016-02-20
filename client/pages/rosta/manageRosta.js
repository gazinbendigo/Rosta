/**
 * Created by holly on 20/02/16.
 */

Template.manageRosta.onCreated(function() {

});

Template.manageRosta.helpers({

});

Template.manageRosta.events({
    "submit #createRosta" (event, template){
        event.preventDefault();
        let nextRostaId = Rostas.find().count() + 1;
        Session.set('nextRostaId', nextRostaId);
        Session.set('createNewRosta', true);
        FlowRouter.go('/groups');
    }
});