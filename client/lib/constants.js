// Define App Constants

if (Meteor.App) {
  throw new Meteor.Error('Meteor.App already defined? see client/lib/constants.js');
}

Meteor.App = {
  NAME: 'Quik Poll | SMS Social Polling',
  DESCRIPTION: 'A handy app that lets you judge two items via SMS or Web UI'
};
