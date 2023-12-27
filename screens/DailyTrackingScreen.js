import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML, downXML, menuXML } from "../icons";
import HeaderCard from "../components/HeaderCard";
import ButtonCustom from "../components/inputs/ButtonCustom";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryTheme,
} from "victory-native";
import { ScrollView } from "react-native";
import InsetShadow from "react-native-inset-shadow";

const sampleData = [
  { day: "Mon", bloodSugar: 100 },
  { day: "Tus", bloodSugar: 95 },
  { day: "Wed", bloodSugar: 130 },
  { day: "Thus", bloodSugar: 90 },
  { day: "Fri", bloodSugar: 115 },
  { day: "Sat", bloodSugar: 105 },
  { day: "Sun", bloodSugar: 0 },
];
const DailyTrackingScreen = ({ navigation }) => {
  const [select, setSelect] = useState("Weekly");
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 0 }}>
      <View
        style={{
          padding: 20,
          paddingBottom: 30,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <SvgXml xml={backXML} />
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Account")}>
          <SvgXml xml={menuXML} />
        </Pressable>
      </View>
      <HeaderCard title={"Dialy Tracking"} />
      <Pressable
        style={{
          width: 270,
          backgroundColor: "#045143",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Monitor blood sugar levels
        </Text>
      </Pressable>
      <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
        <VictoryBar
          style={{ data: { fill: "#04D100" } }}
          x="day"
          y="bloodSugar"
          data={sampleData}
        />
        <VictoryAxis
          crossAxis
          width={400}
          height={400}
          domain={[0, 10]}
          theme={VictoryTheme.material}
          offsetY={50}
          standalone={false}
        />
        <VictoryAxis
          dependentAxis
          crossAxis
          width={400}
          height={400}
          domain={[0, 120]}
          theme={VictoryTheme.material}
          offsetX={50}
          standalone={false}
          style={{
            axis: { stroke: "#756f6a" },
            axisLabel: { fontSize: 20, padding: 30 },
            grid: {
              stroke: ({ tick }) => (tick === 80 || tick === 100) && "red",
            },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 15, padding: 5 },
          }}
        />
        {/* </svg> */}
      </VictoryChart>
      <Pressable
        style={{
          width: 270,
          backgroundColor: "#045143",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 50,
          marginHorizontal: 20,
          marginTop: 30,
        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Monitor nutritional intake
        </Text>
      </Pressable>
      <Pressable onPress={() => setSelect(prev => prev === 'Weekly' ? 'Daily' : 'Weekly')}>
        <InsetShadow
          elevation={10}
          shadowColor={"#000"}
          containerStyle={{
            width: 100,
            height: 40,
            borderRadius: 15,
            margin: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "700", marginRight: 5 }}>
            {select}
          </Text>
          <SvgXml xml={downXML} />
        </InsetShadow>
      </Pressable>
      <View
        style={{
          marginHorizontal: 50,
          marginVertical: 50,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: 120,
            height: 120,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 60,
            borderWidth: 10,
            borderColor: "rgba(4, 209, 0, 0.31)",
            position: "absolute",
            top: "50%",
            left: "50%",
            zIndex: 10,
            backgroundColor: "#fff",
            transform: [{ translateX: -60 }, { translateY: -60 }],
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700" }}>10 foods</Text>
        </View>
        <View
          style={{
            width: "45%",
            height: 50,
            marginBottom: 20,
            aspectRatio: 1,
            backgroundColor: "#fff",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#04D100",
              marginBottom: 5,
            }}
          >
            200kcal
          </Text>
          <Text style={{ fontSize: 15 }}>Calories</Text>
        </View>
        <View
          style={{
            width: "45%",
            aspectRatio: 1,
            backgroundColor: "#fff",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            height: 50,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#04D100",
              marginBottom: 5,
            }}
          >
            50g
          </Text>
          <Text style={{ fontSize: 15 }}>Carbs</Text>
        </View>
        <View
          style={{
            width: "45%",
            aspectRatio: 1,
            backgroundColor: "#fff",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            height: 50,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#04D100",
              marginBottom: 5,
            }}
          >
            20g
          </Text>
          <Text style={{ fontSize: 15 }}>Fats</Text>
        </View>
        <View
          style={{
            width: "45%",
            aspectRatio: 1,
            backgroundColor: "#fff",
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            elevation: 5,
            shadowColor: "#000",
            height: 50,
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "600",
              color: "#04D100",
              marginBottom: 5,
            }}
          >
            20g
          </Text>
          <Text style={{ fontSize: 15 }}>Proteins</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default DailyTrackingScreen;
