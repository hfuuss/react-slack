import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Agents = new Mongo.Collection('agents');

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
    'agents.insert'(description,agentName,parameter,outputs) {//插入agent的方法
        check(description, String);
        check(agentName, String);
        check(parameter, String);
        check(outputs, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Agents.insert({
            description,
            createdAt: new Date(),
            owner: this.userId,
            agentName: agentName,
            parameter: parameter,
            output: outputs,
        });
    },
    'tasks.remove'(agentId) {//移除agent
        check(agentId, String);

        const agent = Tasks.findOne(agentId);
        if ( agent.owner !== this.userId) {
            // If the task is private, make sure only the owner can delete it
            throw new Meteor.Error('not-authorized');
        }

        Agents.remove(agentId);
    },

});
