import { View, Text, StyleSheet, TouchableNativeFeedback} from "react-native";
import React, {useState} from "react";
import Listen from "./BottomTab/ListenNow";
import Browse from "./BottomTab/Browse";
import Radio from "./BottomTab/Radio";
import Library from "./BottomTab/Library";
import Search from "./BottomTab/Search";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function Home() {
  const [rippleColor, setRippleColor] = useState("gray");
  const [rippleOverflow, setRippleOverflow] = useState(false);
  return ( 
  <Tab.Navigator 
  screenOptions={({route}) => ({
    tabBarIcon: ({focused, color, size}) => {
      let iconName;
      // color= 'gray';
      if (route.name === "Listen Now") {
        iconName = focused
        ? 'play-circle'
        : 'play-circle-outline';
      } else if (route.name === "Browse") {
        iconName = focused
        ? 'grid'
        : 'grid-outline';
    }else if (route.name === "Radio") {
        iconName = focused
        ? 'radio'
        : 'radio-outline';
    }else if (route.name === "Library") {
        iconName = focused
        ? 'file-tray'
        : "file-tray-outline";
    }else if (route.name === "Search") {
        iconName = focused
        ? 'search'
        : 'search-outline';
    }
      return(
        
      <TouchableNativeFeedback
      // onPress={() => {
      //     focused? 'red' : 'green';
      //   }}
        background={TouchableNativeFeedback.Ripple(rippleColor,!rippleOverflow, 50 )}       
       >
       <View>
       <Icon name={iconName} size={focused? 25 : 24} color={focused ? 'red' : color} /> 
       </View>
      </TouchableNativeFeedback>
 
      )
    },
    tabBarLabelStyle: {fontSize:17,},
    tabBarActiveTintColor: 'red',
    headerShown: false,
                tabBarLabelStyle: { fontSize: 15, paddingBottom: 3},
                tabBarStyle: { padding:8, borderTopWidth:1,borderTopColor:'gray', height:60, paddingBottom:8, flex:0.07},
    })}
    
  >
    <Tab.Screen name="Listen Now" component={Listen} />
    <Tab.Screen name="Browse" component={Browse}/>
    <Tab.Screen name="Radio" component={Radio}/>
    <Tab.Screen name="Library" component={Library}/>
    <Tab.Screen name="Search" component={Search}/>
  </Tab.Navigator>

  );

}
