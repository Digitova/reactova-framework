import { combineReducers } from 'redux'
import * as ThemeReducer from './ThemeReducer'

export default combineReducers(Object.assign(
	ThemeReducer
))
