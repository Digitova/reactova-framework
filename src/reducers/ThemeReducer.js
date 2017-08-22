import createReducer from '../library/redux/createReducer'
import * as types from '../actions/_actionTypes'
import DefaultTheme from '../../config/theme'

export const theme = createReducer(state = DefaultTheme, {
	[types.SET_THEME](state, action){
		return Object.assign({}, state, action.theme)
	}
})