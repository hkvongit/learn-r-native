import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../review-app-screens/Home";
import Item from "../review-app-screens/Item";
import Settings from "../review-app-screens/Settings";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Profile" component={Item} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
