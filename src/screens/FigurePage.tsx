// FigurePage.tsx
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from "react-native";
import { figureInterface } from "../types/Types";
import Ionicons from "@expo/vector-icons/Ionicons";

interface figurePageInterface {
  figure: figureInterface;
  closeModal: () => void;
}

const FigurePage = ({ figure, closeModal }: figurePageInterface) => {
  return (
    <SafeAreaView style={styles.container}>
      <Pressable onPress={closeModal} style={styles.closeBtn}>
        <Ionicons name="close-outline" size={30} color="#FFFFFF" />
      </Pressable>
      <View style={styles.figurePageContainer}>
        <Image source={{ uri: figure.image }} style={styles.figureImage} />
        <View style={styles.figureDetailsContainer}>
          <Text style={styles.figureName}>{figure.name}</Text>
          <Text style={styles.figureSeries}>Series: {figure.series}</Text>
          <Text style={styles.figureManufacturer}>
            Manufacturer: {figure.manufacturer}
          </Text>
          <Text style={styles.figureReleaseDate}>
            Release Date: {figure.releaseDate}
          </Text>
          <Text style={styles.figurePrice}>Price: {figure.price}</Text>
          <Text style={styles.figureDescription}>{figure.description}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    height: "100%",
  },
  closeBtn: {
    backgroundColor: "transparent",
    position: "absolute",
    top: 10,
    left: 15,
  },
  closeBtnText: {
    color: "#ffff",
    fontSize: 20,
  },
  figurePageContainer: {
    display: "flex",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  figureImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  figureDetailsContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  figureName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffff",
  },
  figureSeries: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 5,
    color: "#ffff",
  },
  figureManufacturer: {
    fontSize: 18,
    marginBottom: 5,
    color: "#ffff",
  },
  figureReleaseDate: {
    fontSize: 18,
    marginBottom: 5,
    color: "#ffff",
  },
  figurePrice: {
    fontSize: 18,
    marginBottom: 5,
    color: "#ffff",
  },
  figureDescription: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
    color: "#ffff",
  },
});

export default FigurePage;
