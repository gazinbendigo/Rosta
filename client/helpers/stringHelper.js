/**
 * Created by adm9360 on 18/02/2016.
 */

/**
 * 
 */
Template.registerHelper('isValidString', function(param){
    if(param != null && param != undefined){
        var s = param.trim();
        return s.length > 0;
    }
    return false;
});

/**
 * Convenience function to trim spaces from a string.
 *
 * @param The String to be trimmed
 * @return The String to be trimmed
 */
Template.registerHelper('trimString', function(param){
    return _.isString(param) ? param.trim() : param;
});