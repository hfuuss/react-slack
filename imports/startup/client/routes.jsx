import React from 'react';
import {IndexRoute, Router, Route, browserHistory,hashHistory } from 'react-router';
import { Session } from 'meteor/session'

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';
import RecordContainer from '../../ui/containers/RecordContainer.jsx';
import MsgsContainer from '../../ui/containers/MsgsContainer.jsx';
import RuniningStrategyContainer from '../../ui/containers/RunningStrategyContainer.jsx';
import NotifyContainer from '../../ui/containers/NotifyContainer.jsx';

export const renderRoutes = () => (
    
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>
            <IndexRoute component={RecordContainer}/>
            <Route path="/record" component={RecordContainer}/>
            <Route path="/message" component={MsgsContainer}/>
            <Route path="/running" component={RuniningStrategyContainer}/>
            <Route path="/notify" component={NotifyContainer} />
            <Route path="/message/:channel" component={MsgsContainer}/>
         </Route>
    </Router>

);
