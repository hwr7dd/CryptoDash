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
import { Modal } from "../components/modeal";
import { DataTable } from "react-native-paper";
import { FAB } from "react-native-elements";
import { local } from "d3";

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
  const [data1, setdata1] = useState(
    JSON.parse(localStorage.getItem("data1")!)
  );
  const [data3, setData3] = useState("test");
  let count = 0;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const submitPress: any = () => {
    if (data1) {
      setIsModalVisible(true);
      count += 1;
    }
  };
  useEffect(() => {
    localStorage.setItem(
      "data1",
      JSON.stringify({
        ...data1,
        starthour: value1,
        endhour: value3,
      })
    );
  }, [data1]);

  const [datafull, setDatafull] = useState(
    JSON.parse(localStorage.getItem("data2")!)
  );
  const [countd, setCountd] = useState(false);
  const [data23, setDat] = useState(JSON.parse(localStorage.getItem("data2")!));
  const handleNew = () => {
    setdata1({ ...data1, starthour: value1, endhour: value3 });
    setCountd(true);
    // const x = JSON.parse(localStorage.getItem("data2")!);
    // countd += 1;
    // setData3(x.filter((e: any) => e.id !== data1.id));
    // setDatafull(x.filter((e: any) => e.id !== data1.id));
    // localStorage.removeItem('data')
    // localStorage.setItem("data1", data1);
    // setData3(localStorage.getItem("data1"));
    setIsModalVisible(() => !isModalVisible);
  };
  const [dataform, setDataform] = useState(
    JSON.parse(localStorage.getItem("data2")!)
  );
  const [doneEdit, setDonedit] = useState(false);
  if (countd) {
    setDatafull([...datafull, data1]);
    localStorage.setItem("data2", JSON.stringify(datafull));
    ("set data");
    setCountd(false);
    setDonedit(true);
    // setDatafull([...datafull, data1]);
    // (JSON.stringify(datafull));
  }
  if (doneEdit) {
    localStorage.setItem("data2", JSON.stringify(datafull));
    setDonedit(false);
  }
  const handleDecline = () => setIsModalVisible(() => !isModalVisible);
  const [open1, setOpen1] = useState(true);
  // const [value1, setValue1] = useState(data1.starthour);
  const [value1, setValue1] = useState(data1.starthour);
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
  // const [value3, setValue3] = useState(data1.endhour);

  const [value3, setValue3] = useState(data1.endhour);

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
  const [adding, setAdd] = useState(false);
  const [done, setDone] = useState(true);
  return (
    <View style={styles.container}>
      <Modal isVisible={isModalVisible}>
        <Modal.Container>
          <View style={styles.modal}>
            <Modal.Header title="Are you sure you want to change the schedule?" />
            <Modal.Body></Modal.Body>
            <Modal.Footer>
              <View style={styles.timeCont}>
                <View style={styles.button}>
                  <Button
                    title="Go Back"
                    onPress={handleDecline}
                    color="#E09090"
                  />
                </View>
                <View style={styles.button}>
                  <Button
                    title="Change it!"
                    onPress={handleNew}
                    color="#2BB673"
                  />
                </View>
              </View>
            </Modal.Footer>
          </View>
        </Modal.Container>
      </Modal>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title>Schedule Name</DataTable.Title>
          <DataTable.Title numeric>Start Time (24 hour format)</DataTable.Title>
          <DataTable.Title numeric>End Time (24 hour format)</DataTable.Title>
        </DataTable.Header>

        <DataTable.Row>
          <DataTable.Cell>{data1.name}</DataTable.Cell>
          <DataTable.Cell numeric>{data1.starthour}</DataTable.Cell>
          <DataTable.Cell numeric>{data1.endhour}</DataTable.Cell>
        </DataTable.Row>
      </DataTable>
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
    justifyContent: "flex-start",
  },
  data: {
    backgroundColor: "yellow",
    flexDirection: "row",
  },
  dataItem: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  timeCont: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: 20,
  },
  picker: {
    marginHorizontal: 10,
  },
  modal: {
    width: "100%",
    height: "90%",
    alignItems: "center",
    justifyContent: "center",
  },
  submitButton: {
    marginTop: 20,
    marginLeft: 80,
  },
  timeHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    borderRadius: 50,
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
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
