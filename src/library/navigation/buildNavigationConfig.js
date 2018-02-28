import React, { Component } from 'react';
import deepmerge from "deepmerge"
import DrawerNavigatorContent from '../../components/Navigation/DrawerNavigatorContent'
import TabBar from '../../components/Navigation/TabBar'
import StackHeader from '../../components/Navigation/StackHeader'


export default buildNavigationConfig = function(navigationSchema) {
	const navigatorConfig = {
		navigatorType: navigationSchema.type,
		initialRouteName: navigationSchema.defaultRoute,
		headerMode: 'screen',
		navigationOptions: {
			header: props => <StackHeader {...props}/>,
			title: navigationSchema.name
		},
	}

	const tabNavigatorConfig = {
		tabBarComponent: TabBar,
		swipeEnabled:false,
		animationEnabled:false
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
