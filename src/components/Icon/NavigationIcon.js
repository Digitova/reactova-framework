import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Icon from './index'

class NavigationIcon extends Component {

	constructor(props) {
		super(props);

		this.styles = {
			navItem: {
				flex: 1,
				width: 50,
				justifyContent: 'center',
				alignItems: 'center',
			},
			navText: {
				color: '#FFFFFF',
				fontSize: 30,
				justifyContent: 'center'
			}
		}
	}

	render() {
		return (
			<TouchableHighlight
				style={ this.styles.navItem }
				underlayColor={ this.props.theme.navigationLighter }
				onPress={this.handlePress.bind(this)} >
				<View>
					<Icon name={this.props.name} provider={this.props.provider} style={[this.styles.navText, this.props.style , {color: this.props.theme.primaryAccent}] }/>
				</View>
			</TouchableHighlight>
		);
	}

	handlePress(){
		this.props.onPress()
	}
}

function mapStateToProps({theme}){
	return {
		theme
	}
}

export default connect(mapStateToProps, null)(NavigationIcon);
