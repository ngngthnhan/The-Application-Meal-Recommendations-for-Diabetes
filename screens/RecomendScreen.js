import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML, menuXML } from "../icons";
import HeaderCard from "../components/HeaderCard";
import RecomendFoodCard from "../components/RecomendFoodCard";
import { FlatList } from "react-native";

const recomendFoods = [
  {
    title: "Bun Bo Hue",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Sup Cua",
    image:
      "https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=1547&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Banh Canh Cua",
    image:
      "https://plus.unsplash.com/premium_photo-1673809798703-6082a015f931?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGZvb2R8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Pho Bo",
    image:
      "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
export default function RecomendScreen({ navigation }) {
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
        <Pressable onPress={() => navigation.navigate('Account')}>
          <SvgXml xml={menuXML} />
        </Pressable>
      </View>
      <HeaderCard title={"Recommended foods"}>
        <Text style={{ color: "#045143", fontSize: 18 }}>
        Add foods
        </Text>
      </HeaderCard>
      <FlatList
        data={recomendFoods}
        keyExtractor={(item) => item.title}
        renderItem={({ item }) => (
          <RecomendFoodCard title={item.title} image={item.image} />
        )}
        style={{ paddingHorizontal: 20, paddingVertical: 50 }}
        ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
      />
    </View>
  );
}
