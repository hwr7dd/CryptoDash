import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import Scheduler from "../components/table";
import { RootTabScreenProps } from "../types";
import { Button } from "react-native";

export default function Schedules({
  navigation,
}: RootTabScreenProps<"Schedules">) {
  let selectedDate: Date = new Date("2021-01-01");
  const [dateData, setDateData] = useState<Date>(selectedDate);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Schedules</Text>
      <Scheduler />
      {/* <Button title="Test" onPress={() => navigation.navigate("Modal")}>
        test
      </Button> */}
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
