/**
 * Created by holly on 18/02/16.
 */


Meteor.methods({
    addStaffMember: function(params){
        //check(params, {
        //    firstName: String,
        //    lastName: String,
        //    mobileNumber: Number,
        //    order: Number
        //});
        StaffMembers.insert(params);
    }
});
