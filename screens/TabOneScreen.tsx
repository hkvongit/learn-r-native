import * as React from "react";
import { ScrollView, StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const myFriends = [
    { name: "Rumi", id: 1 },
    { name: "Rahul", id: 2 },
    { name: "Akshay", id: 3 },
    { name: "rintu", id: 4 },
    { name: "vishnu", id: 5 },
  ];
  return (
    <View style={styles.container}>
      {/* Simple way of showing a list */}
      <Text style={styles.title}> List with Map</Text>
      <ScrollView>
        {myFriends.map((_friend) => (
          <View key={_friend.key}>
            <Text style={styles.simpleText}>{_friend.name}</Text>
          </View>
        ))}
      </ScrollView>
      {/* <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <Text style={styles.title}> List with Flatlist</Text>
      <Text> An inbuilt lazy rendering is here. Ideal for large list</Text>
      <FlatList
        numColumns={2}
        data={myFriends}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text style={{ ...styles.simpleText, backgroundColor: "blue" }}>
            {item.name}
          </Text>
        )}
      />
      {/* Viewing a list using flat list */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  simpleText: {
    color: "red",
    padding: 20,
    backgroundColor: "yellow",
    marginVertical: 4,
    marginHorizontal: 2,
    fontSize: 32,
  },
});
