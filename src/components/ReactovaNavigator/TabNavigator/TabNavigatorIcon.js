import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Icon from '../../Icon'

export default class extends Component {

	render() {
		return (
			<View style={[Styles.tabBarIconContainer]}>
				<Icon name={this.props.name} provider={this.props.provider} style={[Styles.icon, {color: this.props.tintColor}]}/>
			</View>
		);
	}
}

const Styles = StyleSheet.create({
	icon: {
		height: 40,
		fontSize: 25
	},
	tabBarIconContainer:{
		flex: 1,
		padding: 5
	}
})