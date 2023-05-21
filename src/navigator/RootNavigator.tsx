import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useAuthStore from "../zustand/AuthStore";
import TabNavigator from "./TabNavigator";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import CollectionPage from "../screens/CollectionPage";
import BottomTab from "../components/BottomTab";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <>
      {user ? (
        <>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomePage}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Collection"
              component={CollectionPage}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
          <BottomTab />
        </>
      ) : (
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      )}
    </>
  );
};

export default RootNavigator;
