import { Button, Text } from "@ui-kitten/components"
import { View } from "react-native"

import JobsDetailsScreen from "./inner-screens/JobDetails";



const JobsScreen = ({ navigation }) => {


  const moveToJobDetailsScreen = () => {
    console.log("Moving to moveToJobDetailsScreen")
    navigation.navigate("Details")
    navigation.setOptions({ title: "Jobs Screen" })
  }

  return (
    <View>
      <Text>JobsScreen</Text>
      <Button onPress={moveToJobDetailsScreen} style={{ width: "50%", margin: "10%" }}>Job 1</Button>
    </View>
  )
}

export default JobsScreen