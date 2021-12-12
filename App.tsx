import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";
//@ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";
import awsconfig from "C:/Users/seaha/Desktop/CryptoDash/src/aws-exports.js";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Amplify, { Auth } from "aws-amplify";

function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  Amplify.configure(awsconfig);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
export default withAuthenticator(App);
