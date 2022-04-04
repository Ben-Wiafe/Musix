import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  TouchableNativeFeedback,
  TouchableOpacity,
  Dimensions,
  Modal,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./components/Account";
import Setting from "./components/Setting";
import Icon from "react-native-vector-icons/Ionicons";
import Home from "./components/Home";

const Stack = createNativeStackNavigator();
const windowHeight = Dimensions.get("window").height;
const windowWidth = Dimensions.get("window").width;

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const handler = () => {
    setModalVisible(!modalVisible);
  };
  function offModal() {
    setModalVisible(false);
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          // transform screenOptions to a function
          headerRight: () => (
            <View>
              <Modal
                visible={modalVisible}
                transparent
                onRequestClose={() => {
                  setModalVisible(false);
                }}
                animationType="fade"
                hardwareAccelerated
              >
                <TouchableOpacity style={styles.modalContainer} activeOpacity={1} onPress={() => setModalVisible(false)}>
                  <View style={styles.moda}>
                    <TouchableOpacity
                   
                      onPress={() => {
                        navigation.navigate("Setting");
                        offModal();
                      }}
                    >
                      <Text style={styles.modtext}>Settings</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                    
                      onPress={() => {
                        navigation.navigate("Account");
                        offModal();
                      }}
                    >
                      <Text style={styles.modtext} >Account</Text>
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Modal>

              <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple("gray", true, 20)}
                onPress={handler}
              >
                <Icon name="ellipsis-vertical" size={20} color="red" />
              </TouchableNativeFeedback>
            </View>
          ),
          headerTitle: "",
          headerShadowVisible: false,
        })}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  moda: {
    backgroundColor: "white",
   justifyContent:'space-around',
   padding:9,
   paddingTop:-5,
    height: windowHeight / 7,
    width: windowWidth / 2.2,
    marginLeft: windowWidth / 1.84,
    marginTop: 5,
    borderRadius: 6,
    // borderWidth: 1,
  
    elevation:8
  },
  modalContainer:{
    flex:1,
 
  },
  modtext:{fontSize:15}
});
