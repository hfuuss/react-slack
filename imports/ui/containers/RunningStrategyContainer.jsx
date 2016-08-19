import { Meteor } from 'meteor/meteor';
import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import RunningStrategyList from '../page/RunningStrategyList.jsx';

import { RunningStrategys } from '../../api/runningStrategy.js';

export default RuniningStrategyContainer = createContainer(() => {

    Meteor.subscribe('runningStrategys');
    // console.log(Strategys);
    //console.log(Tasks);

    return {
        runningStrategys: RunningStrategys.find().fetch(),
        currentUser: Meteor.user(),
    };

}, RunningStrategyList);