import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { plusXML } from "../icons";
import { useNavigation } from "@react-navigation/native";

const RecomendFoodCard = ({ title, image }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate("RecomendFoodDetail")}
      style={{
        width: "100%",
        height: 100,
        borderRadius: 50,
        backgroundColor: "rgba(0,0,0,0.05)",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        source={{
          uri: image,
        }}
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          objectFit: "cover",
          borderWidth: 4,
          borderColor: "rgba(14, 128, 12, 0.50)",
        }}
      />
      <Text
        style={{ fontSize: 20, fontWeight: "500", marginLeft: 15, flex: 1 }}
      >
        {title}
      </Text>
      <Pressable style={{ paddingHorizontal: 20 }}>
        <SvgXml xml={plusXML} />
      </Pressable>
    </Pressable>
  );
};

export default RecomendFoodCard;
