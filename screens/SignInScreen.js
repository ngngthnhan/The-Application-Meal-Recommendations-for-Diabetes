import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Image } from "react-native";
import InputCustomAuthen from "../components/inputs/InputCustomAuthen";
import { backXML, emailXML, keyXML, personXML } from "../icons";
import ButtonCustom from "../components/inputs/ButtonCustom";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";

const SignInScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/images/bg_linear_gradient.jpg")}
        resizeMode="cover"
        style={{
          width: "100%",
          flex: 1,
        }}
      >
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ position: "absolute", top: 20, left: 20, zIndex: 10 }}
        >
          <SvgXml xml={backXML} />
        </Pressable>
        <View style={{ alignItems: "center", marginBottom: 30 }}>
          <Image
            source={require("../assets/images/logo_authen.png")}
            style={{ marginTop: 30 }}
          />
          <Text style={{ color: "#045143", fontSize: 34, fontWeight: "700" }}>
            Create Account
          </Text>
          <Text style={{ fontSize: 16 }}>Enter your account information</Text>
        </View>
        <View style={{ paddingHorizontal: 30, flex: 1 }}>
          <View style={{ marginBottom: 10 }}>
            <InputCustomAuthen label={"Username"} icon={personXML} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <InputCustomAuthen label={"Email"} icon={emailXML} />
          </View>
          <View style={{ marginBottom: 10 }}>
            <InputCustomAuthen
              label={"Password"}
              icon={keyXML}
              secureTextEntry
            />
          </View>
          <View style={{ marginBottom: 50 }}>
            <InputCustomAuthen
              label={"Confirm Password"}
              icon={keyXML}
              secureTextEntry
            />
          </View>
          <ButtonCustom onPress={() => navigation.navigate("CompleteAccount")}>
            SIGN UP
          </ButtonCustom>
          <View style={{ flex: 1 }} />
          <View
            style={{
              alignItems: "center",
              paddingBottom: 35,
            }}
          >
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              Already have an account?{" "}
              <Text
                style={{
                  color: "#045143",
                  fontSize: 17,
                  fontWeight: "600",
                  textAlign: "center",
                }}
                onPress={() => navigation.navigate("LogIn")}
              >
                Login
              </Text>
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SignInScreen;
