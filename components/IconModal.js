import { View, Text, Modal, TouchableOpacity } from "react-native";
import React, {useState} from "react";
import { NavigationContainer } from "@react-navigation/native";
import Account from "./Account";
import Setting from "./Setting";

const IconModal = (props) => {
    return (
      <View>
        <Modal
        animationType="slide"
      transparent={true}
      visible={props}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        setModalVisible(!modalVisible);
      }}>
          <TouchableOpacity onPress={() => navigation.navigate("Setting")}>
            <Text>Setting</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Account")}>
            <Text>Account</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
export default IconModal;
   
