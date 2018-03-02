import React, { Component } from 'react';
import Entypo from 'react-native-vector-icons/Entypo'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Foundation from 'react-native-vector-icons/Foundation'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import Zocial from 'react-native-vector-icons/Zocial'

export default class Icon extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		let {provider, name, ...remainingProps} = this.props
		switch (provider) {
			case 'Entypo':
				return <Entypo name={name} {...remainingProps} />
			case 'EvilIcons':
				return <EvilIcons name={name} {...remainingProps} />
			case 'FontAwesome':
				return <FontAwesome name={name} {...remainingProps} />
			case 'Foundation':
				return <Foundation name={name} {...remainingProps} />
			case 'Ionicons':
				return <Ionicons name={name} {...remainingProps} />
			case 'MaterialCommunityIcons':
				return <MaterialCommunityIcons name={name} {...remainingProps} />
			case 'MaterialIcons':
				return <MaterialIcons name={name} {...remainingProps} />
			case 'SimpleLineIcons':
				return <SimpleLineIcons name={name} {...remainingProps} />
			case 'Octicons':
				return <Octicons name={name} {...remainingProps} />
			case 'Zocial':
				return <Zocial name={name} {...remainingProps} />
		}
	}
}

export {
	Icon,
	Entypo,
	EvilIcons,
	FontAwesome,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	SimpleLineIcons,
	Octicons,
	Zocial,
}
