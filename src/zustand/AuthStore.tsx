import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

interface AuthStore {
  user: string | null;
  setUser: (user: string) => void;
  clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: async (user: any) => {
    try {
      await AsyncStorage.setItem("@user", user);
      set(() => ({ user }));
    } catch (error) {
      console.log("Error setting user:", error);
    }
  },
  clearUser: async () => {
    try {
      await AsyncStorage.removeItem("@user");
      set(() => ({ user: null }));
    } catch (error) {
      console.log("Error clearing user:", error);
    }
  },
}));

export default useAuthStore;
