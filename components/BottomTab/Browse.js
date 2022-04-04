import { View, Text,  StyleSheet } from "react-native";
import React from "react";

export default function Browse() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Browse</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#AA6551",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
