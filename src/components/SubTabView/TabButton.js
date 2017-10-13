import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'


class TabButton extends Component {
	constructor(props){
		super(props)
		this.styles= StyleSheet.create({
			tabButtonTextContainer: {
				flex: 1,
			},

			tabButtonText: {
				flex: 1,
				textAlign: "center",
				padding: 10,
				marginLeft: -1,
				height: 41,
				fontSize: 14,
			}
		})
	}

	render() {
		const {
			index,
			text,
			changeTab
		} = this.props

		return (
			<TouchableHighlight underlayColor='transparent' style={{flex: 1}} onPress={() => changeTab(index)}>
				<View style={[this.styles.tabButtonTextContainer,this.getTabStyles(index)]}>
					<Text style={[this.styles.tabButtonText,this.getTabTextStyles(index)]}>{text}</Text>
				</View>
			</TouchableHighlight>
		)
	}

	getTabStyles(){
		const { theme } = this.props
		if(this.isActiveTab()){
			return {
				borderBottomWidth: 3,
				borderColor: theme.secondaryNavigationAccent,
				backgroundColor: theme.secondaryNavigation
			}
		}
		return {
			backgroundColor: theme.secondaryNavigation
		}
	}

	getTabTextStyles(){
		const { theme } = this.props
		if(this.isActiveTab()) {
			return {
				color: theme.secondaryNavigationAccent,
				backgroundColor: theme.secondaryNavigation
			}
		}
		return {
			color: theme.secondaryNavigationText,
			backgroundColor: theme.secondaryNavigation
		}
	}

	isActiveTab(){
		const { index, activeTab } = this.props
		return (index === activeTab)
	}
}


mapStateToProps = (state, ownProps) => ({
	theme: state.theme,
	...ownProps
})

export default connect(mapStateToProps)(TabButton)