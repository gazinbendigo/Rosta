/**
 * Created by holly on 29/03/16.
 */


Template.dropdowns.helpers({
	pathToLink: function(path) {
		let url = FlowRouter.path(path);
		return url;
	}
});