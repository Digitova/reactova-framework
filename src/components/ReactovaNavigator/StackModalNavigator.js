import React from 'react'
import {StackNavigator} from 'react-navigation'

export default StackModalNavigator = (routeConfigs, navigatorConfig) => {
	const CardStackNavigator = StackNavigator(routeConfigs, navigatorConfig);
	const modalRouteConfig = {};
	const routeNames = Object.keys(routeConfigs);

	for (let i = 0; i < routeNames.length; i++) {
		modalRouteConfig[`${routeNames[i]}Modal`] = routeConfigs[routeNames[i]];
	}

	return StackNavigator({
		CardStackNavigator: { screen: CardStackNavigator },
		...modalRouteConfig
	}, {
		mode: 'modal',
		headerMode: 'none'
	});
};