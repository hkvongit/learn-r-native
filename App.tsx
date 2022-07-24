import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Todo from "./screens/Todo";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout, Text } from "@ui-kitten/components";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <ApplicationProvider {...eva} theme={eva.light}>
          <Todo />
        </ApplicationProvider>
        {/* <StatusBar /> */}
      </SafeAreaProvider>
    );
  }
}
