import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML, menuXML } from "../icons";
import HeaderCard from "../components/HeaderCard";
import ButtonCustom from "../components/inputs/ButtonCustom";
import { TextInput } from "react-native";

const CheckOwnFoodScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 0 }}>
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
      <HeaderCard title={"Check your own foods"}>
        <Text style={{ color: "#045143", fontSize: 18 }}>
          Enter nutrition info of your food
        </Text>
      </HeaderCard>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 100,
        }}
      >
        <View
          style={{
            backgroundColor: "#045143",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            NUTRITION INFOR
          </Text>
        </View>
        <View
          style={{
            padding: 30,
            borderWidth: 1,
            borderColor: "#045143",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Calories
            </Text>
            <TextInput
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
              defaultValue="200"
            />

            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              Kcal
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Carbs
            </Text>
            <TextInput
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
              defaultValue="50"
            />
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              g
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Fats
            </Text>
            <TextInput
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
              defaultValue="50"
            />
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              g
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-end",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Protein
            </Text>
            <TextInput
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
              defaultValue="50"
            />
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              g
            </Text>
          </View>
        </View>
      </View>
      <ButtonCustom
        onPress={() => navigation.navigate("CheckOwnFoodResult")}
        buttonStyle={{ width: "60%", alignSelf: "center", marginTop: 60 }}
      >
        CHECK
      </ButtonCustom>
    </View>
  );
};

export default CheckOwnFoodScreen;
