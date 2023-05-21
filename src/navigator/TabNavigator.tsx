import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePage from "../screens/HomePage";
import LoginPage from "../screens/LoginPage";
import CollectionPage from "../screens/CollectionPage";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <></>
    // <Tab.Navigator>
    //   <Tab.Screen name="Home" component={HomePage} />
    //   <Tab.Screen name="Collections" component={CollectionPage} />
    //   <Tab.Screen name="Login" component={LoginPage} />
    // </Tab.Navigator>
  );
};

export default TabNavigator;
