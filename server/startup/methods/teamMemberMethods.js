/**
 * Created by holly on 18/02/16.
 */


//Meteor.methods({
//    addTeamMember: (teamMember){
//        try {
//
//            TeamMembers.insert(teamMember);
//        }
//        catch(exception) {
//
//        }
//        //check(params, {
//        //    firstName: String,
//        //    lastName: String,
//        //    mobileNumber: Number,
//        //    order: Number
//        //});
//
//    }
//});

Meteor.methods({
    addTeamMember( teamMember ) {
        //check( comment, Comments.simpleSchema() );

        try {
            var memberId = TeamMembers.insert( teamMember );
            return memberId;
        } catch( exception ) {
            return exception;
        }
    }
});
