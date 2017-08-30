import React, { Component } from 'react';
import { View,Text, StyleSheet , ActivityIndicator} from 'react-native';


export default class extends Component
{
  constructor(props)
  {
    super(props)
  }

  render()
  {
    return (
        <View style={Styles.loadingWrapper}>
          <Text style={Styles.loadingText}>{"<ReactovaFramework/>"}</Text>
          <ActivityIndicator style={{marginTop: 40}} size={1}/>
        </View>
    )
  }
}


const Styles = StyleSheet.create({
    loadingWrapper:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    loadingText: {
        color: "#666",
        fontSize: 20
    }
})