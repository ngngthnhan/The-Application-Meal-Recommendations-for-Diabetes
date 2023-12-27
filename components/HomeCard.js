import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const HomeCard = ({ uri, title }) => {
  return (
    <View
      style={{
        borderRadius: 15,
        overflow: "hidden",
        elevation: 10,
        width: "100%",
        height: 170,
      }}
    >
      <ImageBackground
        source={uri}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <View
          style={{
            width: "100%",
            height: 40,
            backgroundColor: "#E0F5DF",
            borderRadius: 15,
            paddingHorizontal: 20,
            justifyContent: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "600", color: "#045143" }}>
            {title}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeCard;
