import createReducer from '../library/redux/createReducer'
import {SET_THEME} from '../actions/_actions'
import DefaultTheme from '../../config/theme'

export const theme = createReducer(state = DefaultTheme, {
	[SET_THEME](state, action){
		return Object.assign({}, state, action.theme)
	}
})