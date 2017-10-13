import React from 'react';
import { View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import MultiNavigator from './MultiNavigator'
import buildRouteConfig from '../../library/navigation/buildRouteConfig'
import buildNavigationConfig from '../../library/navigation/buildNavigationConfig'
import getModalRoutes from '../../library/navigation/getModalRoutes'


const BaseNavigator = (navigationSchema) => {

	const bootRouteConfig = buildRouteConfig(navigationSchema);
	const bootNavigationConfig = buildNavigationConfig(navigationSchema)
	const modalRoutes = getModalRoutes(navigationSchema)

	const RootAppNavigator = MultiNavigator(bootRouteConfig,bootNavigationConfig)

	const ModalNavigator = StackNavigator(
		{
			RootAppNavigator: {
				path: 'init',
				screen: RootAppNavigator,
			},
			...modalRoutes
		},
		{
			mode: 'modal',
		}
	)


	const routerRouteConfig = {
		ModalRoutes: {
			path: 'modals',
			screen: ModalNavigator
		}
	}
	const routerNavigationConfig = {
		initialRouteName: 'ModalRoutes',
		navigationOptions:{
			tabBarVisible: false
		}
	}

	return TabNavigator(routerRouteConfig,routerNavigationConfig);
};

export default BaseNavigator;




