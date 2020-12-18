
import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import empReducers from './Reducers/empReducers';

const reducer = combineReducers({
  form: reduxFormReducer, 
  empReducers: empReducers, 
});
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer);

export default store;