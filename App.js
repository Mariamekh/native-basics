import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Todo from "./screens/Todo";
import Films from "./screens/Films";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarAllowFontScaling: true,
          tabBarLabelStyle: {
            fontSize: 22,
          },
        }}>
        <Tab.Screen name='Todo' component={Todo} />
        <Tab.Screen name='Films' component={Films} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  text: {
    color: "blue",
    fontSize: 35,
    textAlign: "center",
  },
});
