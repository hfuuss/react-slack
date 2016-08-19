import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Record = new Mongo.Collection('record');

if (Meteor.isServer) {
    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('record', function recordPublication() {
        return Record.find();
    });
}

Meteor.methods({
    'record.insert'(name, text,stockName, stockNum) {
        //  console.log('strategys.insert', name);
        check(name, String);
        check(text, String);
       // check(createdAt,number );
        check(stockName, String);
        check(stockNum, String);

        // Make sure the user is logged in before inserting a task
        if (! this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        Record.insert({
            name,
            text,
            createdAt: new Date(),
            owner: this.userId,
            stockName,
            stockNum,
        });
    },
    'record.remove'(Id) {
        check(Id, String);

        Record.remove(Id);
    },

});
