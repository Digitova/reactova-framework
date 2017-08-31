import React from 'react';
import { View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import MultiNavigator from './MultiNavigator'
import buildRouteConfig from '../../library/navigation/buildRouteConfig'
import buildNavigationConfig from '../../library/navigation/buildNavigationConfig'



const ReactovaNavigator = (navigationSchema,LoadingScreen,theme) => {

	const bootRouteConfig = buildRouteConfig(navigationSchema,theme);
	const bootNavigationConfig = buildNavigationConfig(navigationSchema,theme)

	const routerRouteConfig = {
		Loading: {
			screen: LoadingScreen,
		},
		BaseNavigator: {
			path: 'init',
			screen: MultiNavigator("BaseNavigator",bootRouteConfig,bootNavigationConfig),
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
