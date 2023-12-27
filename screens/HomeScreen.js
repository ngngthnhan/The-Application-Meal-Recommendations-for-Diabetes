import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { menuXML } from "../icons";
import HeaderCard from "../components/HeaderCard";
import { TextInput } from "react-native";
import HomeCard from "../components/HomeCard";

const HomeScreen = ({ navigation }) => {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fff", paddingTop: 0 }}>
      <Pressable
        style={{ alignSelf: "flex-end", padding: 20, paddingBottom: 30 }} onPress={() => navigation.navigate('Account')}
      >
        <SvgXml xml={menuXML} />
      </Pressable>
      <HeaderCard title={"Your BLOOD SUGAR level (mg/dL)"}>
        <View
          style={{ alignItems: "center", flexDirection: "row", paddingTop: 10 }}
        >
          <TextInput
            style={{
              borderWidth: 1,
              borderColor: "rgba(4, 81, 67, 0.56)",
              borderRadius: 20,
              flex: 1,
              height: 38,
              fontSize: 18,
              fontWeight: "600",
              textAlign: "center",
            }}
            keyboardType="numeric"
          />
          <Pressable
            style={{
              backgroundColor: "#045143",
              height: 38,
              borderRadius: 20,
              paddingHorizontal: 15,
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <Text style={{ fontWeight: "600", fontSize: 17, color: "#fff" }}>
              Update
            </Text>
          </Pressable>
        </View>
      </HeaderCard>
      <View style={{ paddingHorizontal: 20, paddingVertical: 50 }}>
        <Pressable
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("RecomendFoods")}
        >
          <HomeCard
            uri={{
              uri: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            title={"Recommended foods for you"}
          />
        </Pressable>
        <Pressable
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("CheckOwnFood")}
        >
          <HomeCard
            uri={{
              uri: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            title={"Check your own food"}
          />
        </Pressable>
        <Pressable
          style={{ marginBottom: 30 }}
          onPress={() => navigation.navigate("DailyTracking")}
        >
          <HomeCard
            uri={{
              uri: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            title={"Daily tracking"}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
