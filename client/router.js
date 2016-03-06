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

FlowRouter.route('/team-members', {
    name: 'teamMember',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageTeamMembers', footer: 'footer'});
    }
});

FlowRouter.route('/team', {
    name: 'team',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageTeams', footer: 'footer'});
    }
});

FlowRouter.route('/rosta', {
    name: 'rosta',
    action: function() {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'manageRosta', footer: 'footer'});
    }
});