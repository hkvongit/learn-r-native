import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobsDetailsScreen from "../review-app-screens/Main-screens/Jobs/inner-screens/JobDetails";
import JobsScreen from "../review-app-screens/Main-screens/Jobs/Jobs";
import JobsScreenStack from "../review-app-screens/Main-screens/Jobs/JobsScreenStacks";
import SeminarOne from "../review-app-screens/Main-screens/Seminars/inner-screens/SeminarOne";

const AllStacks = createNativeStackNavigator();

const commonNavigationOptions = {
  headerShown: false,
};

const StackNavigation = () => {
  return (
    <AllStacks.Navigator>
      <AllStacks.Screen
        name="JobsStack"
        component={JobsScreenStack}
        options={{ title: "All Jobs" }}
      />
      <AllStacks.Screen name="Details" component={JobsDetailsScreen} />
      <AllStacks.Screen name="Seminar1" component={SeminarOne} />
    </AllStacks.Navigator>
  );
};

export default StackNavigation;
