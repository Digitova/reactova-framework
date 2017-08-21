import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	menuItem: {
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 20,
		marginTop: 20,
		backgroundColor: '#ddd'
	}
})

export default class extends Component {

    constructor(props) {
        super(props);

    }

    render() {
        return (
            <View style={ { flex: 1, backgroundColor: '#ccc', flexDirection: 'column' } }>
                <View style={ {flex:1, flexDirection: 'column', alignItems: 'flex-start', alignSelf: 'stretch'} }>
					{ this._renderMenuItems() }
				</View>
                <View style={ {flex:1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'column'} }>
					<Text style={{fontSize: 10}}>POWERED BY APPTOVA</Text>
				</View>
            </View>
        )
    }

    _renderMenuItems() {

        let items = [];
        let index = 0;

        for (let scene in app.scenes) {
            items.push(
                <View key={index} style={{  alignSelf: 'stretch'}}>
					<TouchableHighlight
						activeOpacity={1}
						underlayColor={'#999'}
						style={ styles.menuItem }
					//	onPress={ () => this.props.navigate(app.scenes[scene]) }
					>
						//<Text style={ { fontSize: 20 } }>{ app.scenes[scene]['name'] }</Text>
						<Text style={ { fontSize: 20 } }>Item</Text>
					</TouchableHighlight>
                </View>
            )
            index++
        }

        return items;
    }
}