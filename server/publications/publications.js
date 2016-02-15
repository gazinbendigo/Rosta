/**
 * Created by adm9360 on 15/02/2016.
 */

Meteor.publish('groups', function(){
    return Groups.find({}, {sort: {order: 1}});
});

Meteor.publish('staffMembers', function(){
    return StaffMembers.find({});
});