/**
 * Created by holly on 14/02/16.
 */


Meteor.publish('teams', function(){
    return Teams.find( {}, { sort: { order: 1 } } );
});

Meteor.publish('teamMembers', function(){
    return TeamMembers.find({});
});

// Meteor.publish('teamMembers', function(member){
//     let cursor = TeamMembers.find({teamMember: member});
//     Counts.publish(this, 'teamMemberCount', cursor);
// });

Meteor.publish('onCallPeriod', function(){
    return OnCallPeriod.find({});
});

Meteor.publish('getRostaById', function(rostaId){
    if(rostaId) {
        return [
            Rostas.find({'_id': rostaId}),
            OnCallPeriod.find({rostaId: rostaId}),
            TeamMembers.find({'rostaId': rostaId})
        ];
    }
});

Meteor.publish('getAllRosters', function(){
    return Rostas.find({});
});


Meteor.publishComposite("teamRosta", {

        find: function() {
            return Rostas.find({'roastaId': 1});
        },
        children: [
            {
                find: function() {
                    return TeamMembers.find({'rostaId': 1});
                }
            }
        ]

});