import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, Button } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Text, View } from "../components/Themed";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "../types";
import { useState, useRef } from "react";
import * as React from "react";
import DropDownPicker from "react-native-dropdown-picker";
import { useEffect } from "react";
import OverlayExample from "../components/popup";
export interface datat {
  id?: number;
  name?: string;
  starthour?: number;
  endhour?: number;
}
const test = { id: 1, name: "test", starthour: 8, endhour: 9 };
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

export default function ModalScreen() {
  const route = useRoute<RouteProp<RootStackParamList, "Modal">>();
  const chosenData: any = scheduler.find((e) => e.id === route.params.id);
  const [open1, setOpen1] = useState(true);
  const [value1, setValue1] = useState(chosenData!.starthour);
  const [items1, setItems1] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
    { label: "12", value: 12 },
    { label: "13", value: 13 },
    { label: "14", value: 14 },
    { label: "15", value: 15 },
    { label: "16", value: 16 },
    { label: "17", value: 17 },
    { label: "18", value: 18 },
    { label: "19", value: 19 },
    { label: "20", value: 20 },
    { label: "21", value: 21 },
    { label: "22", value: 22 },
    { label: "23", value: 23 },
    { label: "24", value: 24 },
  ]);

  const [open3, setOpen3] = useState(true);
  const [value3, setValue3] = useState(chosenData!.endhour);
  const [items3, setItems3] = useState([
    { label: "1", value: 1 },
    { label: "2", value: 2 },
    { label: "3", value: 3 },
    { label: "4", value: 4 },
    { label: "5", value: 5 },
    { label: "6", value: 6 },
    { label: "7", value: 7 },
    { label: "8", value: 8 },
    { label: "9", value: 9 },
    { label: "10", value: 10 },
    { label: "11", value: 11 },
    { label: "12", value: 12 },
    { label: "13", value: 13 },
    { label: "14", value: 14 },
    { label: "15", value: 15 },
    { label: "16", value: 16 },
    { label: "17", value: 17 },
    { label: "18", value: 18 },
    { label: "19", value: 19 },
    { label: "20", value: 20 },
    { label: "21", value: 21 },
    { label: "22", value: 22 },
    { label: "23", value: 23 },
    { label: "24", value: 24 },
  ]);
  const [data2, setData2] = useState(chosenData);
  const count = useRef(0);
  const submitPress: any = () => {
    if (chosenData) {
      setData2({ ...data2, starthour: value1, endhour: value3 });
      count.current = count.current + 1;
    }
  };
  useEffect(() => {
    if (count.current > 0) {
      <OverlayExample></OverlayExample>;
    }
  }, [data2]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{chosenData?.name}</Text>
      <View style={styles.data}>
        <Text>{chosenData?.name}</Text>
        <Text>{data2.starthour}</Text>
      </View>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
      <View style={styles.timeHeader}>
        <View style={styles.timeItem}>
          <Text style={styles.timeText}>Start Time</Text>
        </View>
        <View style={styles.timeItem}>
          <Text style={styles.timeText}>End Time</Text>
        </View>
      </View>
      <View style={styles.timeCont}>
        <View style={styles.picker}>
          <DropDownPicker
            open={open1}
            value={value1}
            placeholder="Time"
            items={items1}
            containerStyle={{ margin: 20 }}
            setOpen={setOpen1}
            setValue={setValue1}
            setItems={setItems1}
          />
        </View>
        <View style={styles.picker}>
          <DropDownPicker
            open={open3}
            placeholder="Time"
            value={value3}
            style={{ flexWrap: "nowrap" }}
            items={items3}
            containerStyle={{ margin: 20 }}
            setOpen={setOpen3}
            setValue={setValue3}
            setItems={setItems3}
          />
        </View>
        <View style={styles.submitButton}>
          <Button title="Submit" onPress={submitPress} color="#2BB673" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  data: {
    backgroundColor: "yellow",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeCont: {
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 50,
  },
  picker: {
    marginHorizontal: 10,
  },
  submitButton: {
    marginTop: 20,
    marginLeft: 80,
  },
  timeHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },

  time: {
    flexDirection: "column",
    justifyContent: "center",
  },
  timeItem: {
    marginHorizontal: 20,
    marginRight: 40,
    justifyContent: "flex-end",
    fontSize: 30,
  },
  timeText: {
    fontSize: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
