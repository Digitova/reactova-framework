import React, { Component } from 'react';
import { TabNavigator } from 'react-navigation';
import { connect } from 'react-redux';

const DefaultTabBar = TabNavigator.Presets.Default.tabBarComponent

class TabBar extends Component
{
	render() {
		const { theme } = this.props
		return <DefaultTabBar
			{...this.props}
			activeTintColor={theme.tabBarIconActiveColor}
			inactiveTintColor={theme.tabBarIconInActiveColor}
			style={{
				backgroundColor: theme.primaryColor,
			}}
		/>
	}
}

const mapStateToProps = ({theme}) => ({
	theme
});

export default connect(mapStateToProps, null)(TabBar)
