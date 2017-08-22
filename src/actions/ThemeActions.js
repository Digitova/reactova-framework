import * as types from './_actionTypes';

export function setTheme(theme){
	return {
		type: types.SET_THEME,
		theme
	}
}
