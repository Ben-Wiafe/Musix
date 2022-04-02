import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, Alert, Modal } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "./components/Account";
import Setting from "./components/Setting";
import Icon from "react-native-vector-icons/Ionicons";
import IconModal from "./components/IconModal";
import Home from "./components/Home";
const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerRight: () => (
            <Icon name="ellipsis-vertical" size={20} color="red" />
          ),
          headerTitle: "",
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Account" component={Account} />
        <Stack.Screen name="Setting" component={Setting} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
