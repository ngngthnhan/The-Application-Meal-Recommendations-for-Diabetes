import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import AppNavigation from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
