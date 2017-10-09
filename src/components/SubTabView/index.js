import React, {Component} from 'react'
import {StyleSheet, View} from 'react-native'
import TabButton from './TabButton'

export default class extends Component {
	state = {activeTab: 0}

	render = () => (
		<View style={{flex: 1}}>
			{this.props.tabs.length < 2 ? null :
				<View style={Styles.tabWrapper}>
					{
						this.props.tabs.map(({title}, key) => (
							<TabButton
								key={key}
								index={key}
								text={title}
								activeTab={this.state.activeTab}
								changeTab={this.changeTab}
							/>
						))
					}
				</View>
			}
			{this.renderTab()}
		</View>
	)

	renderTab = () => (
		this.props.tabs.map((tab, key) => {
			if (key == this.state.activeTab) {
				const ContentView = tab.content
				return <ContentView key={key}/>
			}
		})
	)

	changeTab = (key) => this.setState({activeTab: key})
}

const Styles = StyleSheet.create({
	tabWrapper: {
		flexDirection: 'row',
		alignSelf: 'stretch',
		alignContent: 'stretch',
		justifyContent: 'space-between',
		height: 40
	}
})