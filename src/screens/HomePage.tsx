import { ScrollView, StyleSheet } from "react-native";
import ImageGallery from "../components/ImageGallery";

const HomePage = () => {
  return (
    <ScrollView style={styles.container}>
      <ImageGallery />
    </ScrollView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070707",
  },
});
