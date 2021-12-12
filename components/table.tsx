import * as React from "react";
import { StyleSheet, Button } from "react-native";
import Charted from "../components/barchart";
import Pied from "../components/Piechart";
import { RouteProp, useLinkBuilder } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { FAB } from "react-native-elements";
import { useFocusEffect } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";

import { Text, View } from "../components/Themed";
import { NavigationContainer } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { Icon } from "react-native-elements";
import { Divider, TextInput } from "react-native-paper";
// import { Button } from "react-native";
// import { Button } from "react-native-elements";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { useCallback } from "react";
import { style } from "d3";
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
  const [selectedSchedule, setSelectedSchedule] = useState(scheduler);
  const isFocus = useIsFocused();
  const [c, setC] = useState(false);
  useEffect(() => {
    setSelectedSchedule(JSON.parse(localStorage.getItem("data2")!));
  }, [isFocus]);
  const actions = (id: number) => {
    const navigation = useNavigation();
    const actionLi = () => {
      setC(true);
      setSelectedSchedule(selectedSchedule.filter((e) => e.id !== id));
      localStorage.setItem(
        "data1",
        JSON.stringify(selectedSchedule.find((e) => e.id === id))
      );
      localStorage.setItem("data2", JSON.stringify(selectedSchedule)!);
      // navigation.navigate("Modal", { id });
    };

    if (c) {
      setC(false);
      navigation.navigate("Modal", { id });
    }

    const deleteLi = () => {
      setSelectedSchedule(selectedSchedule.filter((e) => e.id !== id));
    };
    return (
      <View style={{ flex: 1, marginVertical: 10 }}>
        <Button
          title="Edit"
          // onPress={() => navigation.navigate("Modal", { id })}
          onPress={actionLi}
          color="#FFECAD"
        ></Button>
        <Button title="Delete" onPress={deleteLi} color="#E09090"></Button>
      </View>
    );
  };
  const [adding, setAdd] = useState(false);
  const [editDone, setDone] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [newSched, setNewSched] = useState(selectedSchedule[0]);
  const [add2, setAdd2] = useState(true);
  const addSch = () => {
    setDone(false);
    setAdd(true);
  };
  const count = useRef(0);
  const submitSched = () => {
    const startConv = parseInt(start);
    const endConv = parseInt(end);
    setNewSched({
      ...newSched,
      id: Math.random(),
      name: name2,
      endhour: endConv,
      starthour: startConv,
    });
    setAdd2(false);
    setDone(true);
    setAdd(false);

    count.current = count.current + 1;
    count.current;
  };
  const disregard = () => {
    setDone(true);
    setAdd(false);
  };
  useEffect(() => {
    if (count.current > 0) {
      setSelectedSchedule([...selectedSchedule, newSched]);
      ("d");
    } else {
      null;
    }
  }, [newSched]);
  useEffect(() => {
    if ((count.current = 0)) {
      localStorage.setItem("data2", JSON.stringify(selectedSchedule));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("data2", JSON.stringify(selectedSchedule));
  }, [selectedSchedule]);
  const [name2, onChangeName] = useState("Name");
  const [start, onChangeStart] = useState("9");
  const [end, onChangeEnd] = useState("24");

  const isexpand = () => {
    adding ? 200 : 50;
  };
  const list = () => {
    return selectedSchedule.map((element) => {
      return (
        <View>
          <View key={element.id} style={styles.row}>
            <Text style={styles.rowItem}>{element.name}</Text>
            <Text style={styles.rowItem}>{element.starthour}</Text>
            <Text style={styles.rowItem}>{element.endhour}</Text>
            {actions(element.id)}
          </View>
        </View>
      );
    });
  };
  return (
    <View>
      {adding ? (
        <View style={styles.header}>
          <Text style={styles.headerItem}>Name</Text>
          <Text style={styles.headerItem}>Start</Text>
          <Text style={styles.headerItem}>End</Text>
        </View>
      ) : (
        <View style={styles.header}>
          <Text style={styles.headerItem2}>Name</Text>
          <Text style={styles.headerItem2}>Start</Text>
          <Text style={styles.headerItem2}>End</Text>
        </View>
      )}
      {list()}
      {adding ? (
        <View style={styles.row}>
          <Text>Name</Text>
          <TextInput
            onChangeText={onChangeName}
            style={styles.rowItem}
            value={name2}
            autoComplete={false}
          />
          <Text>Start Hour</Text>
          <TextInput
            onChangeText={onChangeStart}
            autoComplete={false}
            style={styles.rowItem}
            // style={styles.Otp}
            keyboardType="numeric"
            value={start}
          />
          <Text>End Hour</Text>
          <TextInput
            onChangeText={onChangeEnd}
            autoComplete={false}
            keyboardType="numeric"
            style={styles.rowItem}
            value={end}
          ></TextInput>
          <View>
            <Button title="Submit" color="#2BB673" onPress={submitSched} />
            <Button title="Go Back" color="#E09090" onPress={disregard} />
          </View>
        </View>
      ) : null}
      <FAB
        onPress={addSch}
        visible={editDone}
        icon={{ name: "add", color: "white" }}
        color="#2BB673"
      />
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
    marginStart: 200,
    // flexGrow: 0.75,
    marginVertical: 20,
    backgroundColor: "#2BB673",
    borderRadius: 15,
    padding: 3,
    fontSize: 25,

    color: "white",
  },

  headerItem2: {
    marginStart: 30,
    // flexGrow: 0.75,
    marginVertical: 20,
    backgroundColor: "#2BB673",
    borderRadius: 15,
    padding: 3,
    fontSize: 25,

    color: "white",
  },
  subButtion: {
    justifyContent: "center",
    marginVertical: 20,
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
