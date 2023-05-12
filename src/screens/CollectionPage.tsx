import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Pressable,
  Modal,
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

  const handleFigurePress = (figure: figureInterface) => {
    setSelectedFigure(figure);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <SafeAreaView>
      <View style={style.collectionPageContainer}>
        {figures.map((figure) => (
          <Pressable onPress={() => handleFigurePress(figure)}>
            <Image
              source={{ uri: figure.image }}
              style={style.figureImage}
              key={figure.id}
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

const style = StyleSheet.create({
  collectionPageContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    padding: 20,
  },
  figureImage: {
    width: 100,
    height: 100,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: "green",
  },
});

export default CollectionPage;
