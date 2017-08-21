import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import GridViewItem from './GridViewItem'


export default class extends Component
{
	render()
	{
		return (
			<View style={Styles.row}>
				{this.props.row.map((col, key) => {
					return (
						<GridViewItem key={key} item={col} {...this.props} />
					)
				})}
			</View>
		)
	}
}

const Styles = {
	row: {
		flexDirection: 'row',
		alignContent: 'center'
	}
}
