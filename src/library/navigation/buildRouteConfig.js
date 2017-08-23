import React, { Component } from 'react';
import getRouteTemplate from './getRouteTemplate';
import ReactovaNavigator from '../../components/ReactovaNavigator/index'
import buildNavigationConfig from './buildNavigationConfig'
import StackModalNavigator  from "../../components/ReactovaNavigator/StackModalNavigator"
import { TabNavigator, DrawerNavigator } from 'react-navigation'


export default buildRouteConfig = function(navigationSchema) {
	let routes = navigationSchema.routes

	const routeObjects = Object.keys(routes).map((key) => {
		if(routeIsNavigator(routes[key])) {
			const routeConfig = buildRouteConfig(routes[key]);
			const navigationConfig = buildNavigationConfig(routes[key])

			let route = {}
			route[key] = {}
			route[key].path = routes[key].path
			route[key].screen = ReactovaNavigator(routeConfig,navigationConfig)

			if(routes[key].hasOwnProperty('navigationOptions')){
				route[key].navigationOptions = routes[key].navigationOptions;
			} else {
				route[key].navigationOptions = {
					title: routes[key].name
				}
			}
			return route
		} else {
			let route = {}
			route[key] = {}
			route[key].path = routes[key].path
			route[key].screen = getRouteTemplate(routes[key])

			if(routes[key].hasOwnProperty('navigationOptions')){
				route[key].navigationOptions =routes[key].navigationOptions;
			} else {
				route[key].navigationOptions = {
					title: routes[key].name
				}
			}
			return route
		}
	})

	return mergeRouteObjects(routeObjects)
}


function mergeRouteObjects(routeObjects){
	return routeObjects.reduce(function(result, currentObject) {
			for(var key in currentObject) {
				if (currentObject.hasOwnProperty(key)) {
					result[key] = currentObject[key];
				}
			}
			return result;
		}, {}
	)
}

function routeIsNavigator(route){
	return !!route.hasOwnProperty("routes");
}