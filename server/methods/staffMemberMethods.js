/**
 * Created by adm9360 on 15/02/2016.
 */


Meteor.methods({
    addStaffMember: function(params){
        //check(params, {
        //    firstName: String,
        //    lastName: String,
        //    mobileNumber: Number,
        //    order: Number
        //});
        console.log('hello');
        StaffMembers.insert(params);
    }
});