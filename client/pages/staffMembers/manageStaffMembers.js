/**
 * Created by holly on 15/02/16.
 */

Template.manageStaffMembers.onCreated(function(){
    Meteor.subscribe('staffMembers');
    Meteor.subscribe('groups');
});

Template.manageStaffMembers.helpers({
    staff: function() {
        return StaffMembers.find({});
    },

    groups: function() {
        return Groups.find({});
    },

    groupsExit: function(){
        return Groups.find().count() > 0;
    }
});

Template.manageStaffMembers.events({
    "change #groups": function(event, template){
        var selectedGroup = $('#groups').val;
        Session.set("selected-group", selectedGroup);
    },

    'submit #add-staff-member' (event, template){
        event.preventDefault();

        let newMember = {
            firstName: template.find('[name=firstName]').value,
            lastName: template.find('[name=lastName]').value,
            groupId: template.$('#groups').attr('name')
        }

        let index = StaffMembers.find().count() + 1;
        newMember.order = index;
        newMember.id = index;

        Meteor.call('addStaffMember', newMember, (error) => {
            if(error){
                console.log(error.reason);
                alert(error);
            }
            else {
                $(event.target).get(0).reset();
                $('[name=firstName]').focus();
            }
        });
    }
});
