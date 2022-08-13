import { Text, Button } from "@ui-kitten/components"
import { View } from "react-native"


const SeminarScreen = ({ navigation, routes }) => {
  navigation.setOptions({ title: "Seminars" })



  return (
    <View><Text>
      Seminar screen Welcome 1
    </Text>
      <Button onPress={() => {
        navigation.navigate("Seminar1")
        navigation.setOptions({ title: "Seminar 1 details" })

      }}>Seminar 1 details</Button>
    </View>
  )
}

export default SeminarScreen