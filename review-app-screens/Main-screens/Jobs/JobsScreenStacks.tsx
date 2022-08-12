import React from "react";
import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobsDetailsScreen from "./inner-screens/JobDetails";
import { useNavigation } from "@react-navigation/native";
import JobsScreen from "./Jobs";

const HomeStack = createNativeStackNavigator();

const JobsScreenStack = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={JobsScreen} />
      <HomeStack.Screen name="Details" component={JobsDetailsScreen} />
    </HomeStack.Navigator>
  );
};

export default JobsScreenStack;
