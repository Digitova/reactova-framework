import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';


export default class extends Component
{
	render()
	{
		if(this.props.item == null){
			return (
				<View style={[Styles.item,{margin: this.props.itemMargin, alignItems: this.props.alignItems}]}/>
			)
		} else {
			return (
				<View style={[Styles.item,{margin: this.props.itemMargin, alignItems: this.props.alignItems}]}>
					{this.props.itemRenderer(this.props.item)}
				</View>
			)
		}
	}
}

const Styles = {
	item: {
		flex: 1,
		justifyContent: 'flex-start',
	},
}
