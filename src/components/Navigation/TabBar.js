import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {Platform, StatusBar} from 'react-native'
const DefaultTabBar = TabNavigator.Presets.Default.tabBarComponent

class TabBar extends Component
{
	render() {
		const { theme } = this.props
		const tintColor = theme.navigationTextTabBar ? theme.navigationTextTabBar : theme.navigationText
		return <DefaultTabBar
			{...this.props}
			activeTintColor={theme.navigationAccent}
			inactiveTintColor={tintColor}
			style={{
				backgroundColor: theme.navigation,
				paddingTop: Platform.OS === "ios" ? 0 : StatusBar.currentHeight
			}}
		/>
	}
}

const mapStateToProps = ({theme}) => ({
	theme
});

export default connect(mapStateToProps, null)(TabBar)
