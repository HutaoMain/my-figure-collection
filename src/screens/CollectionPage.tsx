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
    image: [
      "https://images.goodsmile.info/cgm/images/product/20091023/272/12917/large/ef17d50120ca5f620d2452760230377a.jpg",
      "https://images.goodsmile.info/cgm/images/product/20091023/272/12919/large/07e415e0a24b802a295fa62ac59070ab.jpg",
      "https://images.goodsmile.info/cgm/images/product/20091023/272/12920/large/7162c6ac9697749ab16994af73fcd630.jpg",
      "https://images.goodsmile.info/cgm/images/product/20091023/272/12921/large/db125a04a92bc4bd90a8a35dfd5f63d4.jpg",
      "https://images.goodsmile.info/cgm/images/product/20091023/272/12922/large/f42dd2bbf07036144a2513ff953f68d1.jpg",
    ],
    series: "Vocaloid",
    manufacturer: "Good Smile Company",
    releaseDate: "2021-01-01",
    price: 100.0,
    description: "A cute figure of the popular Vocaloid singer Miku Hatsune.",
  },
  {
    id: 2,
    name: "Saber",
    image: [
      "https://www.animefolio.com/wp-content/uploads/2020/03/saber-alter-rider-figure-amakuni-5.jpg?x33681",
      "https://www.animefolio.com/wp-content/uploads/2020/03/saber-alter-rider-figure-amakuni-3.jpg",
      "https://www.animefolio.com/wp-content/uploads/2020/03/saber-alter-rider-figure-amakuni-4.jpg",
      "https://www.animefolio.com/wp-content/uploads/2020/03/saber-alter-rider-figure-amakuni-5.jpg",
      "https://www.animefolio.com/wp-content/uploads/2020/03/saber-alter-rider-figure-amakuni-6.jpg",
    ],

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
        {filteredFigures.map((figure: figureInterface) => (
          <Pressable onPress={() => handleFigurePress(figure)} key={figure.id}>
            <Image
              key={figure.id}
              source={{ uri: figure.image[0] }}
              style={styles.figureImage}
            />
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
