import { View, Text } from "react-native";
import React from "react";
import { SCREEN_WIDTH } from "../contanst";

const HeaderCard = ({ title, children, containerStyle }) => {
  return (
    <View
      style={[
        {
          padding: 10,
          backgroundColor: "#E0F5DF",
          elevation: 10,
          maxWidth: SCREEN_WIDTH - 20,
          width: "auto",
          borderTopEndRadius: 20,
          borderBottomEndRadius: 20,
        },
        containerStyle,
      ]}
    >
      <Text style={{ fontSize: 20, fontWeight: "700" }}>{title}</Text>
      {children}
    </View>
  );
};

export default HeaderCard;
