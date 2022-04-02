import { View, Text, TouchableNativeFeedback } from "react-native";
import React from "react";

export default function Browse() {
  return (
    <View>
      
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("red")}
      >
        <View>
          <Text>Browse</Text>
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}
