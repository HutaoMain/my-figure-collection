// FigurePage.tsx
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
  Button,
} from "react-native";
import { figureInterface } from "../types/Types";

interface figurePageInterface {
  figure: figureInterface;
  closeModal: () => void;
}

const FigurePage = ({ figure, closeModal }: figurePageInterface) => {
  return (
    <SafeAreaView>
      <View style={styles.figurePageContainer}>
        <Button
          onPress={closeModal}
          title="Learn More"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
        <Image source={{ uri: figure.image }} style={styles.figureImage} />
        <View style={styles.figureDetails}>
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
  figurePageContainer: {
    display: "flex",
    alignItems: "center",
    padding: 20,
  },
  figureImage: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
  figureDetails: {
    marginTop: 20,
    alignItems: "center",
  },
  figureName: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  figureSeries: {
    fontSize: 18,
    fontStyle: "italic",
    marginBottom: 5,
  },
  figureManufacturer: {
    fontSize: 18,
    marginBottom: 5,
  },
  figureReleaseDate: {
    fontSize: 18,
    marginBottom: 5,
  },
  figurePrice: {
    fontSize: 18,
    marginBottom: 5,
  },
  figureDescription: {
    fontSize: 16,
    marginTop: 10,
    textAlign: "center",
  },
});

export default FigurePage;
