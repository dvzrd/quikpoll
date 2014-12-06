Meteor.publish(null, function () {
  return Messages.find();
});
