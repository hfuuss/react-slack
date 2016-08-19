import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';

import RecordList from '../page/RecordList.jsx';

import { Record } from '../../api/record.js';

export default createContainer(() => {
    Meteor.subscribe('record');
     // console.log(Record);
    //console.log(Tasks);

    return {
        record:Record.find().fetch(),
        currentUser: Meteor.user(),
    };

}, RecordList);