import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import * as eva from "@eva-design/eva";
import { ApplicationProvider } from "@ui-kitten/components";
import { StyleSheet } from "react-native";
import SeminarScreen from "./review-app-screens/Main-screens/Seminars/Seminars.d";
import ProfileScreen from "./review-app-screens/Main-screens/Profile/Profile.d";
import DashboardScreen from "./review-app-screens/Main-screens/Dashboard/DashboardScreen.d";
import JobsScreenStack from "./review-app-screens/Main-screens/Jobs/JobsScreenStacks";

const Tab = createBottomTabNavigator();

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Jobs"
              options={{
                headerShown: false,
              }}
              component={JobsScreenStack}
            />
            <Tab.Screen name="Seminar" component={SeminarScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
          </Tab.Navigator>
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
