import { StyleSheet, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const BottomTab = () => {
  return (
    <View style={styles.bottomTab}>
      <View style={styles.container}>
        <Ionicons name="home" size={30} color="#FFFFFF" />
        <Ionicons name="albums" size={30} color="#FFFFFF" />
        <Ionicons name="add-circle" size={30} color="#FFFFFF" />
        <Ionicons name="person" size={30} color="#FFFFFF" />
      </View>
    </View>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  bottomTab: {
    width: "100%",
    alignItems: "center",
  },
  container: {
    position: "absolute",
    bottom: 25,
    height: 50,
    width: "90%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderRadius: 30,
    backgroundColor: "#6A7DFE",
  },
});
