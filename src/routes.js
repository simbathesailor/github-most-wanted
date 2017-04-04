import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import MostWantedGitComponent from './components/MostWantedGitComponent';
import FuelSavingsPage from './containers/FuelSavingsPage'; // eslint-disable-line import/no-named-as-default
import AboutPage from './components/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={MostWantedGitComponent}>
    
  </Route>
);
