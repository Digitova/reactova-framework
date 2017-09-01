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
			ActiveTab:{
				borderBottomWidth: 3,
				borderColor: this.props.theme.secondaryColor
			},
			ActiveText:{
				color: "#555"
			},
			tabButtonText: {
				flex: 1,
				textAlign: "center",
				backgroundColor: '#fff',
				padding: 10,
				marginLeft: -1,
				height: 41,
				color: "#999",
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
		if(this.isActiveTab()){
			return this.styles.ActiveTab
		} else {
			return {}
		}
	}

	getTabTextStyles(){
		if(this.isActiveTab()){
			return this.styles.ActiveText
		} else {
			return {}
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