/**
 * Created by adm9360 on 18/02/2016.
 */


Template.registerHelper('isValidString', function(param){
    if(param != null && param != undefined){
        var s = param.trim();
        return s.length > 0;
    }
    return false;
});