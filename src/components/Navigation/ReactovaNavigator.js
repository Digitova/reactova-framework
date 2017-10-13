import React from 'react';
import { TabNavigator } from 'react-navigation';
import BaseNavigator from './BaseNavigator'


const ReactovaNavigator = (navigationSchema,LoadingScreen) => {
	const routerRouteConfig = {
		Loading: {
			screen: LoadingScreen,
		},
		BaseNavigator: {
			path: 'base',
			screen: BaseNavigator(navigationSchema),
		},
	}
	const routerNavigationConfig = {
		initialRouteName: 'Loading',
		navigationOptions:{
			tabBarVisible: false
		}
	}

	return TabNavigator(routerRouteConfig,routerNavigationConfig);
};

export default ReactovaNavigator;




