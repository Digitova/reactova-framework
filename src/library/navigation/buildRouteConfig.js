import React, { Component } from 'react';
import getRouteTemplate from './getRouteTemplate';
import ReactovaNavigator from '../../components/Navigation/ReactovaNavigator'
import buildNavigationConfig from './buildNavigationConfig'
import DefaultTheme from '../../../config/theme'

export default buildRouteConfig = function(navigationSchema, theme = DefaultTheme) {
	let routes = navigationSchema.routes
	const routeObjects = Object.keys(routes).map((key) => {
		if(routeIsNavigator(routes[key])) {
			const routeConfig = buildRouteConfig(routes[key],theme);
			const navigationConfig = buildNavigationConfig(routes[key],theme)

			let route = {}
			route[key] = {}
			route[key].screen = ReactovaNavigator(key,routeConfig,navigationConfig)
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

			if(route[key].screen.navigationOptions !== null) {
				route[key].navigationOptions = route[key].screen.navigationOptions;
			} else if(routes[key].hasOwnProperty('navigationOptions')){
				route[key].navigationOptions = routes[key].navigationOptions;
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