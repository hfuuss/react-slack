import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import '../imports/startup/accounts-config.js';
//import { renderRoutes } from '../imports/startup/client/routes.jsx';
import App from '../imports/ui/layouts/App.jsx';

import { renderRoutes } from '../imports/startup/client/routes.jsx';


Meteor.startup(() => {
  render(renderRoutes(), document.getElementById('app'));
  //render(<App />, document.getElementById('app'));
 // console.log(renderRoutes());
});
