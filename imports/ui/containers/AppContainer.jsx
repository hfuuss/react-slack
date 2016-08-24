import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Strategys } from '../../api/strategys.js';


export default AppContainer = createContainer(() => {

    Meteor.subscribe('strategys');
    Meteor.subscribe('runningStrategys');
     // console.log(Strategys);
    //console.log(Tasks);

    return {
	    strategys: Strategys.find().fetch(),
        currentUser: Meteor.user(),
    };
 
}, App);