import * as MostStarredRepoConstants from '../constants/MostStarredGitRepoConstants';

const assign = Object.assign || require('object.assign');


const initialState = {
    topStarredRepo:[],
    isFetching : false,
    isFetched : false
};

// Takes care of changing the application state
export default function MostStarredRepoReducer(state = initialState, action) {
     switch (action.type) {

        case MostStarredRepoConstants.GET_MOST_STARRED_REPOS_SUCCESS :
            return assign({}, state, {
                    topStarredRepo: action.items,
                    isFetched : true,
                    isFetching : false
                });
            break;
        case MostStarredRepoConstants.GET_MOST_STARRED_REPOS_REQUEST :
            return assign({}, state, {
                    isFetching : true
                });
            break;
        case MostStarredRepoConstants.GET_MOST_STARRED_REPOS_FAILURE :
            return assign({}, state, {
                    isFetched : false,
                    isFetching : false,
                   
                });
            break;
            
        default:
            return state;
    }
}