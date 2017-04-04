import React, { Component} from 'react';
import {Link} from 'react-router';
import MostStarredGitRepoComponent from './MostStarredGitRepo';
import MostForkedGitRepoComponent from './MostForkedGitRepoComponent';


class MostWantedGitComponent extends Component {
	
	render(){
		return (
	    <div>
	      <h1>Most Wanted Github Repos</h1>
	     	<MostForkedGitRepoComponent/>
	     	<MostStarredGitRepoComponent /> 
	     
	    </div>
	  );
	}

}
export default MostWantedGitComponent;
