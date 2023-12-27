import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import LogInScreen from "../screens/LogInScreen";
import SignInScreen from "../screens/SignInScreen";
import CompleteAccountScreen from "../screens/CompleteAccountScreen";
import RecomendScreen from "../screens/RecomendScreen";
import RecomendDetailScreen from "../screens/RecomendDetailScreen";
import CheckOwnFoodScreen from "../screens/CheckOwnFoodScreen";
import CheckOwnFoodResultScreen from "../screens/CheckOwnFoodResultScreen";
import DailyTrackingScreen from "../screens/DailyTrackingScreen";
import AccountScreen from "../screens/AccountScreen";
import ProfileScreen from "../screens/ProfileScreen";
import SubcriptionScreen from "../screens/SubcriptionScreen";
import SettingScreen from "../screens/SettingScreen";

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LogIn" component={LogInScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="CompleteAccount" component={CompleteAccountScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="RecomendFoods" component={RecomendScreen} />
      <Stack.Screen
        name="RecomendFoodDetail"
        component={RecomendDetailScreen}
      />
      <Stack.Screen name="CheckOwnFood" component={CheckOwnFoodScreen} />
      <Stack.Screen
        name="CheckOwnFoodResult"
        component={CheckOwnFoodResultScreen}
      />
      <Stack.Screen name="DailyTracking" component={DailyTrackingScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Subcription" component={SubcriptionScreen} />
      <Stack.Screen name="Setting" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
