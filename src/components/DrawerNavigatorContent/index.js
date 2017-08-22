import React from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import {DrawerItems} from 'react-navigation'

export default (props) => (
	<View style={ styles.drawer }>
		<ScrollView style={ styles.drawerScrollView } contentContainerStyle={{flex: 1, alignItems: 'stretch'}}>
			<DrawerItems {...props} />
		</ScrollView>
	</View>
)

const styles = StyleSheet.create({
	drawer: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#fff',
	},
	drawerScrollView: {
		flex: 1,
	},
	drawerScrollViewContainer: {
		flex: 1,
		alignItems: 'stretch'
	},
	menuItem: {
		flex: 1,
		alignItems: 'flex-start',
		alignSelf: 'stretch',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 20,
		marginTop: 20,
		backgroundColor: '#000'
	},
	versionTextViewContainer: {
		flex:1,
		alignItems: 'center',
		justifyContent: 'flex-end',
		flexDirection: 'column',
		marginBottom: 10
	},
	versionTextView: {
		fontSize: 10,
		color: '#000'
	}
});