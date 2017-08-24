import React from 'react'
import { StackModalNavigator }  from "reactova-framework"
import { TabNavigator, DrawerNavigator } from 'react-navigation'

export default ReactovaNavigator = (key,routeConfig, navigationConfig) => {

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
			Navigator = StackModalNavigator(key,routeConfig, navigationConfig)
	}

	return Navigator
}