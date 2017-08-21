import React, { Component } from 'react';
import getScreenTemplate from '../ScreenTemplateWrapper';
import ApptovaNavigator from './index'

export default function buildRouteConfig(navigationSchema) {
	let routes = navigationSchema.routes

	const routeObjects = Object.keys(routes).map((key) => {
		if(routeIsNavigator(routes[key])) {
			let route = {}
			route[key] = {}
			route[key].path = routes[key].path
			route[key].screen =  class extends React.Component {
				render(){
					return (
						<ApptovaNavigator navigationSchema={routes[key]} />
					);
				}
			}

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
			route[key].screen = getScreenTemplate(routes[key])

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