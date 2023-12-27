import { View, Text } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { SvgXml } from "react-native-svg";

const InputCustomAuthen = ({ label, icon, ...props }) => {
  return (
    <View style={{ alignItems: "flex-start", justifyContent: "flex-start" }}>
      <Text style={{ fontSize: 18, fontWeight: "500", marginBottom: 8 }}>
        {label}
      </Text>
      <View style={{ width: "100%", justifyContent: "center" }}>
        <View style={{ position: "absolute", left: "8%", zIndex: 10 }}>
          <SvgXml xml={icon} />
        </View>
        <TextInput
          {...props}
          style={{
            width: "100%",
            height: 45,
            backgroundColor: "#E6E7E6",
            borderRadius: 25,
            paddingLeft: 60,
            fontSize: 16,
          }}
        />
      </View>
    </View>
  );
};

export default InputCustomAuthen;
