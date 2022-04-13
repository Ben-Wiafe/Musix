import { View, Text, StyleSheet, TouchableNativeFeedback } from "react-native";
import React, { useState } from "react";
import Listen from "./BottomTab/ListenNow";
import Browse from "./BottomTab/Browse";
import Radio from "./BottomTab/Radio";
import Library from "./BottomTab/Library";
import Search from "./BottomTab/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";
import Ripple from "react-native-material-ripple";
const Tab = createMaterialBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "white", paddingBottom: 7,size:24 }}
      shifting={false}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          // color= 'gray';
          if (route.name === "Listen Now") {
            iconName = focused ? "play-circle" : "play-circle-outline";
          } else if (route.name === "Browse") {
            iconName = focused ? "grid" : "grid-outline";
          } else if (route.name === "Radio") {
            iconName = focused ? "radio" : "radio-outline";
          } else if (route.name === "Library") {
            iconName = focused ? "file-tray" : "file-tray-outline";
          } else if (route.name === "Search") {
            iconName = focused ? "search" : "search-outline";
          }
          return (
              <Icon
                name={iconName}
                size={focused ? 25 : 24}
                color={focused ? "red" : color}
              />
          );
        },
        
      })}
    >
      <Tab.Screen name="Listen Now" component={Listen}  options={{
      tabBarLabel: <Text style={styles.tabBarLabel}>Home</Text>
    }} />
      <Tab.Screen name="Browse" component={Browse} options={{
      tabBarLabel: <Text style={styles.tabBarLabel}>Browse</Text>
    }} />
      <Tab.Screen name="Radio" component={Radio} options={{
      tabBarLabel: <Text style={styles.tabBarLabel}>Radio</Text>
    }} />
      <Tab.Screen name="Library" component={Library} options={{
      tabBarLabel: <Text style={styles.tabBarLabel}>Library</Text>
    }}/>
      <Tab.Screen name="Search" component={Search} options={{
      tabBarLabel: <Text style={styles.tabBarLabel}>Search</Text>
    }} />
    </Tab.Navigator>
  );
}
const styles = StyleSheet.create({
  tabBarLabel: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});