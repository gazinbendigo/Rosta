/**
 * Created by holly on 22/02/16.
 */


Meteor.startup(function(){
    OnCallPeriod.remove({});
    Rostas.remove({});
    TeamMembers.remove({});

    // if(OncallPeriod.find().count() === 0){
    //     var initialDate = "2016-02-25";
    //     var startDate = moment();
    //     var endDate = moment();
    //     for(var i = 0; i < 20; i++){
    //         if(i === 0){
    //             startDate = moment(initialDate);
    //             endDate = moment(initialDate, 'YYYY-MM-DD').add(14, 'days');
    //             //console.log("StartDate: " + startDate.format('DD-MM-YYYY'));
    //             //console.log("EndDate: " + endDate.format('DD-MM-YYYY'));
    //         }
    //         else {
    //             startDate = startDate.add(14, 'days');
    //             endDate = endDate.add(14, 'days');
    //             //console.log("StartDate: " + startDate.format('DD-MM-YYYY'));
    //             //console.log("EndDate: " + endDate.format('DD-MM-YYYY'));
    //         }
    //         OncallPeriod.insert({
    //             groupId: (i + 1) % 4,
    //             staffId: (i + 1) % 4,
    //             startDate: startDate.format('DD-MM-YYYY'),
    //             endDate: endDate.format('DD-MM-YYYY'),
    //             orderId: (i + 1) % 4
    //         });
    //
    //     }
    // }

    if(Rostas.find({}).count() === 0){
        Rostas.insert(
            { _id: "824YgyKXggaftp4v", rostaId : 1, rostaName : "IT Database Services", rostaStartDate : "08-03-2016", duration: "F" }
        );

        Rostas.insert(
            { _id: "NGS2Y9S7onC8NgtKi", rostaId : 2, rostaName : "ICC Integration Core Competency", rostaStartDate : "28-03-2016", duration: "W" },
        );

        Rostas.insert(
            { _id: "f52D2MFoADe8RtHoX", rostaId : 3, rostaName : "IT Middleware", rostaStartDate : "31-03-2016", duration: "M" }
        );
    }

    if(TeamMembers.find({}).count() === 0) {
        TeamMembers.insert(
            { _id: "mNNnMaGAgkKnpWKuB", firstName : "Gareth", lastName : "Baker", id : 1 }

        );

        TeamMembers.insert(
            { _id: "LZSz7JAWmRvBgjirR", firstName : "Shirin", lastName : "Iraqi", id : 2  }

        );

        TeamMembers.insert(
            { _id: "bEETJN5b23BcSwYAj", firstName : "Storm", lastName : "Trooper", id : 3  }

        );

        TeamMembers.insert(
            { _id: "KjSA9rJa3cS6RnAHS", firstName : "Sith", lastName : "Lord",  id : 4  }

        );

        TeamMembers.insert(
            { _id: "ENdtdpp9mKS6E3svs", firstName : "Luke", lastName : "Skywalker",  id : 5  }

        );

        TeamMembers.insert(
            { _id: "r6uG2NemjZtQATAhm", firstName : "General", lastName : "Solo",  id : 6  }

        );
    }

    if(OnCallPeriod.find().count() === 0){
        OnCallPeriod.insert(
            { startDate: "08-03-2016", teamMemberId: "mNNnMaGAgkKnpWKuB", orderId: 1, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "21-04-2016", teamMemberId: "mNNnMaGAgkKnpWKuB", orderId: 4, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "02-06-2016", teamMemberId: "mNNnMaGAgkKnpWKuB", orderId: 7, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "24-03-2016", teamMemberId: "LZSz7JAWmRvBgjirR", orderId: 2, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "05-05-2016", teamMemberId: "LZSz7JAWmRvBgjirR", orderId: 5, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "16-06-2016", teamMemberId: "LZSz7JAWmRvBgjirR", orderId: 8, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "07-04-2016", teamMemberId: "bEETJN5b23BcSwYAj", orderId: 3, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "19-05-2016", teamMemberId: "bEETJN5b23BcSwYAj", orderId: 6, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "30-06-2016", teamMemberId: "bEETJN5b23BcSwYAj", orderId: 9, rostaId: "NGS2Y9S7onC8NgtKi" }
        );

        OnCallPeriod.insert(
            { startDate: "14-07-2016", teamMemberId: "KjSA9rJa3cS6RnAHS", orderId: 10, rostaId: "f52D2MFoADe8RtHoX" }
        );

        OnCallPeriod.insert(
            { startDate: "28-07-2016", teamMemberId: "ENdtdpp9mKS6E3svs", orderId: 11, rostaId: "f52D2MFoADe8RtHoX" }
        );

        OnCallPeriod.insert(
            { startDate: "11-08-2016", teamMemberId: "r6uG2NemjZtQATAhm", orderId: 12, rostaId: "f52D2MFoADe8RtHoX" }
        );
    }

})

