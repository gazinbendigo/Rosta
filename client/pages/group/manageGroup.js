/**
 * Created by holly on 14/02/16.
 */

Template.manageGroups.onCreated(function(){
     Meteor.subscribe('groups');
});

Template.manageGroups.helpers({
    groups: function() {
        return Groups.find({});
    }
});

Template.manageGroups.events({
    'submit #add-group' ( event, template ) {
        event.preventDefault();

        let group = {
            name: template.find( '[name="groupName"]' ).value,
            telephone: template.find( '[name="phoneNumber"]' ).value
        };

        let groupIndex = Groups.find().count() + 1;
        group.order = groupIndex;
        group.id = groupIndex;

        Meteor.call( 'addGroup', group, ( error ) => {
            if ( error ) {
                console.log( error );
            } else {
                $( event.target ).get(0).reset();
                $( '[name="groupTitle"]' ).focus();
                //initSortable( '.sortable' );
            }
        });
    },

    'click .delete-group' ( event, template ) {
        if ( confirm( 'Are you sure? This is permanent!' ) ) {
            Meteor.call( 'deleteGroup', this._id, ( error ) => {
                if ( error ) {
                    console.log( error );
                } else {

                }
            });
        }
    }

});