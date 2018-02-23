import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import {AsyncStorage} from 'react-native'
import { default as thunk } from 'redux-thunk';
import { NavigationActions } from 'react-navigation'
import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import {persistStore, autoRehydrate, purgeStoredState} from 'redux-persist'
import ReactovaReducers from '../../reducers/_reducers'
import {createReactNavigationReduxMiddleware} from "react-navigation-redux-helpers";

import * as capitalizeFirstLetter from '../strings/capitalizeFirstLetter'  // do not remove.

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });
const reactNavigationMiddleware = createReactNavigationReduxMiddleware(
	"root",
	state => state.nav,
);

export default function configureStore(initialState, appReducers, devToolOptions, onHydrationComplete, persistanceBlacklist) {
	const combinedReducers = combineReducers(Object.assign(ReactovaReducers, appReducers))
	const composeEnhancers = composeWithDevTools({name: devToolOptions.instanceName})

	const enhancer = composeEnhancers(
		applyMiddleware(
			thunk,
			reactNavigationMiddleware,
			loggerMiddleware,
		),
		autoRehydrate()
	);
	const store = createStore(combinedReducers, enhancer);

	persistStore(store, {storage: AsyncStorage, blacklist: ['nav', ...persistanceBlacklist]},() => {
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