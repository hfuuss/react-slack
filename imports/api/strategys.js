import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Strategys = new Mongo.Collection('strategys');

if (Meteor.isServer) {

    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('strategys', function strategyPublication() {
        return Strategys.find();//返回所有的策略list
    });

}

    Meteor.methods({
        'strategys.insert'(name, text, stockName, stockNum) {
          //  console.log('strategys.insert', name);
            check(name, String);
            check(text, String);
            check(stockName, String);
            check(stockNum, String);


            // Make sure the user is logged in before inserting a task
            if (!this.userId) {
                throw new Meteor.Error('not-authorized');
            }

            Strategys.insert({
                name,
                text,
                createdAt: new Date(),
                owner: this.userId,
                stockName,
                stockNum,
            });
        },

        'strategys.remove'(Id) {
            check(Id, String);

           // const strategy = Strategys.findOne(strategysId);

            Strategys.remove(Id);
        },

    });






