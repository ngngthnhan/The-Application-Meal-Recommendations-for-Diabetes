import { View, Text, Switch, ScrollView } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import {
  backXML,
  notiXML,
  personSettingXML,
  rightXML,
  settingXML,
} from "../icons";
import { FlatList } from "react-native";

const accountSettings = [
  {
    key: "changePassword",
    title: "Change Password",
    onPress: () => {},
  },
  {
    key: "privacy",
    title: "Privacy",
    onPress: () => {},
  },
];
const otherSettings = [
  {
    key: "Language",
    title: "Language",
    onPress: () => {},
  },
  {
    key: "Region",
    title: "Region",
    onPress: () => {},
  },
];
const SettingScreen = ({ navigation }) => {
  const [isUpdates, setIsUpdates] = useState(true);
  const [isNotification, setIsNotification] = useState(true);
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 0 }}>
      <View
        style={{
          padding: 20,
          paddingBottom: 30,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable onPress={() => navigation.goBack()}>
          <SvgXml xml={backXML} />
        </Pressable>
        <Text
          style={{
            color: "#045143",
            fontSize: 30,
            fontWeight: "700",
            marginLeft: 15,
          }}
        >
          Settings
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <View style={{ paddingBottom: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <SvgXml xml={personSettingXML} />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Account
            </Text>
          </View>
          <View
            style={{
              padding: 12,
              borderRadius: 15,
              backgroundColor: "#E0F5DF",
            }}
          >
            {accountSettings.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  borderRadius: 15,
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: index === 0 ? 15 : 0,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  {item.title}
                </Text>

                <SvgXml xml={rightXML} />
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ paddingBottom: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <SvgXml xml={notiXML} />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Notification
            </Text>
          </View>
          <View
            style={{
              padding: 12,
              borderRadius: 15,
              backgroundColor: "#E0F5DF",
            }}
          >
            <Pressable
              style={{
                paddingHorizontal: 15,
                paddingVertical: 12,
                borderRadius: 15,
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 15,
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}>
                Notification
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#E6E7E6" }}
                thumbColor={isNotification ? "#045143" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setIsNotification}
                value={isNotification}
              />
            </Pressable>
            <Pressable
              style={{
                paddingHorizontal: 15,
                paddingVertical: 12,
                borderRadius: 15,
                backgroundColor: "#fff",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}>
                Updates
              </Text>
              <Switch
                trackColor={{ false: "#767577", true: "#E6E7E6" }}
                thumbColor={isUpdates ? "#045143" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={setIsUpdates}
                value={isUpdates}
              />
            </Pressable>
          </View>
        </View>
        <View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 20,
            }}
          >
            <SvgXml xml={settingXML} />
            <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
              Other
            </Text>
          </View>
          <View
            style={{
              padding: 12,
              borderRadius: 15,
              backgroundColor: "#E0F5DF",
            }}
          >
            {otherSettings.map((item, index) => (
              <Pressable
                key={index}
                style={{
                  paddingHorizontal: 15,
                  paddingVertical: 12,
                  borderRadius: 15,
                  backgroundColor: "#fff",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: index === 0 ? 15 : 0,
                }}
              >
                <Text
                  style={{ fontSize: 20, fontWeight: "500", marginLeft: 20 }}
                >
                  {item.title}
                </Text>

                <SvgXml xml={rightXML} />
              </Pressable>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SettingScreen;
