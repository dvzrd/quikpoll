Template.postTest.helpers({
  postTestSchema: function() {
    return postTest;
  },
  messages: function() {
    return Meteor.subscribe('messages');
  }
});

AutoForm.addHooks(null, {
  onSubmit: function (insertDoc, updateDoc, currentDoc) {
    console.log('onSubmit: ' + arguments);
  },
  onSuccess: function(operation, result) {
    console.log('onSuccess: ' + arguments);
  }
});
