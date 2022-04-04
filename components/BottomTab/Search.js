import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Search</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ff2994',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})