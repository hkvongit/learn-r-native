import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import StackNavigation from "./navigation-some/StackNavigation";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        {/* Navigation flow
            App.tsx -> StackNavigation (All individual screens are here) -> if first page of stack then bottomBar present, else no
            bottom bar
        */}
        <NavigationContainer>
          {/* Best way to hide bottom navbar from some inner pages: 
          https://reactnavigation.org/docs/hiding-tabbar-in-screens/ */}
          <StackNavigation />
        </NavigationContainer>
      </ApplicationProvider>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    marginLeft: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "90%",
  },
  divider: {
    width: 20,
    backgroundColor: "white",
    borderColor: "white",
  },
  topBarHeader: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
