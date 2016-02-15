/**
 * Created by adm9360 on 15/02/2016.
 */

BlazeLayout.setRoot('body');

FlowRouter.route('/', {
    name: 'home',
    action: function(){
        BlazeLayout.render("baseLayout", {header: "header", main: "addGroup", footer: "footer"});
    }
});