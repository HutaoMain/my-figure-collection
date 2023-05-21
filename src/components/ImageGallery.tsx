import { StyleSheet, View, Image, Text } from "react-native";
import React from "react";

const images = [
  "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1660292785457-ef25cffef35c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://images.unsplash.com/photo-1632506823413-200b3d091e90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1670834186771-c62ce681c65b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
  "https://i.pinimg.com/736x/1b/73/f1/1b73f15b9e5bc9cdec3d83bc9da9d238--landscapes-photography.jpg",
  "https://d3ieicw58ybon5.cloudfront.net/ex/610.407/u/7514dc633e544d1dafdec87c9ca1d411.jpg",
  "https://i.pinimg.com/736x/84/f8/61/84f861b2dd7de75bcb1249267beedb0f--anime-figures-gates.jpg",
  "https://ae01.alicdn.com/kf/S65f9ed340adf4642a772230f3506650fU.jpg?width=805&height=805&hash=1610",
  "https://ae01.alicdn.com/kf/S8b834751faeb41f7a52a787f7d3953424/22cm-Genshin-Impact-Klee-Hibana-Knight-Anime-Figure-Kamisato-Ayaka-PVC-Action-Figure-Collection-Model-Doll.jpg_640x640.jpg",
  "https://preview.redd.it/7w5a28qxrdf71.jpg?width=640&crop=smart&auto=webp&s=bbae513015bb4e8acbe0532cbb3e2213d0313a3d",
  "https://resize.cdn.otakumode.com/ex/680.680/u/99202420e90c4bf8b1004a03dc255f03.jpg",
];

const ImageGallery = () => {
  const displayedImages = images.slice(0, 7); // Show only the first 7 images

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Photo Gallery</Text>
      <View style={styles.gallery}>
        {displayedImages.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image }}
            style={[styles.image, index === 0 ? styles.firstImage : null]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#ffff",
  },
  gallery: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  image: {
    width: "32%",
    height: "32%",
    aspectRatio: 1,
    marginBottom: 10,
    resizeMode: "contain",
    borderColor: "#ffff",
    borderWidth: 2,
  },
  firstImage: {
    width: "100%",
  },
});

export default ImageGallery;
