import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { Dimensions } from "react-native";

import { RootTabScreenProps } from "../types";
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";

export default function Pied() {
  const data = [
    {
      name: "Seoul",
      population: 21500000,
      color: "#E09090",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Toronto",
      population: 2800000,
      color: "#FFECAD",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
    {
      name: "Beijing",
      population: 527612,
      color: "#2BB673",
      legendFontColor: "#7F7F7F",
      legendFontSize: 15,
    },
  ];
  return (
    <View>
      <Text style={styles.title}>Electricity</Text>
      <PieChart
        data={data}
        width={300}
        height={220}
        hasLegend={false}
        chartConfig={{
          backgroundColor: "#ffffff",

          backgroundGradientFrom: "#ffffff",
          backgroundGradientTo: "#ffffff",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          propsForDots: {
            fill: "#38761D",
            r: "6",
            strokeWidth: "1",
            stroke: "#141f0a",
          },
          style: {
            borderRadius: 6,
          },
        }}
        style={{
          borderRadius: 16,
        }}
        accessor={"population"}
        backgroundColor={"transparent"}
        paddingLeft={"15"}
        center={[5, 5]}
        absolute
      />{" "}
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    marginHorizontal: 0,
    textAlign: "center",
    fontSize: 25,
    paddingRight: 100,
  },
});
