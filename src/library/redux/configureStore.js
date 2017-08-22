import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactovaReducers from '../../reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

export default function configureStore(initialState, reducers) {
	console.log(ReactovaReducers);
	console.log(reducers);
	const combinedReducers = combineReducers({
		ReactovaReducers: ReactovaReducers,
		AppReducers: reducers
	})
	const enhancer = compose(
		applyMiddleware(
			thunk,
			loggerMiddleware,
		)
	);
	return createStore(combinedReducers, enhancer)
}

