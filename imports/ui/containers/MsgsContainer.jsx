import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import MsgList from '../page/MsgList.jsx';

import { Msgs } from '../../api/message.js';

import { Session } from 'meteor/session'

export default MsgsContainer = createContainer(() => {

    Meteor.subscribe('msgs');
    // console.log(Strategys);
    //
    //Session.set('channel', this.props.params.channel);
   // console.log(this.params.channel);

    return {
        msgs: Msgs.find().fetch(),
        currentUser: Meteor.user(),
    };

}, MsgList);