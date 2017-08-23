import { createLogger } from 'redux-logger';
import { combineReducers } from 'redux';
import { default as thunk } from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import ReactovaReducers from '../../reducers/_reducers'

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ });

export default function configureStore(initialState, appReducers, navigationReducers) {

	const combinedReducers = combineReducers({reactova: ReactovaReducers, app: appReducers, nav: navigationReducers})

	const enhancer = compose(
		applyMiddleware(
			thunk,
			loggerMiddleware,
		)
	);
	return createStore(combinedReducers, enhancer)
}

