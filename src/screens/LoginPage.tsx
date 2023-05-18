import { View, TextInput, StyleSheet, Button } from "react-native";
import { useState } from "react";
import { firebaseAuthentication } from "../firebase/index";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const LoginPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleSignIn = () => {
    signInWithEmailAndPassword(
      firebaseAuthentication,
      value.email,
      value.password
    ).then((response) => console.log(response));
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={value.email}
        onChangeText={(text) => setValue({ ...value, email: text })}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={value.password}
        onChangeText={(text) => setValue({ ...value, password: text })}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Sign In" onPress={handleSignIn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  input: {},
});

export default LoginPage;
