import React, { Component } from 'react';
import getRouteTemplate from './getRouteTemplate';
import StackHeader from '../../components/Navigation/StackHeader'


export default getModalRoutes = function(navigationSchema) {
	let routes = navigationSchema.routes

	const modalRouteList = []

	const routeObjects = Object.keys(routes).map((key) => {
		if(routeIsNavigator(routes[key])) {
			return getModalRoutes(routes[key]);
		} else {
			let route = {}
			route[key+"Modal"] = {}
			route[key+"Modal"].path = routes[key].path+'_modal'
			route[key+"Modal"].screen = getRouteTemplate(routes[key])


			if(route[key+"Modal"].screen.navigationOptions !== null) {
				const {headerStyle, ...navigationOptions} = route[key+"Modal"].screen.navigationOptions
				route[key+"Modal"].navigationOptions = {
					...navigationOptions,
					headerStyle: {
						...headerStyle,
						paddingTop: 0,
						height: 50
					},
					header: props => <StackHeader {...props}/>,

				}
				route[key+"Modal"].navigationOptions.title = routes[key].name
			} else if(routes[key].hasOwnProperty('navigationOptions')){
				route[key+"Modal"].navigationOptions = routes[key].navigationOptions;
				route[key+"Modal"].navigationOptions.title = routes[key].name
			} else {
				route[key+"Modal"].navigationOptions = {
					title: routes[key].name
				}
			}
			if(!route[key+"Modal"].navigationOptions.hasOwnProperty("header")){
				route[key+"Modal"].navigationOptions.header = (props) => <StackHeader {...props}/>
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