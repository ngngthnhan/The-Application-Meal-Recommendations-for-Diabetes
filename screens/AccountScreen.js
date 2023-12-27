import { View, Text } from "react-native";
import React, { useRef } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import {
  accountXML,
  backXML,
  homeXML,
  rightXML,
  settingXml,
  subXML,
} from "../icons";
import { Image } from "react-native";
import { FlatList } from "react-native";
import ButtonCustom from "../components/inputs/ButtonCustom";

export default function AccountScreen({ navigation }) {
  const menu = useRef([
    {
      key: "home",
      title: "Home",
      onPress: () => navigation.navigate("Home"),
      icon: homeXML,
    },
    {
      key: "profile",
      title: "Profile",
      onPress: () => navigation.navigate("Profile"),
      icon: accountXML,
    },
    {
      key: "subcription",
      title: "Subcription",
      onPress: () => navigation.navigate("Subcription"),
      icon: subXML,
    },
    {
      key: "settings",
      title: "Settings",
      onPress: () => navigation.navigate("Setting"),
      icon: settingXml,
    },
  ]).current;
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 0 }}>
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
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            padding: 16,
            backgroundColor: "rgba(30, 239, 25, 0.10)",
            borderRadius: 15,
            zIndex: 10,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1701206886289-05bc76ff6071?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 75,
              height: 75,
              borderRadius: 36,
              resizeMode: "cover",
            }}
          />
          <View style={{ marginLeft: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: "700" }}>ChinChin</Text>
            <Text style={{ fontSize: 15 }}>vothiquyentrinh@gmail.com</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 10,
            paddingVertical: 18,
            backgroundColor: "rgba(30, 239, 25, 0.10)",
            borderRadius: 15,
            marginTop: 40,
          }}
        >
          <FlatList
            data={menu}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => item.onPress()}
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 8,
                  borderRadius: 15,
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <SvgXml xml={item.icon} />
                  <Text
                    style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                  >
                    {item.title}
                  </Text>
                </View>

                <SvgXml xml={rightXML} />
              </Pressable>
            )}
            ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          />
          <ButtonCustom
            buttonStyle={{ marginTop: 100 }}
            onPress={() => navigation.navigate("LogIn")}
          >
            LOG OUT
          </ButtonCustom>
        </View>
      </View>
    </View>
  );
}
