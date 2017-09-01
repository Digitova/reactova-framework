import React, { Component } from 'react'
import { StyleSheet, View, Text, TouchableHighlight} from 'react-native'
import TabButton from './TabButton'


export default class extends Component {
	constructor(props) {
		super(props)
		this.state = {
			activeTab: 0
		}
	}

	render() {
		const {
			tabs
		} = this.props

		return (
			<View style={{flex: 1}}>
				<View style={Styles.QuestionTypes}>
					{
						tabs.map(({title},key)=>{
							return <TabButton
										key={key}
										index={key}
										text={title}
										activeTab={this.state.activeTab}
										changeTab={this.changeTab.bind(this)}
									/>
						})
					}
				</View>
				{ this.renderTab() }
			</View>
		)
	}

	renderTab(){
		const {
			tabs
		} = this.props

		return (
			tabs.map((tab,key)=>{
				if(key == this.state.activeTab) {
					const ContentView = tab.content
					return <ContentView key={key} />
				}
			})
		)
	}


	changeTab(key) {
		this.setState({activeTab: key})
	}
}

const Styles = StyleSheet.create({
	QuestionTypes: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignContent: 'stretch',
		justifyContent: 'space-between',
		height: 40
	}
})