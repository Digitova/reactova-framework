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
				backgroundColor: theme.navigation,
				paddingTop: 0,
				height: 50
			}}

			getScreenDetails={(scene) => {
				return deepmerge(this.props.getScreenDetails(scene),{
					options: {
						headerTintColor: theme.navigationAccent,
						headerTitleStyle: {
							color: theme.navigationText
						},
						headerBackTitleStyle: {
							color: theme.navigationAccent
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
