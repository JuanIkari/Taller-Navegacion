import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import QuizScreen from "./Screens/QuizScreen";
import OptionScreen from "./Screens/OptionScreen";
import ImageScreen from "./Screens/ImageScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Image" component={ImageScreen} />
        <Tab.Screen name="Options" component={OptionScreen} />
        <Tab.Screen name="Quiz" component={QuizScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
