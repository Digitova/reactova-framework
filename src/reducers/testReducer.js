import createReducer from '../library/redux/createReducer';
import * as types from '../actions/_actionTypes';

export const authenticatedStatus = createReducer(false, {
	[types.LOGIN_ATTEMPT](state, action){
		return action.status
	}
});