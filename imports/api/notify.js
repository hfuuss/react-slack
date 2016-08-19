import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Notify = new Mongo.Collection('notify');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('notify', function tasksPublication() {
        return Notify.find();
    });
}

Meteor.methods({
    'notify.insert'(text,strategyId,messageId) {
        check(text, String);
        check(strategyId, String);
        check(messageId, String);


        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Notify.insert({
            text,
            strategyId,
            messageId,
            createdAt: new Date(),
            owner: this.userId,
            isRead:false,//默认没有被读取
        });
    },
    'notify.remove'(Id) {
        check(msgId, String);

        const msg = Msgs.findOne(msgId);
        if ( msg.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }

        Notify.remove(msgId);
    },

});
