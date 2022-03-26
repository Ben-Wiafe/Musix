import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Listen from "./BottomTab/ListenNow";
import Browse from "./BottomTab/Browse";
import Radio from "./BottomTab/Radio";
import Library from "./BottomTab/Library";
import Search from "./BottomTab/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
export default function Home() {
  const Tab = createBottomTabNavigator();
  return ( 
  <Tab.Navigator>
    <Tab.Screen name="Listen" component={Listen} options={{
      tabBarIcon: ({ focused, color:'blue', }) => {
        <Icon name="menu" color={color}/>
      }      
      }}/>
    <Tab.Screen name="Browse" component={Browse}/>
    <Tab.Screen name="Radio" component={Radio}/>
    <Tab.Screen name="Library" component={Library}/>
    <Tab.Screen name="Search" component={Search}/>
  </Tab.Navigator>

  );
}
