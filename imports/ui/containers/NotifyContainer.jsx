import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import NotifyList from '../page/NotifyList.jsx';

import { Notify } from '../../api/notify.js';

export default NotifyContainer = createContainer(() => {

    Meteor.subscribe('notify');
    // console.log(Strategys);
    //console.log(Tasks);

    return {
        notify: Notify.find().fetch(),
        currentUser: Meteor.user(),
    };

}, NotifyList);