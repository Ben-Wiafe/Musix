import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

export default function Account({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Account</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'yellow',
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',

  }
})