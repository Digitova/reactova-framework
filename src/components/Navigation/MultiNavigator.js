import React from 'react'
import { TabNavigator, DrawerNavigator,StackNavigator} from 'react-navigation'

export default MultiNavigator = (routeConfig, navigationConfig) => {

	let Navigator = null

	switch(navigationConfig.navigatorType) {
		case "tab":
			Navigator = TabNavigator(routeConfig, navigationConfig)
			break;
		case "drawer":
			Navigator = DrawerNavigator(routeConfig, navigationConfig)
			break;
		case "stack":
		default:
			Navigator = StackNavigator(routeConfig, navigationConfig)
	}

	return Navigator
}