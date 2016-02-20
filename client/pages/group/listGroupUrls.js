/**
 * Created by holly on 20/02/16.
 */

Template.listGroupUrls.onCreated({
    groupUrls: function() {
        let allGroups = [];
        allGroups = Groups.find().fetch();
        let cols = [];
        let noCols = 3;
        let count = 0;
        while(allGroups.length > noCols)
        {
            count = allGroups.length;
            if(count == 1)
            {
                cols.push({col: allGroups.slice(0, 1)});
                allGroups = allGroups.slice(1);
            }
            else
            {
                cols.push({col: allGroups.slice(0, noCols)});
                allGroups = allGroups.slice(noCols);
            }

        }
        cols.push({col: allGroups});
        return cols;
    }
});