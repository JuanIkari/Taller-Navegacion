import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import QuizScreen from "./Screens/QuizScreen";
import OptionScreen from "./Screens/OptionScreen";
import ImageScreen from "./Screens/ImageScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Image") {
              iconName = focused ? "image" : "image-outline";
            } else if (route.name === "Options") {
              iconName = focused ? "options" : "options-outline";
            } else if (route.name === "Quiz") {
              iconName = focused ? "clipboard" : "clipboard-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
