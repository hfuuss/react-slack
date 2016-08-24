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
        'strategys.insert'(text) {
          //  console.log('strategys.insert', name);

            check(text, String);


            // Make sure the user is logged in before inserting a task
            if (!this.userId) {
                throw new Meteor.Error('not-authorized');
            }

            Strategys.insert({
                name,
                text:'ss',
                createdAt: new Date(),
                owner: this.userId,
                stockName:'ss',
                stockNum:'ss',
            });
        },

        'strategys.remove'(Id) {
            check(Id, String);

           // const strategy = Strategys.findOne(strategysId);

            Strategys.remove(Id);
        },


        'strategys.setPrivate'(strategysId, setToPrivate) {
            check(strategysId, String);
            check(setToPrivate, Boolean);

            const Strategy = Strategys.findOne(strategysId);

            // Make sure only the task owner can make a task private
            //if (Strategy.owner !== this.userId) {
            //    throw new Meteor.Error('not-authorized');
            //}

            Strategys.update(strategysId, { $set: { private: setToPrivate } });
        },

        //ddp-server

        newChannel: function (channel) {
            console.log(channel);
            Strategys.insert({
                name: channel,
                private:false
            });
        },




    });






