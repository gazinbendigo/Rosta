/**
 * Created by holly on 14/02/16.
 */

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    name: 'index',
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

FlowRouter.route('/view/:id', {
    name: 'view',
    action: function(params) {
        BlazeLayout.render("baseLayout", {header: 'header', main: 'viewRosta', footer: 'footer'});
    }
});



FlowRouter.route('/test', {
    name: 'test',
    action: function() {
        BlazeLayout.render("baseLayout", {header: "header", main: "test", footer: "footer"});
    }
});

FlowRouter.route('/dropdown', {
    name: 'dropdown',
    action: function() {
        BlazeLayout.render("dropdowns");
    }
});