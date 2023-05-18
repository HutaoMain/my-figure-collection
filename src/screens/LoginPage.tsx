import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import { useState } from "react";
import { firebaseAuthentication } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import useAuthStore from "../zustand/AuthStore";

const LoginPage = ({ navigation }: any) => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  const setUser = useAuthStore((state) => state.setUser);

  const handleSignIn = () => {
    signInWithEmailAndPassword(
      firebaseAuthentication,
      value.email,
      value.password
    ).then((response) => {
      console.log(response);
      setUser(value.email);
      navigation.navigate("Home");
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.textHeaderContainer}>
        <Text style={styles.biggerTextHeader}>Let's sign you in.</Text>
        <Text style={styles.smallerTextHeader}>
          Welcome back. {"\n"}You've been missed!
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#FFFFFF"
          value={value.email}
          onChangeText={(text) => setValue({ ...value, email: text })}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#FFFFFF"
          value={value.password}
          onChangeText={(text) => setValue({ ...value, password: text })}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.btnContainer}>
        <Pressable style={styles.btnLogin} onPress={handleSignIn}>
          <Text style={styles.btnTitle}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-evenly",
    flex: 1,
    backgroundColor: "#25242D",
  },
  inputContainer: {
    width: "75%",
    gap: 20,
  },
  input: {
    color: "#FFFFFF",
    borderColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    height: 60,
    fontSize: 18,
    paddingHorizontal: 10,
  },
  textHeaderContainer: {
    alignItems: "flex-start",
  },
  biggerTextHeader: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "left",
  },
  smallerTextHeader: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "500",
    textAlign: "left",
  },
  btnContainer: {
    width: "75%",
  },
  btnLogin: {
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    height: 50,

    alignItems: "center",
    justifyContent: "center",
  },
  btnTitle: {
    fontSize: 18,
  },
});

export default LoginPage;
