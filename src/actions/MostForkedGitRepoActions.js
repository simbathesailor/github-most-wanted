
import * as MostForkedRepoConstants from '../constants/MostForkedGitRepoConstants';

import AppService from '../AppServices/AjaxService';


const  getTopForkedRepos = (url)=> {
	console.log('url is',url);
	return (dispatch) => {
		dispatch(getMostForkedFetchRequest());
		

		 function callback(success, err){
			
			if (success) {
				dispatch(getMostForkedFetchSuccess(success));
				
			}
			else{
				dispatch(getMostForkedFetchFailure(err));
			}
		};
		var reqUrl = url;
		AppService.getData(reqUrl,callback);

	}
}


const getMostForkedFetchSuccess = (newState)=> {
  	return { type: MostForkedRepoConstants.GET_MOST_FORKED_REPOS_SUCCESS, payload : newState  };
}
const getMostForkedFetchRequest = ()=> {
  	return { type: MostForkedRepoConstants.GET_MOST_FORKED_REPOS_REQUEST};
}
const getMostForkedFetchFailure = (error)=>{
  	return { type: MostForkedRepoConstants.GET_MOST_FORKED_REPOS_FAILURE};
}


export {
	getTopForkedRepos
}