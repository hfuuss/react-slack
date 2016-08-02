import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';
import { Tasks } from '../../api/tasks.js';

import { Paras } from '../../api/para.js';

export default createContainer(() => {
    Meteor.subscribe('tasks');
    Meteor.subscribe('paras');

    return {
        paras: Paras.find().fetch(),
        tasks: Tasks.find({}, { sort: { createdAt: -1 } }).fetch(),
        incompleteCount: Tasks.find({ checked: { $ne: true } }).count(),
        currentUser: Meteor.user(),
    };
   // console.log(currentUser);
}, App);