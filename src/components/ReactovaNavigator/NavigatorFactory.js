import React, { Component } from 'react';
import { TabNavigator, DrawerNavigator,StackNavigator } from 'react-navigation'
import deepmerge from 'deepmerge'

import DrawerNavigatorContent from './DrawerNavigator/DrawerNavigatorContent'
import DefaultTheme from '../../../config/theme'


export default function createNavigator(navigationSchema,routeConfig, theme = DefaultTheme) {
	const navigatorConfig = {
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
			return TabNavigator(routeConfig, deepmerge(tabNavigatorConfig,navigatorConfig))
			break;
		case "drawer":
			return DrawerNavigator(routeConfig, deepmerge(drawerNavigatorConfig,navigatorConfig))
			break;
		case "stack":
		default:
			return StackNavigator(routeConfig, deepmerge(stackNavigatorConfig, navigatorConfig))
			break;
	}
}
