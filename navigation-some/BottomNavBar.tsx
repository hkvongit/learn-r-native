import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import JobsScreenStack from "../review-app-screens/Main-screens/Jobs/JobsScreenStacks";
import SeminarScreen from "../review-app-screens/Main-screens/Seminars/Seminars.d";
import DashboardScreen from "../review-app-screens/Main-screens/Dashboard/DashboardScreen.d";
import ProfileScreen from "../review-app-screens/Main-screens/Profile/Profile.d";
import JobsScreen from "../review-app-screens/Main-screens/Jobs/Jobs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const commonNavigationOptions = {
  // README: We need to avoid headers for initial screen of the bottom bar components. Add headers in the StackNavigation itself
  headerShown: false,
};

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In our case, it's "Feed" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Feed";

  switch (routeName) {
    case "Jobs":
      return "All Jobs";
    case "Profile":
      return "Your profile";
    case "Seminars":
      return "All Seminars";
    case "Dashboard":
      return "Your dashboard";
  }
}

const BottomNavBar = ({ navigation, route }) => {
  // Setting up dynamic Header title: https://reactnavigation.org/docs/screen-options-resolution/
  React.useLayoutEffect(() => {
    navigation.setOptions({ headerTitle: getHeaderTitle(route) });
  }, [navigation, route]);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Jobs"
        options={{
          ...commonNavigationOptions,
          title: "Jobs",
        }}
        component={JobsScreen}
      />
      <Tab.Screen
        name="Seminars"
        component={SeminarScreen}
        options={{
          ...commonNavigationOptions,
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          ...commonNavigationOptions,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          ...commonNavigationOptions,
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavBar;
