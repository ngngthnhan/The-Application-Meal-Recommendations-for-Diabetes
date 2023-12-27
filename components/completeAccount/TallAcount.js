import { View, Text } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { Pressable } from "react-native";

const unitHeight = [
  { key: "ft", title: "ft" },
  { key: "cm", title: "cm" },
];
export default function TallAcount() {
  const [unit, setUnit] = useState("cm");
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 50 }}>
        <Text style={{ fontSize: 18 }}>What do you look like?</Text>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>
          How tall are you?
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View
          style={{
            alignItems: "flex-end",
            flexDirection: "row",
            paddingTop: 70,
          }}
        >
          <TextInput
            style={{
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              width: 100,
              fontSize: 30,
              fontWeight: "500",
              textAlign: "center",
            }}
            keyboardType="numeric"
          />
          <Text
            style={{
              fontSize: 25,
              paddingLeft: 5,
              width: 40,
              transform: [{ translateY: 8 }],
            }}
          >
            {unit}
          </Text>
        </View>
        <View
          style={{
            width: 140,
            height: 50,
            borderRadius: 25,
            backgroundColor: "#E6E7E6",
            marginTop: 40,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          {unitHeight.map(({ key, title }) => (
            <Pressable
              onPress={() => setUnit(key)}
              key={key}
              style={{
                width: "50%",
                height: "100%",
                borderRadius: 25,
                justifyContent: "center",
                backgroundColor: key === unit ? "#045143" : "transparent",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                  color: key === unit ? "white" : "rgba(0, 0, 0, 0.50)",
                  textAlign: "center",
                }}
              >
                {title}
              </Text>
            </Pressable>
          ))}
        </View>
      </View>
    </View>
  );
}
