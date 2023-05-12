import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
