import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group>
        <Stack.Screen name="Main" component={TabNavigator} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default RootNavigator;
