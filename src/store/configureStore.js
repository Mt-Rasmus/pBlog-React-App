
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import postsReducer from '../reducers/posts';
import filtersReducer from '../reducers/filters';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store creation
export default () => {
   const store = createStore(
      combineReducers({
         auth: authReducer,
         posts: postsReducer,
         filters: filtersReducer
      }), 
      composeEnhancers(applyMiddleware(thunk))
   );

   return store;
};
