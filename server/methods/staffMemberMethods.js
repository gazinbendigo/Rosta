/**
 * Created by adm9360 on 15/02/2016.
 */


Meteor.methods({
    addStaffMember: function(params){
        StaffMembers.insert(params);
    }
});