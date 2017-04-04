import * as MostForkedRepoConstants from '../constants/MostForkedGitRepoConstants';

const assign = Object.assign || require('object.assign');


const initialState = {
    topForkedRepo:[],
    isFetching : false,
    isFetched : false
};

// Takes care of changing the application state
export default function MostForkedRepoReducer(state = initialState, action) {
     switch (action.type) {

        case MostForkedRepoConstants.GET_MOST_FORKED_REPOS_SUCCESS :
            return assign({}, state, {
                    topForkedRepo: action.items,
                    isFetched : true,
                    isFetching : false
                });
            break;
        case MostForkedRepoConstants.GET_MOST_FORKED_REPOS_REQUEST :
            return assign({}, state, {
                    isFetching : true
                });
            break;
        case MostForkedRepoConstants.GET_MOST_FORKED_REPOS_FAILURE :
            return assign({}, state, {
                    isFetched : false,
                    isFetching : false,
                   
                });
            break;
            
        default:
            return state;
    }
}