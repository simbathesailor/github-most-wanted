import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import {routerReducer} from 'react-router-redux';
import MostStarredRepoReducer from './MostStarredGitRepoReducer';
import MostForkedRepoReducer from './MostForkedGitRepoReducer';

const rootReducer = combineReducers({
  fuelSavings,
  MostStarredRepoReducer,
  MostForkedRepoReducer,  
  routing: routerReducer
});

export default rootReducer;
