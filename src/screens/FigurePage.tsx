// FigurePage.tsx
import React from "react";
import { StyleSheet, Text, Image, View, Pressable } from "react-native";
import { figureInterface } from "../types/Types";
import Ionicons from "@expo/vector-icons/Ionicons";

interface figurePageInterface {
  figure: figureInterface;
  closeModal: () => void;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131313",
    height: "100%",
  },
  firstImage: {
    width: "100%",
    flex: 0.9,
    resizeMode: "cover",
    position: "relative",
  },
  otherImages: {
    width: 100,
    height: 100,
    position: "absolute",
    bottom: 0,
    alignItems: "center",
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
    padding: 20,
  },
  basicInfo: {
    borderRadius: 10,
    backgroundColor: "#959DB0",
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginBottom: 10,
  },
  figureName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ffff",
  },
  figureDescription: {
    fontSize: 16,
    color: "#ffff",
  },
  otherInfo: {
    backgroundColor: "#959DB0",
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
  },
  figureSeries: {
    fontSize: 16,
    fontStyle: "italic",
    marginBottom: 5,
    color: "#ffff",
  },
  figureManufacturer: {
    fontSize: 16,
    marginBottom: 5,
    color: "#ffff",
  },
  figureReleaseDate: {
    fontSize: 16,
    marginBottom: 5,
    color: "#ffff",
  },
  figurePrice: {
    fontSize: 16,
    marginBottom: 5,
    color: "#ffff",
  },
});

const FigurePage = ({ figure, closeModal }: figurePageInterface) => {
  return (
    <View style={styles.container}>
      {figure.image.map((imageUrl, index) => (
        <Image
          key={index}
          source={{ uri: imageUrl }}
          style={[styles.otherImages, index === 0 ? styles.firstImage : null]}
        />
      ))}
      <Pressable onPress={closeModal} style={styles.closeBtn}>
        <Ionicons name="arrow-back-outline" size={30} color="#FFFFFF" />
      </Pressable>

      <View style={styles.figurePageContainer}>
        <View style={styles.basicInfo}>
          <Text style={styles.figureName}>{figure.name}</Text>
          <Text style={styles.figureDescription}>{figure.description}</Text>
        </View>

        <View style={styles.otherInfo}>
          <Text style={{ fontSize: 12, color: "#ffffff" }}>Series:</Text>
          <Text style={styles.figureSeries}>{figure.series}</Text>
        </View>
        <View style={styles.otherInfo}>
          <Text style={{ fontSize: 12, color: "#ffffff" }}>Manufacturer:</Text>
          <Text style={styles.figureManufacturer}>{figure.manufacturer}</Text>
        </View>
        <View style={styles.otherInfo}>
          <Text style={{ fontSize: 12, color: "#ffffff" }}>Release Date:</Text>
          <Text style={styles.figureReleaseDate}>{figure.releaseDate}</Text>
        </View>
        <View style={styles.otherInfo}>
          <Text style={{ fontSize: 12, color: "#ffffff" }}>Price: </Text>
          <Text style={styles.figurePrice}> {figure.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default FigurePage;
