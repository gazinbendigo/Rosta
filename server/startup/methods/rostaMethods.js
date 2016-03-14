/**
 * Created by holly on 20/02/16.
 */

Meteor.methods({
    addRosta(rosta) {

        try {
            var rostaId = Rostas.insert(rosta);
            return rostaId;
        }
        catch(exception){
            return exception;
        }
    },

    findRostaById(rostaId){
        try {
            return [
                Rosta.find({'_id': rostaId}),
                TeamMembers.find({'rostaId': rostaId})
            ]
        }
        catch(exception){
            return exception;
        }
    }


});