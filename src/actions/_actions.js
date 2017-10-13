import * as ThemeActions from "./ThemeActions"
import * as StoreActions from "./StoreActions"

export const SET_THEME = 'SET_THEME';

export const ReactovaActions = Object.assign({},
	ThemeActions,
	StoreActions
);
