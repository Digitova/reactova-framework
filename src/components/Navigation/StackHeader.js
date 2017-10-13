import React, { Component } from 'react';
import { StackNavigator, Header } from 'react-navigation';
import deepmerge from 'deepmerge'
import { connect } from 'react-redux';

class StackHeader extends Component
{
	render() {
		const { theme } = this.props
		return <Header
			{...this.props}
			style={{
				backgroundColor: theme.primaryColor,
				paddingTop: 0,
				height: 50
			}}

			getScreenDetails={(scene) => {
				return deepmerge(this.props.getScreenDetails(scene),{
					options: {
						headerTintColor: theme.secondaryColor,
						headerTitleStyle: {
							color: theme.secondaryColor
						},
						headerBackTitleStyle: {
							color: theme.secondaryColor
						},
					}
				})
			}}
		/>
	}
}

const mapStateToProps = ({theme}) => ({
	theme
});

export default connect(mapStateToProps, null)(StackHeader)
