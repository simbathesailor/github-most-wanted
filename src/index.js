/* eslint-disable import/default */

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { AppContainer } from 'react-hot-loader';
import Root from './components/Root';
import rootReducer from './reducers/index';
import configureStore from './store/configureStore';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//const store = configureStore();
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(rootReducer);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Root store={store} history={history}/>,
  document.getElementById('app')
);


// if (module.hot) {
//   module.hot.accept('./components/Root', () => {
//     const NewRoot = require('./components/Root').default;
//     render(
//       <AppContainer>
//         <NewRoot store={store} history={history} />
//       </AppContainer>,
//       document.getElementById('app')
//     );
//   });
// }
