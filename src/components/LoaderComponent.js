/*
 * LoaderComponent
 *
 * Loader component is common for all the pages for showing loading indecator
 *
 */

import React, { Component} from 'react';

export default class LoaderComponent extends Component {
	render() {
    	return (
    		<span className="loader"></span>
		);
  	}
}