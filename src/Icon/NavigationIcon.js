import React, { Component } from 'react';
import { Text, View, Image, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from './index'
import DefaultTheme from '../../config/theme'

export default class extends Component {

	constructor(props) {
		super(props);


		if(this.props.hasOwnProperty('theme')) {
			this.theme = this.props.theme
		} else {
			this.theme = DefaultTheme
		}



		const styles = {
			navWrapperBase: {
				alignItems: 'flex-start',
				borderLeftWidth: StyleSheet.hairlineWidth,
				borderRightWidth: StyleSheet.hairlineWidth,
				borderColor: this.theme.primaryColor,
				overflow: 'visible',
			},
			outerNavWrapper: {
				...this.props.style,
			},
			outerNavWrapperToggled: {
				borderColor: this.theme.shadowBorderLightSide,
			},
			innerNavWrapper: {
				height: 50
			},
			innerNavWrapperToggled: {
				borderColor: this.theme.shadowBorderDarkSide
			},
			navItem: {
				flex: 1,
				width: 50,
				justifyContent: 'center',
				alignItems: 'center',
			},
			navText: {
				color: '#FFFFFF',
				fontSize: 25,
				justifyContent: 'center'
			}
		}
	}

	shouldComponentUpdate(nextProps) {
		return (this.props.toggleSelected !== nextProps.toggleSelected)
	}


	render() {
		return (
			<View style={ this._getNavStyles('outerNavWrapper')}>
				<View style={ this._getNavStyles('innerNavWrapper')}>
					<TouchableHighlight
						style={ this.styles.navItem }
						underlayColor={ this.theme.secondaryColor }
						onPress={ this.props.onPress }>
						<View>
							<Icon name={this.props.name} provider={this.props.provider} style={ this.styles.navText }/>
						</View>
					</TouchableHighlight>
				</View>
			</View>
		);
	}

	_getNavStyles(styleName) {
		return {
			...this.styles.navWrapperBase,
			...this.styles[styleName],
			...this._getToggledStyles(styleName)
		}
	}

	_getToggledStyles(styleName) {
		if(this.props.toggleSelected) {
			return {
				...this.styles[styleName+'Toggled'],
				backgroundColor: this._getToggledBgColor()
			}
		}
		return {}
	}

	_getToggledBgColor() {
		let bgColor = [
			this.theme.primaryColor,
			this.theme.secondaryColor,
		]
		return bgColor[+this.props.toggleSelected]
	}
}