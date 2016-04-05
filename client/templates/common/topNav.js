/**
 * Created by holly on 29/03/16.
 */


Template.topNav.helpers({
	pathToLink: function(path) {
		let url = FlowRouter.path(path);
		return url;
	}
});