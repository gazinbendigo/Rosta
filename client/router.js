/**
 * Created by holly on 14/02/16.
 */

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageStaffMembers', footer: 'footer'});
    }
});