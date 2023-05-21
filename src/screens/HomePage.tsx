import { Pressable, ScrollView, Text } from "react-native";
import ImageGallery from "../components/ImageGallery";
import useAuthStore from "../zustand/AuthStore";

const HomePage = () => {
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  return (
    <ScrollView>
      <ImageGallery />
      <Pressable>
        <Text>{user}</Text>
        <Text onPress={clearUser}>SignOut</Text>
      </Pressable>
    </ScrollView>
  );
};

export default HomePage;
