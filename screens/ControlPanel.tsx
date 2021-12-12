import * as React from "react";
import { StyleSheet } from "react-native";
import Charted from "../components/barchart";
import Pied from "../components/Piechart";
// import DeviceOn from "../components/turnon";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import { Icon } from "react-native-elements";
const temp = 39;
const humid = 49;

export default function ControlPanel({
  navigation,
}: RootTabScreenProps<"ControlPanel">) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Control Panel</Text>
      <View style={styles.charts}>
        <View style={styles.chartitems}>
          <Charted></Charted>
        </View>
        <View style={styles.chartitems}>
          <Pied></Pied>
        </View>
      </View>
      <View style={styles.cards}>
        <View style={styles.carditems}>
          <Icon
            reverseColor="black"
            name="tint"
            type="font-awesome"
            color="#cfe2f3"
            size={25}
          />
          <Text style={styles.subtitle}>Humidity</Text>
          {humid > 31 ? (
            <View style={styles.indicators}>
              <Text style={styles.cardtextgreen}>42%</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.cardtextred}>39F</Text>
            </View>
          )}
        </View>
        <View style={styles.carditems}>
          <Icon
            reverseColor="black"
            name="thermometer-half"
            type="font-awesome"
            color="#E09090"
            size={30}
          />
          <Text style={styles.subtitle}>Temperature</Text>
          {temp > 31 ? (
            <View style={styles.indicators}>
              <Text style={styles.cardtextgreen}>32F</Text>
            </View>
          ) : (
            <View>
              <Text style={styles.cardtextred}>39F</Text>
            </View>
          )}
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
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 20,
  },
  charts: {
    flex: 1,
    flexDirection: "row",
    width: "auto",
    justifyContent: "center",
  },
  chartitems: {
    margin: 100,
  },
  carditems: {
    margin: 25,
    padding: 50,
    // borderRadius: 10,
    // borderColor: "#eeeeee",
    // borderWidth: 1,
    justifyContent: "center",
  },
  indicators: {},
  cards: {
    flex: 1,
    borderRadius: 15,

    flexDirection: "row",
    width: "auto",
    marginTop: 200,
    marginBottom: 40,
  },

  cardtextgreen: {
    textAlign: "center",
    fontSize: 25,
    color: "green",
    justifyContent: "center",
  },
  cardtextred: {
    textAlign: "center",
    fontSize: 25,
    color: "Red",
    justifyContent: "center",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
