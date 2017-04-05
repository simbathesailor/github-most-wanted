import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import routes from '../routes';
import { Router } from 'react-router';

export default class Root extends Component {
  render() {
   console.log('store state',this.props.store.getState())
  return (
      <Provider store={this.props.store}>
        <Router store={this.props.store} history={this.props.history} routes={routes} />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
