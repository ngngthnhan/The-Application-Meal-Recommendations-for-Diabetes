import { View, Text, TextInput } from "react-native";
import React from "react";

export default function AgeAccount() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ paddingHorizontal: 30, paddingBottom: 50 }}>
        <Text style={{ fontSize: 18 }}>What do you look like?</Text>
        <Text style={{ fontSize: 30, fontWeight: "700" }}>
          How old are you?
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "center" }}>
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
      </View>
    </View>
  );
}
