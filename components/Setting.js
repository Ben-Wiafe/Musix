import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Setting({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Setting</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor:'red',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})