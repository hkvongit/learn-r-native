import { createNativeStackNavigator } from "@react-navigation/native-stack";
import JobsDetailsScreen from "../review-app-screens/Main-screens/Jobs/inner-screens/JobDetails";
import JobsScreen from "../review-app-screens/Main-screens/Jobs/Jobs";
import JobsScreenStack from "../review-app-screens/Main-screens/Jobs/JobsScreenStacks";

const AllStacks = createNativeStackNavigator();

const commonNavigationOptions = {
  headerShown: false,
};

const StackNavigation = () => {
  return (
    <AllStacks.Navigator>
      <AllStacks.Screen name="Jobs" component={JobsScreenStack} />
      <AllStacks.Screen name="Details" component={JobsDetailsScreen} />
    </AllStacks.Navigator>
  );
};

export default StackNavigation;
