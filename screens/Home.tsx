import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Shadow } from "react-native-shadow-2";
import { Text, View } from "../components/Themed";
// import Login1 from "../components/login";
import UserRegistration from "../components/UserRegistration";
import Axios from "axios";
import { Button } from "react-native";
import { TextInput } from "react-native-paper";
import { serverAuthToken } from "parse";
import { useFocusEffect } from "@react-navigation/native";

const testuser = [
  {
    id: 1,
    name: "Harrison",
    email: "test@test.org",
    privledge: "Admin",
  },
];
export default function Home() {
  const [userInfo, setUserInfo] = useState(testuser[0]);
  const Details = () => {
    const [user, SetUser] = useState(testuser[0]);
    return (
      <View>
        <Text style={styles.subtitle}>
          <Text style={styles.bold}>Name: </Text>
          {user.name}
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.bold}>Email: </Text>
          {user.email}
        </Text>
        <Text style={styles.subtitle}>
          <Text style={styles.bold}>Privledge: </Text>
          {user.privledge}
        </Text>
      </View>
    );
  };
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

  const login = () => {
    Axios.get("https://parseapi.back4app.com/users", config);
  };
  const [isLoginVisible, setIsVisible] = useState(true);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [loginda, setLoginda] = useState({});
  const [register, setRegister] = useState(false);
  const [showinput, setShowinp] = useState(false);
  const [token, setToken] = useState();
  const toggleFunction = () => {
    setShowinp(true);
    setIsVisible(false);
    setInfoVisible(true);
  };
  const toggleFunction2 = () => {
    if (register === false) {
      setRegister(true);
    } else {
      setRegister(false);
    }
  };
  let config = {
    headers: {
      "X-Parse-Application-Id": "fn0Quvuc1Jcao662UK3B0VhNBGd7NFrlAooNGpPT",
      "X-Parse-REST-API-Key": "rGgnTxSVUJ1Tm9T8jioNUTr4DsZykqMBtynnvptn",
      "X-Parse-Revocable-Session": "1",
    },
    params: {
      username: text,
      password: text2,
    },
  };
  const [logout, setShowlogout] = useState(false);
  const submitLogout = () => {
    localStorage.setItem("token", "");
    setIsVisible(true);
    setShowlogout(false);
  };
  useFocusEffect(() => {
    const data = localStorage.getItem("token");

    if (data) {
      setIsVisible(false);
      setShowlogout(true);
    }
  });
  const submitLogin = () => {
    Axios.get("https://parseapi.back4app.com/login", config).then((response) =>
      localStorage.setItem("token", response.data.sessionToken)
    );
    setShowlogout(true);
    setIsVisible(false);
    setInfoVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      {isLoginVisible ? (
        <View style={styles.buttoncont}>
          <View style={styles.buttonitems}>
            <Button color="#2BB673" title="Log In" onPress={toggleFunction} />
          </View>
        </View>
      ) : null}
      {isInfoVisible ? (
        <View>
          <TextInput
            label="Email"
            value={text}
            autoComplete={false}
            onChangeText={(text) => setText(text)}
          />
          <TextInput
            label="Password"
            autoComplete={false}
            value={text2}
            onChangeText={(text2) => setText2(text2)}
          />
          <Button onPress={submitLogin} title="Login" />
        </View>
      ) : null}
      {logout ? <Button title="Logout" onPress={submitLogout} /> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logout: {},

  canvas: {
    flexDirection: "row",
    flex: 1,
    width: "100%",
    borderRadius: 15,
    borderColor: "#eeeeee",
    borderWidth: 1,
    // marginBottom: "70%",
  },
  bold: {
    fontWeight: "bold",
  },
  header: {
    fontSize: 100,
  },
  textcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  itmcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 20,
  },
  title: {
    fontSize: 40,
  },
  subtitle: {
    fontSize: 15,
  },
  buttoncont: {
    flex: 0.1,
    flexDirection: "row",
  },
  buttonitems: {
    margin: 20,
    fontSize: 15,
  },

  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
