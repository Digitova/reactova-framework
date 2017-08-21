import React, { Component } from 'react';
import buildRouteConfig from './RouteConfigurator'
import createNavigator from './NavigatorFactory'
import DefaultTheme from'../../../config/theme'

export default class extends Component {
	render() {
		const routeConfig = buildRouteConfig(this.props.navigationSchema);
		const Navigator = createNavigator(this.props.navigationSchema,routeConfig, this.getTheme());
		return <Navigator {...this.props}/>
	}

	getTheme(){
		return this.props.hasOwnProperty('theme') ? this.props.theme : DefaultTheme
	}
}