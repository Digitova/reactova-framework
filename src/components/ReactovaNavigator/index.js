import React, { Component } from 'react';
import { connect } from 'react-redux';
import buildRouteConfig from './buildRouteConfig'
import createNavigator from './createNavigator'

class ReactovaNavigator extends Component {
	render() {
		const routeConfig = buildRouteConfig(this.props.navigationSchema);
		const Navigator = createNavigator(this.props.navigationSchema,routeConfig, this.props.theme);
		return <Navigator {...this.props}/>
	}
}

function mapStateToProps({reactova}){
	return {
		theme: reactova.theme,
	}
}

export default connect(mapStateToProps, null)(ReactovaNavigator);
