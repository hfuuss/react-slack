import React from 'react';
import { Router, Route, browserHistory,hashHistory } from 'react-router';

// route components
import AppContainer from '../../ui/containers/AppContainer.jsx';

export const renderRoutes = () => (
    <Router history={hashHistory}>
        <Route path="/" component={AppContainer}>

         </Route>
    </Router>
);
