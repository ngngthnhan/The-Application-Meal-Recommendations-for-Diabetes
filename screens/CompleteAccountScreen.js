import {
  View,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { backXML } from "../icons";
import ButtonCustom from "../components/inputs/ButtonCustom";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import GenderAccount from "../components/completeAccount/GenderAccount";
import AgeAccount from "../components/completeAccount/AgeAccount";
import TallAcount from "../components/completeAccount/TallAcount";
import WeightAccount from "../components/completeAccount/WeightAccount";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../contanst";

const CompleteAccountScreen = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [gender, setGender] = useState("female");
  return (
    <KeyboardAvoidingView
      behavior="position"
      contentContainerStyle={{
        ...StyleSheet.absoluteFillObject,
        width: SCREEN_WIDTH,
        height: SCREEN_HEIGHT,
      }}
      style={{ flex: 1 }}
    >
      <ImageBackground
        source={require("../assets/images/bg_linear_gradient.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}
        >
          <SvgXml xml={backXML} />
        </Pressable>
        <View style={{ alignItems: "center", marginVertical: 60 }}>
          <Text style={{ color: "#045143", fontSize: 34, fontWeight: "700" }}>
            Complete Account
          </Text>
        </View>
        {index === 0 ? (
          <GenderAccount onPress={(a) => setGender(a)} gender={gender} />
        ) : index === 1 ? (
          <AgeAccount />
        ) : index === 2 ? (
          <TallAcount />
        ) : (
          <WeightAccount />
        )}
        <View
          style={{
            paddingHorizontal: 30,
            paddingVertical: 40,
          }}
        >
          <ButtonCustom
            onPress={() => {
              if (index < 3) {
                setIndex((cur) => cur + 1);
              } else {
                navigation.navigate("LogIn");
              }
            }}
          >
            next
          </ButtonCustom>
          <View
            style={{
              paddingTop: 40,
              flexDirection: "row",
              flexWrap: "nowrap",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {[0, 0, 0, 0].map((item, i) => (
              <View
                key={i}
                style={{
                  width: "23%",
                  height: 2,
                  borderRadius: 1,
                  backgroundColor: i <= index ? "#000" : "rgba(0, 0, 0, 0.25)",
                }}
              />
            ))}
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default CompleteAccountScreen;
