import { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import CollectionPage from "../screens/CollectionPage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Collections" component={CollectionPage} />
      <Tab.Screen name="Login" component={LoginPage} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
