/**
 * Created by holly on 14/02/16.
 */


Meteor.publish('groups', function(){
    return Groups.find( {}, { sort: { order: 1 } } );
});

Meteor.publish('staffMembers', function(){
    return StaffMembers.find({});
});

Meteor.publish('onCallPeriod', function(){
    return OncallPeriod.find({});
});

Meteor.publish('rostas', function(){
    return Rostas.find({});
});