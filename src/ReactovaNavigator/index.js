import React, { Component } from 'react';
import buildRouteConfig from './RouteConfigurator'
import createNavigator from './NavigatorFactory'

export default class extends Component {
	render() {
		const routeConfig = buildRouteConfig(this.props.navigationSchema);
		const Navigator = createNavigator(this.props.navigationSchema,routeConfig);
		return <Navigator {...this.props}/>
	}
}