import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Radio() {
  return (
    <View style={styles.container}>
      <Text>Radio</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'pink',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})