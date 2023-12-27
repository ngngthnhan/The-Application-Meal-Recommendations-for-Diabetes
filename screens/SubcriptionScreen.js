import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML } from "../icons";
import ButtonCustom from "../components/inputs/ButtonCustom";

const subcriptions = [
  {
    title: "3 months",
    pricePerYear: 23.99,
    pricePerMonth: 7.99,
    sale: undefined,
  },
  { title: "12 months", pricePerYear: 47.99, pricePerMonth: 3.99, sale: 50 },
];
const SubcriptionScreen = ({ navigation }) => {
  const [subcriptionActive, setSubcriptionActive] = useState(
    subcriptions[0].title
  );
  return (
    <View style={{ flex: 1, backgroundColor: "#f5f5f5", paddingTop: 0 }}>
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
          Subscription
        </Text>
      </View>
      <View style={{ paddingHorizontal: 20, paddingTop: 50 }}>
        <View
          style={{
            alignItems: "center",
            paddingHorizontal: 20,
            paddingVertical: 20,
            borderRadius: 20,
            backgroundColor: "#fff",
            elevation: 6,
          }}
        >
          <Text style={{ fontSize: 25, fontWeight: "700" }}>
            Unlock Everythings
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "rgba(0, 0, 0, 0.50)",
              textAlign: "center",
              width: "80%",
            }}
          >
            Start registering for an account package to unlock all features of
            the TESU app!
          </Text>
        </View>
        <View
          style={{
            backgroundColor: "#E6E7E6",
            marginTop: 30,
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 35,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {subcriptions.map((sub) => {
            const isActive = sub.title === subcriptionActive;
            return (
              <Pressable
                onPress={() => setSubcriptionActive(sub.title)}
                style={{ width: "46%" }}
              >
                {sub.sale ? (
                  <View
                    style={{
                      width: 60,
                      height: 22,
                      borderRadius: 15,
                      backgroundColor: "#000",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "absolute",
                      top: -7,
                      left: "50%",
                      transform: [{ translateX: -30 }],
                    }}
                  >
                    <Text
                      style={{ fontSize: 10, color: "#fff", fontWeight: "700" }}
                    >
                      Save {sub.sale}%
                    </Text>
                  </View>
                ) : null}
                <View
                  style={{
                    borderTopRightRadius: 15,
                    borderTopLeftRadius: 15,
                    backgroundColor: isActive
                      ? "#045143"
                      : "rgba(30, 239, 25, 0.10)",
                    width: "100%",
                    aspectRatio: 1.5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      color: isActive ? "#fff" : "#000",
                    }}
                  >
                    {sub.title}
                  </Text>
                </View>
                <View
                  style={{
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                    backgroundColor: "#fff",
                    width: "100%",
                    aspectRatio: 1.5,
                    elevation: 5,
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "700",
                      marginBottom: 10,
                    }}
                  >
                    ${sub.pricePerYear}
                  </Text>
                  <Text style={{ fontSize: 15 }}>${sub.pricePerMonth}/mon</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
        <Text style={{ fontSize: 15, textAlign: "center", marginTop: 50 }}>
          Your 30-days free trial will expire before December 15 and nothing
          will be charged
        </Text>
        <ButtonCustom buttonStyle={{marginTop: 40}}>ORDER NOW</ButtonCustom>
      </View>
    </View>
  );
};

export default SubcriptionScreen;
