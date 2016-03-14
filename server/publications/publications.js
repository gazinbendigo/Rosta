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

Meteor.publish('rostas', function(rostaId){
    //check(rostaId, String);
    if(rostaId) {
        //return a cursor containing all the rostas and teamMembers that have a matching value i.e. Parent and Foreign Key relationship
        console.log("publishing " + rostaId);
        console.log(TeamMembers.find({'id': rostaId}));
        return [
            Rostas.find({'rostaId': rostaId}),
            TeamMembers.find({'id': 1})
        ];
    }
    else {
        return Rostas.find({});
    }

});