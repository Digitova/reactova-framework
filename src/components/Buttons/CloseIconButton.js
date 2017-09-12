import React, { Component } from 'react'
import NavigationIcon  from '../Icon/NavigationIcon'
import { NavigationActions } from 'react-navigation'

export default class extends Component {
	render() {
		return (
			<NavigationIcon
				name="ios-close-outline"
				provider="Ionicons"
				style={{ fontSize: 35 }}
				onPress={ this.onPress.bind(this) }
			/>
		)
	}

	onPress(){
		this.props.navigation.goBack();
	}
}
