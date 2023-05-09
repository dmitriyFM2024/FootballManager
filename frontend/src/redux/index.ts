import { combineReducers, configureStore } from '@reduxjs/toolkit';
import mainReducer from './reducers/index';

const rootReducer = combineReducers({
	mainReducer,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
