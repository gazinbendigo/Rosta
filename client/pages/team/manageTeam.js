/**
 * Created by holly on 14/02/16.
 */

Template.manageTeams.onCreated(function(){
     Meteor.subscribe('teams');
});

Template.manageTeams.helpers({
    teams: function() {
        return Teams.find({});
    }
});

Template.manageTeams.events({
    'submit #add-team' ( event, template ) {
        event.preventDefault();

        let team = {
            name: template.find('[name="teamName"]').value,
            telephone: template.find('[name="phoneNumber"]').value
        };

        let teamIndex = Teams.find().count() + 1;
        team.order = teamIndex;
        team.id = teamIndex;


        let date = template.find('[name="rostaStartDate"]').value;
        console.log('Selected Date: ' + date);

        Meteor.call( 'addTeam', team, ( error ) => {
            if ( error ) {
                console.log( error );
            } else {
                $( event.target ).get(0).reset();
                $( '[name="teamName"]' ).focus();
                //initSortable( '.sortable' );
            }
        });
    },

    'click .delete-team' ( event, template ) {
        if ( confirm( 'Are you sure? This is permanent!' ) ) {
            Meteor.call( 'deleteTeam', this._id, ( error ) => {
                if ( error ) {
                    console.log( error );
                } else {

                }
            });
        }
    },


});

Template.manageTeams.onRendered(function(){
    this.$('.datetimepicker').datetimepicker({
        format: 'DD-MM-YYYY'
    });
});