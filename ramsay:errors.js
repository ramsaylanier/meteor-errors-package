//create local Meteor collection (client-only) to store errors
Errors = {
  // Local (client-only) collection
  collection: new Mongo.Collection(null),

  throw: function(message) {
    Errors.collection.insert({message: message, seen: false})
  }
};

Template.errors.helpers({
	errors: function(){
		return Errors.collection.find();
	}
});

Template.error.rendered = function(){
	$('.content').addClass('with-errors');
	var error = this.data;
	Meteor.defer(function(){
		Errors.collection.update(error._id, {$set: {seen: true}});
	});

	setTimeout(function(){
		$('.alert-error').fadeOut(1500);
	}, 1500);

	setTimeout(function(){
		$('.content').removeClass('with-errors');
	}, 2700);
}

Template.error.events({
	'click .close-btn': function(e){
		$('.content').removeClass('with-errors');	
		$(e.target).parent('.alert-error').remove();
	}
});