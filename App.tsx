import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Header } from "react-native/Libraries/NewAppScreen";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Parse from "parse/react-native.js";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import Parse from "parse/react-native.js";
// import AsyncStorage from "@react-native-async-storage/async-storage";
Parse.setAsyncStorage(AsyncStorage);
Parse.initialize(
  "fn0Quvuc1Jcao662UK3B0VhNBGd7NFrlAooNGpPT",
  "2YzGiJ98tpa0aUziKsbqC9EoU2vAFrWU0FTWwuc4"
);
Parse.serverURL = "https://parseapi.back4app.com/";
function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
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
export default App;
