import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function ListenNow() {
  return (
    <View style={styles.container}>
      <Text>ListenNow</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#ea1',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})