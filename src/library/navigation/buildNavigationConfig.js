import React, { Component } from 'react';
import deepmerge from "deepmerge"
import DefaultTheme from '../../../config/theme'


export default buildNavigationConfig = function(navigationSchema, theme = DefaultTheme) {
	const navigatorConfig = {
		navigatorType: navigationSchema.type,
		initialRouteName: navigationSchema.defaultRoute,
		headerMode: 'screen',
		navigationOptions: {
			headerTintColor: theme.secondaryColor,
			headerStyle: {
				backgroundColor: theme.primaryColor,
				paddingTop: 0,
				height: 50
			},
			headerTitleStyle: {
				color: theme.secondaryColor
			},
			headerBackTitleStyle: {
				color: theme.secondaryColor
			},
			title: navigationSchema.name
		},
	}

	const tabNavigatorConfig = {
		tabBarOptions: {
			activeTintColor: theme.tabBarIconActiveColor,
			inactiveTintColor: theme.tabBarIconInActiveColor,
			labelStyle: {
				fontSize: 12,
			},
			style: {
				backgroundColor: theme.primaryColor,
			},
		}
	}

	const drawerNavigatorConfig = {
		drawerWidth: 200,
		contentComponent: (props) => {
			return DrawerNavigatorContent(props)
		},
		contentOptions: {}
	}

	const stackNavigatorConfig = {

	}

	switch(navigationSchema.type){
		case "tab":
			return deepmerge(tabNavigatorConfig,navigatorConfig)
			break;
		case "drawer":
			return deepmerge(drawerNavigatorConfig,navigatorConfig)
			break;
		case "stack":
		default:
			return deepmerge(stackNavigatorConfig, navigatorConfig)
			break;
	}

}
