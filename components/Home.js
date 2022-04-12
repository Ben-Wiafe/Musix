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
      barStyle={{ backgroundColor: "white", paddingBottom: 10 }}
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
                size={focused ? 26 : 25}
                color={focused ? "red" : color}
              />
          );
        },
        
      })}
    >
      <Tab.Screen name="Listen Now" component={Listen} />
      <Tab.Screen name="Browse" component={Browse} />
      <Tab.Screen name="Radio" component={Radio} />
      <Tab.Screen name="Library" component={Library} />
      <Tab.Screen name="Search" component={Search} />
    </Tab.Navigator>
  );
}
