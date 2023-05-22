import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import useAuthStore from "../zustand/AuthStore";
import { SafeAreaView } from "react-native-safe-area-context";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070707",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  text: {
    color: "#ffff",
    fontSize: 25,
  },
  image: {
    borderRadius: 50,
    width: 50,
    height: 50,
    borderColor: "#ffffff",
    borderWidth: 2,
  },
});

const Navbar = () => {
  const user = useAuthStore((state) => state.user);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Hello, {user}!</Text>
      <Image style={styles.image} source={require("../../assets/images.jpg")} />
    </SafeAreaView>
  );
};

export default Navbar;
