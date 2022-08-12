import React from "react";
import { Button, Text } from "@ui-kitten/components";
import { View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobsDetailsScreen from "./inner-screens/JobDetails";
import { useNavigation } from "@react-navigation/native";
import JobsScreen from "./Jobs";
import BottomNavBar from "../../../navigation-some/BottomNavBar";

const HomeStack = createNativeStackNavigator();

const JobsScreenStack = ({ navigation, route }) => {
  return <BottomNavBar {...{ navigation, route }} />;
};

export default JobsScreenStack;
