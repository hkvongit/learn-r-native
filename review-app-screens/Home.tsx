// import { Button } from "@ui-kitten/components";
import * as React from "react";
import { Button, StyleSheet } from "react-native";
import { Text, View } from "../components/Themed";
import { useLinkTo, useNavigation } from "@react-navigation/native";

import { RootStackScreenProps } from "../types";

export default function Home() {
  const lintTo = useLinkTo();
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome home</Text>
      <Button
        onPress={() => {
          navigation.navigate("Profile");
        }}
        title="Go to Item page"
      ></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
