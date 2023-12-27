import { View, Text } from "react-native";
import React, { useState } from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML, cameraXML, editXml } from "../icons";
import { Image } from "react-native";
import ButtonCustom from "../components/inputs/ButtonCustom";
import { TextInput } from "react-native";

const ProfileScreen = ({ navigation }) => {
  const [isEdit, setIsEdit] = useState(false);
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
          {isEdit ? "Edit Profile" : "Profile"}
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <View>
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1701206886289-05bc76ff6071?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            }}
            style={{
              width: 120,
              height: 120,
              borderRadius: 60,
              resizeMode: "cover",
            }}
          />
          <View style={{ position: "absolute", bottom: 0, right: 0 }}>
            <SvgXml xml={cameraXML} />
          </View>
        </View>
        <Text
          style={{
            color: "#045143",
            fontSize: 30,
            fontWeight: "700",
            paddingTop: 10,
          }}
        >
          ChinChin
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 20,
          marginVertical: 50,
          padding: 15,
          borderRadius: 15,
          backgroundColor: "rgba(30, 239, 25, 0.10)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", flex: 1 }}>
            Username
          </Text>
          <TextInput
            style={{
              flex: 2,
              marginRight: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              textAlign: "center",
              color: "#000",
              fontSize: 15,
            }}
            defaultValue="Trinh"
            editable={isEdit}
          />
          <SvgXml xml={editXml} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", flex: 1 }}>
            Email
          </Text>
          <TextInput
            style={{
              flex: 2,
              marginRight: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              textAlign: "center",
              color: "#000",
              fontSize: 15,
            }}
            defaultValue="vtqt2003@gmail.com"
            editable={isEdit}
          />
          <SvgXml xml={editXml} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", flex: 1 }}>
            Gender
          </Text>
          <TextInput
            style={{
              flex: 2,
              marginRight: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              textAlign: "center",
              color: "#000",
              fontSize: 15,
            }}
            defaultValue="Female"
            editable={isEdit}
          />
          <SvgXml xml={editXml} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", flex: 1 }}>Age</Text>
          <TextInput
            style={{
              flex: 2,
              marginRight: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              textAlign: "center",
              color: "#000",
              fontSize: 15,
            }}
            defaultValue="20"
            editable={isEdit}
          />
          <SvgXml xml={editXml} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", flex: 1 }}>
            Height
          </Text>
          <TextInput
            style={{
              flex: 2,
              marginRight: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              textAlign: "center",
              color: "#000",
              fontSize: 15,
            }}
            defaultValue="158 cm"
            editable={isEdit}
          />
          <SvgXml xml={editXml} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 15,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "500", flex: 1 }}>
            Weight
          </Text>
          <TextInput
            style={{
              flex: 2,
              marginRight: 10,
              paddingTop: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#000",
              textAlign: "center",
              color: "#000",
              fontSize: 15,
            }}
            defaultValue="48 kg"
            editable={isEdit}
          />
          <SvgXml xml={editXml} />
        </View>
      </View>
      <View style={{ padding: 20 }}>
        <ButtonCustom onPress={() => setIsEdit(!isEdit)}>
          {isEdit ? "SAVE" : "EDIT PROFILE"}
        </ButtonCustom>
      </View>
    </View>
  );
};

export default ProfileScreen;
