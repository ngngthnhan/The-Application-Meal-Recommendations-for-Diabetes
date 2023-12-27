import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { Image } from "react-native";
import InputCustomAuthen from "../components/inputs/InputCustomAuthen";
import { emailXML, keyXML } from "../icons";
import ButtonCustom from "../components/inputs/ButtonCustom";

const LogInScreen = ({ navigation }) => {
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
        <View style={{ alignItems: "center", marginBottom: 60 }}>
          <Image
            source={require("../assets/images/logo_authen.png")}
            style={{ marginTop: 50 }}
          />
          <Text style={{ color: "#045143", fontSize: 34, fontWeight: "700" }}>
            Welcome Back
          </Text>
          <Text style={{ fontSize: 16 }}>Sign to continue</Text>
        </View>
        <View style={{ paddingHorizontal: 30, flex: 1 }}>
          <View style={{ marginBottom: 15 }}>
            <InputCustomAuthen label={"Email"} icon={emailXML} />
          </View>
          <View style={{ marginBottom: 15 }}>
            <InputCustomAuthen
              label={"Password"}
              icon={keyXML}
              secureTextEntry
            />
          </View>
          <Text style={{ fontSize: 13, textAlign: "right", marginBottom: 50 }}>
            Forgot Password?
          </Text>
          <ButtonCustom onPress={() => navigation.navigate("Home")}>
            Login
          </ButtonCustom>
          <View style={{ flex: 1 }} />
          <View
            style={{
              alignItems: "center",
              paddingBottom: 35,
            }}
          >
            <Text style={{ fontSize: 15, textAlign: "center" }}>
              Dont't have account?
            </Text>
            <Text
              style={{
                color: "#045143",
                fontSize: 17,
                fontWeight: "600",
                textAlign: "center",
              }}
              onPress={() => navigation.navigate("SignIn")}
            >
              Create a new account
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LogInScreen;
