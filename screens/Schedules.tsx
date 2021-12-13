import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Scheduler from "../components/table";
import { RootTabScreenProps } from "../types";
import { Button } from "react-native";
import { FAB } from "react-native-elements";
import DropDownPicker from "react-native-dropdown-picker";
import { useFocusEffect, useIsFocused } from "@react-navigation/native";

export default function Schedules({
  navigation,
}: RootTabScreenProps<"Schedules">) {
  let selectedDate: Date = new Date("2021-01-01");
  const [loggedin, setLoggedin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("12");
  // setToken(JSON.parse(localStorage.getItem("token")!));
  useFocusEffect(() => {
    const data = localStorage.getItem("token");

    if (data) {
      setLoggedin(true);
    } else {
      setLoggedin(false);
    }
  });

  return (
    <View>
      {loggedin ? (
        <View style={styles.container}>
          <Text style={styles.title}>Schedules</Text>
          <Scheduler />
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.title}>Please go back home to login</Text>
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
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
