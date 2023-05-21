import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Pressable,
  Modal,
  TextInput,
} from "react-native";
import { useState } from "react";
import { figureInterface } from "../types/Types";
import FigurePage from "./FigurePage";

const figures = [
  {
    id: 1,
    name: "Miku Hatsune",
    image:
      "https://images.goodsmile.info/cgm/images/product/20091023/272/12917/large/ef17d50120ca5f620d2452760230377a.jpg",
    series: "Vocaloid",
    manufacturer: "Good Smile Company",
    releaseDate: "2021-01-01",
    price: 100.0,
    description: "A cute figure of the popular Vocaloid singer Miku Hatsune.",
  },
  {
    id: 2,
    name: "Saber",
    image:
      "https://www.animefolio.com/wp-content/uploads/2020/03/saber-alter-rider-figure-amakuni-5.jpg?x33681",
    series: "Fate/stay night",
    manufacturer: "Alter",
    releaseDate: "2021-02-01",
    price: 150.0,
    description: "A detailed figure of the legendary King of Knights, Saber.",
  },
  // Add more figures here...
];

const CollectionPage = () => {
  const [selectedFigure, setSelectedFigure] = useState<
    figureInterface | undefined
  >();
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>("");

  const handleFigurePress = (figure: figureInterface) => {
    setSelectedFigure(figure);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const filteredFigures = figures.filter((figure) =>
    figure.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.collectionPageContainer}>
        {filteredFigures.map((figure) => (
          <Pressable onPress={() => handleFigurePress(figure)} key={figure.id}>
            <Image source={{ uri: figure.image }} style={styles.figureImage} />
          </Pressable>
        ))}
      </View>
      <Modal animationType="slide" transparent={false} visible={modalVisible}>
        {selectedFigure && (
          <FigurePage figure={selectedFigure} closeModal={closeModal} />
        )}
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#070707",
    height: "100%",
  },
  searchContainer: {
    padding: 20,
    marginTop: 20,
  },
  searchInput: {
    backgroundColor: "#ffffff",
    borderRadius: 10,
    padding: 10,
    paddingHorizontal: 10,
  },
  collectionPageContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  figureImage: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "#ffff",
    aspectRatio: 1, // Maintain the aspect ratio of the image
  },
});

export default CollectionPage;
