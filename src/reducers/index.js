import { combineReducers } from 'redux'
import * as TestReducer from './testReducer'

export default combineReducers(Object.assign(
	TestReducer
))
