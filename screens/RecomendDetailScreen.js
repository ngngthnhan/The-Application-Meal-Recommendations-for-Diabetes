import { View, Text } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { SvgXml } from "react-native-svg";
import { backXML, menuXML } from "../icons";
import HeaderCard from "../components/HeaderCard";
import { Image } from "react-native";
import ButtonCustom from "../components/inputs/ButtonCustom";
import { Alert } from "react-native";

const RecomendDetailScreen = ({ navigation }) => {
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
      <Image
        source={{
          uri: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={{
          width: "auto",
          height: 200,
          borderRadius: 45,
          marginHorizontal: 20,
          marginBottom: 20,
        }}
      />
      <HeaderCard
        title={"Banh Canh Cua"}
        containerStyle={{ marginBottom: 60 }}
      ></HeaderCard>
      <View
        style={{
          marginHorizontal: 20,
        }}
      >
        <View
          style={{
            backgroundColor: "#045143",
            borderTopRightRadius: 15,
            borderTopLeftRadius: 15,
            paddingVertical: 5,
          }}
        >
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              fontWeight: "600",
              textAlign: "center",
            }}
          >
            NUTRITION INFOR
          </Text>
        </View>
        <View
          style={{
            padding: 30,
            borderWidth: 1,
            borderColor: "#045143",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Calories
            </Text>
            <Text
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
            >
              200
            </Text>
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              Kcal
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Carbs
            </Text>
            <Text
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
            >
              50
            </Text>
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              g
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Fats
            </Text>
            <Text
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
            >
              50
            </Text>
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              g
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text
              style={{
                fontSize: 15,
                width: 70,
                transform: [{ translateY: 6 }],
              }}
            >
              Protein
            </Text>
            <Text
              style={{
                fontSize: 15,
                borderBottomWidth: 1,
                borderBottomColor: "#0E800C",
                flex: 1,
                textAlign: "center",
              }}
            >
              50
            </Text>
            <Text
              style={{
                fontSize: 15,
                width: 35,
                transform: [{ translateY: 6 }],
                marginLeft: 7,
              }}
            >
              g
            </Text>
          </View>
        </View>
      </View>
      <ButtonCustom
      onPress={()=> {
        Alert.alert('Add to Diary', 'Add recomend food to diary', [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ]);
      }}
        buttonStyle={{ width: "60%", alignSelf: "center", marginTop: 50 }}
      >
       ADD TO DIARY
      </ButtonCustom>
    </View>
  );
};

export default RecomendDetailScreen;
