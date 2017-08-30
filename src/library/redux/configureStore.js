import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import {AsyncStorage} from 'react-native'
import { default as thunk } from 'redux-thunk';
import { NavigationActions } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux';
import {persistStore, autoRehydrate, purgeStoredState} from 'redux-persist'
import ReactovaReducers from '../../reducers/_reducers'
import * as capitalizeFirstLetter from '../strings/capitalizeFirstLetter'  // do not remove.


const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

export default function configureStore(initialState, appReducers, navigationReducers, onHydrationComplete) {

	const combinedReducers = combineReducers({reactova: ReactovaReducers, app: appReducers, nav: navigationReducers})

	const enhancer = compose(
		applyMiddleware(
			thunk,
			loggerMiddleware,
		),

		autoRehydrate()
	);
	const store = createStore(combinedReducers, enhancer);

	persistStore(store, {storage: AsyncStorage, blacklist: ['nav']},() => {
		onHydrationComplete(store)
		console.log("hydration complete");
	});

	// purgeStoredState({storage: AsyncStorage}).then(() => {
	// 	console.log('purge completed')
	// }).catch(() => {
	// 	console.log('purge of someReducer failed')
	// })
	return store;
}

