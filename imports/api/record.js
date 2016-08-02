import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Record = new Mongo.Collection('record');

//if (Meteor.isServer) {
//    // This code only runs on the server
//    // Only publish tasks that are public or belong to the current user
//    Meteor.publish('tasks', function tasksPublication() {
//        return Tasks.find({
//            $or: [
//                { private: { $ne: true } },
//                { owner: this.userId },
//            ],
//        });
//    });
//}

Meteor.methods({
    'record.insert'(text,agentId) {
        check(text, String);
        check(agentId, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Record.insert({
            text,
            createdAt: new Date(),
            owner: this.userId,
            agentId: agentId,
        });
    },
    'record.remove'(msgId) {
        check(msgId, String);

        const para = Record.findOne(msgId);
        if (para.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }

        Record.remove(msgId);
    },

});
