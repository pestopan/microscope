


Template.layout.helpers({
	pageTitle: function() { return Session.get('pageTitle'); },
	// userEmail: function() { return Meteor.user().emails[0].address; }
	userEmail: function() { return Meteor.user().username; }
});