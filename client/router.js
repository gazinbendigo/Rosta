/**
 * Created by holly on 14/02/16.
 */

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    name: 'home',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'homePage', footer: 'footer'});
    }
});

FlowRouter.route('/staff', {
    name: 'staff',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageStaffMembers', footer: 'footer'});
    }
});

FlowRouter.route('/groups', {
    name: 'groups',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageGroups', footer: 'footer'});
    }
});

FlowRouter.route('/rosta', {
    name: 'rosta',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageRosta', footer: 'footer'});
    }
});