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

});
