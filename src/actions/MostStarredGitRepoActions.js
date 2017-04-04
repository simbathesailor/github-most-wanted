
import * as MostStarredRepoConstants from '../constants/MostStarredGitRepoConstants';

import AppService from '../AppServices/AjaxService';


const  getTopStarredRepos = (url)=> {
	return (dispatch) => {
		dispatch(getMostStarredFetchRequest());
		
		function callback(success, err){
			
			if (success) {
				dispatch(getMostStarredFetchSuccess(success));
				
			}
			else{
				dispatch(getMostStarredFetchFailure(err));
			}
		};
		var reqUrl = url;
		AppService.getData(reqUrl,callback);

	}
}


const getMostStarredFetchSuccess = (newState)=> {
  	return { type: MostStarredRepoConstants.GET_MOST_STARRED_REPOS_SUCCESS, payload : newState  };
}
const getMostStarredFetchRequest = ()=> {
  	return { type: MostStarredRepoConstants.GET_MOST_STARRED_REPOS_REQUEST};
}
const getMostStarredFetchFailure = (error)=>{
  	return { type: MostStarredRepoConstants.GET_MOST_STARRED_REPOS_FAILURE};
}


export {
	getTopStarredRepos
}