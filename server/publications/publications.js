/**
 * Created by holly on 14/02/16.
 */


Meteor.publish('teams', function(){
    return Teams.find( {}, { sort: { order: 1 } } );
});

Meteor.publish('teamMembers', function(){
    return TeamMembers.find({});
});

Meteor.publish('onCallPeriod', function(){
    return OncallPeriod.find({});
});

Meteor.publish('rostas', function(){
    return Rostas.find({});
});