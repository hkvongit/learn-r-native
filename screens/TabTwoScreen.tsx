import * as React from "react";
import { Button, StyleSheet } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";

export default function TabTwoScreen() {
  const [count, setCount] = React.useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab 2</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      {/* <EditScreenInfo path="/screens/TabTwoScreen.tsx" /> */}
      <Text style={{marginBottom: 20}}>Count ->  {count}</Text>
      <Button onPress={()=>setCount((prevState)=>{ return prevState+ 1})} title="Click to Increment" color={"black"} />
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
    color: "red",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
