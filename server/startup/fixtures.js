/**
 * Created by holly on 22/02/16.
 */


Meteor.startup(function(){
    StaffMembers.remove({});
    Groups.remove({});
    OncallPeriod.remove({});

    if(OncallPeriod.find().count() === 0){
        var initialDate = "2016-02-25";
        var startDate = moment();
        var endDate = moment();
        for(var i = 0; i < 20; i++){
            //console.log(moment(initialDate).format('DD-MM-YYYY'));
            //console.log(moment("2014-02-27T10:00:00").format('DD-MM-YYYY'));//Date.format('DD-MM-YYYY'));

            if(i === 0){
                startDate = moment(initialDate);
                endDate = moment(initialDate, 'YYYY-MM-DD').add(14, 'days');
                console.log("StartDate: " + startDate.format('DD-MM-YYYY'));
                console.log("EndDate: " + endDate.format('DD-MM-YYYY'));
            }
            else {
                startDate = startDate.add(14, 'days');
                endDate = endDate.add(14, 'days');
                console.log("StartDate: " + startDate.format('DD-MM-YYYY'));
                console.log("EndDate: " + endDate.format('DD-MM-YYYY'));
            }
            OncallPeriod.insert({
                groupId: (i + 1) % 4,
                staffId: (i + 1) % 4,
                startDate: startDate.format('DD-MM-YYYY'),
                endDate: endDate.format('DD-MM-YYYY'),
                orderId: (i + 1)
            });

        }
    }
})

