import { View, Text, Alert } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML, menuXML } from "../icons";
import HeaderCard from "../components/HeaderCard";
import ButtonCustom from "../components/inputs/ButtonCustom";

const CheckOwnFoodResultScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 0 }}>
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
      <HeaderCard title={"RESULT"} containerStyle={{ width: 100 }} />
      <View
        style={{
          paddingHorizontal: 50,
          paddingVertical: 100,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
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
      <ButtonCustom
        onPress={() => navigation.navigate("CheckOwnFoodResult")}
        buttonStyle={{
          width: "60%",
          alignSelf: "center",
          backgroundColor: "#F00",
          marginBottom: 20,
        }}
      >
        HARMFUL
      </ButtonCustom>
      <ButtonCustom
        onPress={() =>
          Alert.alert("Add to Diary", "Add recomend food to diary", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => console.log("OK Pressed") },
          ])
        }
        buttonStyle={{ width: "60%", alignSelf: "center" }}
      >
        ADD TO DIARY
      </ButtonCustom>
    </View>
  );
};

export default CheckOwnFoodResultScreen;
