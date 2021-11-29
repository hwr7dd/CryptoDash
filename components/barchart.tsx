import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '../components/Themed';
import {  Dimensions } from "react-native";

import { RootTabScreenProps } from '../types';
import {
    LineChart,
    BarChart,
    PieChart,
    ProgressChart,
    ContributionGraph,
    StackedBarChart
  } from "react-native-chart-kit";
export default function Charted(){
return(
<View>
   <Text style={styles.title}>Temperature</Text>
  <LineChart
    data={{
      labels: ["11/28", "11/29", "11/30", "12/1", "12/2", "12/3"],
      datasets: [
        {
          data: [
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100,
            Math.random() * 100
          ]
        }
      ]
    }}
    // width={Dimensions.get("window").width} // from react-native
    width={325}
    height={220}
    yAxisLabel=""
    yAxisSuffix="°F"
    yAxisInterval={1} // optional, defaults to 1
    chartConfig={{
      backgroundColor: "#ffffff",
      backgroundGradientFrom: "#ffffff",
      backgroundGradientTo: "#ffffff",
      fillShadowGradient:"#bbff66",
      fillShadowGradientOpacity:.5,
      linejoinType:"bevel",
    //   withInnerLines:{false},
      decimalPlaces: 0, // optional, defaults to 2dp
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      style: {
        borderRadius: 2
      },
      propsForLabels:{
        
      },
      propsForBackgroundLines: {
        strokeDasharray: '', 
        strokeDashoffset: 15,
        
      },
      propsForDots: {
        fill:"#38761D",
        r: "6",
        strokeWidth: "0",
        stroke: "#141f0a"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16,
      fontFamily: 'Roboto',
    }}
  />
</View>
)}
const styles = StyleSheet.create({
    title: {
        marginHorizontal:10,
        textAlign:'center',
        fontSize:25,
    },
  });
  