import React, { FC, ReactElement, useState } from "react";
import { Alert, Button, StyleSheet, View } from "react-native";
import Axios from "axios";
export default function UserRegistration() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const newUser = () => {
    Axios.post(
      "https://parseapi.back4app.com/users",
      {
        username: "testnameS",
        email: "jake@statefarm.com",
        password: "#Password123",
      },
      {
        headers: {
          "X-Parse-Application-Id": "fn0Quvuc1Jcao662UK3B0VhNBGd7NFrlAooNGpPT",
          "X-Parse-REST-API-Key": "rGgnTxSVUJ1Tm9T8jioNUTr4DsZykqMBtynnvptn",
          "X-Parse-Revocable-Session": "1",
          "Content-Type": "application/json",
        },
      }
    ).then((response) => console.log(response));
  };

  return (
    <View>
      {/* <TextInput
        style={styles.input}
        value={username}
        placeholder={"Username"}
        onChangeText={(text) => setUsername(text)}
        autoCapitalize={"none"}
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder={"Password"}
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      /> */}
      <Button title={"Sign Up"} onPress={newUser} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
});
