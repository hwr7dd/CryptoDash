import * as React from "react";
import { StyleSheet } from "react-native";
import Charted from "../components/barchart";
import Pied from "../components/Piechart";
import { RouteProp } from "@react-navigation/native";

import { Text, View } from "../components/Themed";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Divider } from "react-native-paper";
import { Button } from "react-native";
import { useState } from "react";
export default function Scheduler() {
  let scheduler = [
    {
      id: 1,
      name: "First Schedule",
      starthour: 7,
      endhour: 21,
    },
    {
      id: 2,
      name: "Second Schedule",
      starthour: 7,
      endhour: 21,
    },
    {
      id: 3,
      name: "Third Schedule",
      starthour: 7,
      endhour: 21,
    },
  ];
  //route: RouteProp<{ params: { id: number } }, "params">,
  const actions = (id: number) => {
    const navigation = useNavigation();
    const [selectedSchedule, setSelectedSchedule] = useState(scheduler[0]);

    return (
      <View style={{ flex: 1, marginVertical: 10 }}>
        <Button
          title="Edit"
          onPress={() => navigation.navigate("Modal", { id })}
          color="#FFECAD"
        ></Button>
        <Button
          title="Delete"
          onPress={() => console.log("Simple Button pressed")}
          color="#E09090"
        ></Button>
      </View>
    );
  };
  const list = () => {
    return scheduler.map((element) => {
      return (
        <View key={element.id} style={styles.row}>
          <Text style={styles.rowItem}>{element.name}</Text>
          <Text style={styles.rowItem}>{element.starthour}</Text>
          {actions(element.id)}
        </View>
      );
    });
  };
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.headerItem}>Name</Text>
        <Text style={styles.headerItem}>Period</Text>
        <Text style={styles.headerItem}>Action</Text>
      </View>
      <Divider />
      {list()}
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    // marginHorizontal: 10,
    flexDirection: "row",
    textAlign: "center",
    fontSize: 25,
    // backgroundColor: "#2BB673",
  },
  headerItem: {
    marginHorizontal: 40,
    marginVertical: 20,
    backgroundColor: "#2BB673",
    padding: 5,
    borderRadius: 15,
    fontSize: 25,

    color: "white",
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 0.01,
    borderBottomColor: "#f3f6f4",
    alignContent: "center",
    textAlign: "center",
    marginTop: 10,
    borderRadius: 15,
  },
  rowItem: {
    // marginHorizontal: 40,
    alignContent: "center",
    color: "gray",
    fontSize: 25,
    flex: 1,
    justifyContent: "center",
    textAlign: "center",
    marginHorizontal: 10,
    borderWidth: 0.02,
    borderColor: "#f3f6f4",
    borderRadius: 15,
  },
});
