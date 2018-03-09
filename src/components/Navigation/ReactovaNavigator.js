import React from 'react';
import { TabNavigator } from 'react-navigation';
import BaseNavigator from './BaseNavigator'


const ReactovaNavigator = (navigationSchema, LoadingScreen = null, ladingScreenIsDefaultRoute = true) => {
	let loading = {}
	const baseNavigatorName = 'BaseNavigator'
	let initialRouteName = baseNavigatorName
	if(LoadingScreen) {
		loading = {
			Loading: {
				screen: LoadingScreen
			}
		}
		initialRouteName = ladingScreenIsDefaultRoute ? 'Loading' : initialRouteName
	}

	const routerRouteConfig = {
		...loading,
		[baseNavigatorName]: {
			path: 'base',
			screen: BaseNavigator(navigationSchema),
		},
	}
	const routerNavigationConfig = {
		initialRouteName,
		navigationOptions:{
			tabBarVisible: false
		}
	}
	return TabNavigator(routerRouteConfig,routerNavigationConfig);
};

export default ReactovaNavigator;
