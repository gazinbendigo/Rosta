/**
 * Created by adm9360 on 15/02/2016.
 */

Template.addGroup.onCreated(function(){
    let template = Template.instance();
    Meteor.subscribe('groups');
});

Template.addGroup.helpers({
    groups: function() {
        return Groups.find();
    }
});

Template.addGroup.events({
    'submit #add-group' ( event, template ) {
        event.preventDefault();

        let group = {
            acronym: template.find( '[name="acronym"]' ).value,
            description: template.find( '[name="description"]' ).value
        };

        let groupIndex = Groups.find().count() + 1;
        group.order = groupIndex;

        Meteor.call( 'addGroup', group, ( error ) => {
            if ( error ) {
                console.log( error );
            } else {
                $( event.target ).get(0).reset();
                $( '[name="groupTitle"]' ).focus();
                //initSortable( '.sortable' );
            }
        });
    }
});