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
    }


});