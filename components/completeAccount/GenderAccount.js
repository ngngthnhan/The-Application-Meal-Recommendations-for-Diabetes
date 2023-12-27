import { View, Text } from "react-native";
import React from "react";
import { SvgXml } from "react-native-svg";
import { femaleXML, maleXML } from "../../icons";
import { Pressable } from "react-native";

const genders = [
  { key: "female", title: "female", icon: femaleXML },
  { key: "male", title: "male", icon: maleXML },
];
export default function GenderAccount({ gender = "female", onPress }) {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 50 }}>
        <Text style={{ fontSize: 18 }}>What do you look like?</Text>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>
          What is your gender?
        </Text>
      </View>
      <View style={{ flex: 1 }}>
        <View
          style={{
            paddingHorizontal: 30,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          {genders.map((item) => {
            const activeGender = gender === item.key;
            return (
              <Pressable
                onPress={() => onPress(item.key)}
                key={item.key}
                style={{
                  width: "45%",
                  aspectRatio: 1,
                  borderRadius: 10,
                  backgroundColor: activeGender ? "#045143" : "#ccc",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <SvgXml
                  xml={item.icon}
                  color={activeGender ? "#ffffff" : "rgba(0, 0, 0, 0.40)"}
                />
                <Text
                  style={{
                    color: activeGender ? "#ffffff" : "rgba(0, 0, 0, 0.40)",
                    fontSize: 25,
                    fontWeight: "700",
                    marginTop: 15,
                  }}
                >
                  {item.title}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
