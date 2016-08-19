import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import MsgList from '../page/MsgList.jsx';

import { Msgs } from '../../api/message.js';

export default MsgsContainer = createContainer(() => {

    Meteor.subscribe('msgs');
    // console.log(Strategys);
    //console.log(Tasks);

    return {
        msgs: Msgs.find().fetch(),
        currentUser: Meteor.user(),
    };

}, MsgList);