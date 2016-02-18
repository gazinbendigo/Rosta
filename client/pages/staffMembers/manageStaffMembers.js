/**
 * Created by adm9360 on 15/02/2016.
 */

Template.manageStaffMembers.onCreated(function(){
    Meteor.subscribe('staffMembers');
});

Template.manageStaffMembers.helpers({
    staff: function() {
        return StaffMembers.find({});
    }
});

Template.manageStaffMembers.events({
    'submit #add-staff-member' (event, template){
        event.preventDefault();

        let newMember = {
            firstName: template.find('[name=firstName]').value,
            lastName: template.find('[name=lastName]').value,
            mobileNumber: template.find('[name=mobileNo]').value
        }

        let index = StaffMembers.find().count() + 1;
        newMember.order = index;

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
