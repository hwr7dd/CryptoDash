import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Icon } from "react-native-elements";
import { Shadow } from "react-native-shadow-2";
import { Text, View } from "../components/Themed";
// import { RootTabScreenProps } from '../types';
import { Button } from "react-native";
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

  const [isLoginVisible, setIsVisible] = useState(true);
  const [isInfoVisible, setInfoVisible] = useState(false);
  const [isLogoutVisibile, setIsVisible2] = useState(false);
  const toggleFunction = () => {
    setIsVisible(false);
    setInfoVisible(true);
    setIsVisible2(true);
  };
  const toggleFunction2 = () => {
    setIsVisible2(false);
    setIsVisible(false);
    setInfoVisible(false);
  };
  const [person, setPerson] = useState(testuser[0]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome</Text>
      {isInfoVisible ? (
        <Text style={styles.subtitle}>{person.name}</Text>
      ) : (
        <Text style={styles.subtitle}>Please Log in or Register Below</Text>
      )}

      {isInfoVisible ? (
        <View style={styles.container}>
          <View style={styles.canvas}>
            <View style={styles.textcontainer}>
              <Details />
            </View>
            <View style={styles.itmcontainer}>
              <Icon
                raised
                reverseColor="black"
                name="user"
                type="font-awesome"
                color="black"
                size={50}
                containerStyle={{ borderWidth: 1, borderColor: "#eeeeee" }}
              />
            </View>
            <View style={styles.logout}>
              <Button
                title="Log Out"
                color="#E09090"
                onPress={toggleFunction2}
              />
            </View>
          </View>
        </View>
      ) : (
        <View style={styles.buttoncont}>
          <View style={styles.buttonitems}>
            <Button color="#2BB673" title="Log In" onPress={toggleFunction} />
          </View>
          <View style={styles.buttonitems}>
            <Button color="#E09090" title="Register" onPress={toggleFunction} />
          </View>
        </View>
      )}
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
