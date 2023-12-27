import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";

const ButtonCustom = ({ bg = "#045143", children, buttonStyle, ...props }) => {
  return (
    <Pressable
      {...props}
      style={[
        {
          width: "100%",
          height: 50,
          backgroundColor: bg,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 10,
        },
        buttonStyle,
      ]}
    >
      <Text
        style={{
          fontWeight: "700",
          fontSize: 28,
          textTransform: "uppercase",
          color: "#fff",
        }}
      >
        {children}
      </Text>
    </Pressable>
  );
};

export default ButtonCustom;
