Messages = new Mongo.Collection('messages');

Messages.allow({
  insert: function () {
    return true;
  },
  update: function () {
    return true;
  },
  remove: function () {
    return true;
  },
  fetch: []
});

Messages.attachSchema(new SimpleSchema({
  message: {
    type: String,
    label: 'Your message',
    max: 250
  }
}));
