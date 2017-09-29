// @flow
import * as React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from '../Icon'

type Props = {
	iconName: string,
	iconProvider: string,
	message: string,
	type: string,
	onPress: () => {},
	underlayColor: string
}

export default AlertBanner = (props: Props) => {

	return (
		<TouchableHighlight
			underlayColor={ props.underlayColor }
			onPress={props.onPress}
		>
			<View style={[Styles.container,Styles[props.type]]}>
				{ renderIcon(props) }
				<Text style={[Styles.message,Styles[props.type+"Text"]]}>{props.message}</Text>
			</View>
		</TouchableHighlight>
	)
}

const renderIcon = (props: Props) => {
	if(props.hasOwnProperty('iconName') && props.hasOwnProperty('iconProvider')){
		return <Icon style={[Styles.icon,Styles[props.type+"Text"]]} name={props.iconName} provider={props.iconProvider} />
	} else {
		return null
	}
}

const Styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		padding: 10,
		borderWidth: StyleSheet.hairlineWidth,
		marginHorizontal: -1,
		alignContent: 'center',
		justifyContent: 'center',
		alignItems: 'center'
	},
	message: {
		fontSize: 15,
		flex: 1
	},
	alert: {
		backgroundColor: "#FEF3D1",
		borderColor: "#816621"
	},
	alertText: {
		color: "#816621"
	},
	primary: {
		backgroundColor: "#D0E5FD",
		borderColor: "#124180"
	},
	primaryText: {
		color: "#124180",
	},
	danger: {
		backgroundColor: "#F3D8DA",
		borderColor: "#6A2327"
	},
	dangerText:{
		color: "#6A2327"
	},
	success: {
		backgroundColor: "#D8ECDB",
		borderColor: "#29552A"
	},
	successText: {
		color: "#29552A"
	},
	info: {
		backgroundColor: "#D5EBF0",
		borderColor: "#23535F"
	},
	infoText: {
		color: "#23535F"
	},
	light: {
		backgroundColor: "#FFFFFF",
		borderColor: "#818182"
	},
	lightText: {
		color: "#818182"
	},
	dark: {
		backgroundColor: "#D6D8D9",
		borderColor: "#1C1E21"
	},
	darkText:{
		color: '#1C1E21'
	},
	icon: {
		fontSize: 25,
		marginRight: 10,
		alignSelf: 'flex-start'
	}
})