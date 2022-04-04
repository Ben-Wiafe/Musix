import { View, Text,StyleSheet } from 'react-native'
import React from 'react'

export default function Library() {
  return (
    <View style={styles.container}>
      <Text>Library</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'indigo',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})