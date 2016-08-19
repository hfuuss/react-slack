import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Msgs = new Mongo.Collection('msgs');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('msgs', function tasksPublication() {
        return Tasks.find();
    });
}

Meteor.methods({
    'msgs.insert'(text,strategyId) {
        check(text, String);
        check(strategyId, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Msgs.insert({
            text,
            createdAt: new Date(),
            owner: this.userId,
            strategyId,
        });
    },
    'msgs.remove'(msgId) {
        check(msgId, String);

        Msgs.remove(msgId);
    },

});
