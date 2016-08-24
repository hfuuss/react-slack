import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const RunningStrategys = new Mongo.Collection('runningStrategys');

if (Meteor.isServer) {

    // This code only runs on the server
    // Only publish tasks that are public or belong to the current user
    Meteor.publish('runningStrategys', function strategyPublication() {
        return RunningStrategys.find();//返回所有的策略list
    });

}

Meteor.methods({
    'runningStrategys.insert'(name) {
        //  console.log('strategys.insert', name);
        check(name, String);



        // Make sure the user is logged in before inserting a task
        if (!this.userId) {
            throw new Meteor.Error('not-authorized');
        }

        RunningStrategys.insert({
            name,
            text:'ss',
            createdAt: new Date(),
            owner: this.userId,
            stockName:'ss',
            stockNum:'ss',
            private: false,//策略是否正在进行
        });
    },

    'runningStrategys.remove'(Id) {
        check(Id, String);

        // const strategy = Strategys.findOne(strategysId);

        RunningStrategys.remove(Id);
    },


    'runningStrategys.update'(runningStrategysId,name,setToPrivate) {
        check(runningStrategysId, String);
        check(name, String);
        check(setToPrivate, Boolean);

        if(setToPrivate){
            RunningStrategys.insert({
                _id:runningStrategysId,
                name:name,
                createdAt: new Date(),
                owner: this.userId,
                stockName:'ss',
                stockNum:'ss',
                private: setToPrivate,//策略是否正在进行
            });

        }
        else{
            RunningStrategys.remove(runningStrategysId);
        }


    },







});






