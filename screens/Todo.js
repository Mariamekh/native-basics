import { StyleSheet, Text, View } from "react-native";

export default function Todo() {
  return (
    <View>
      <Text style={styles.text}>Todo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "blue",
    fontSize: 22,
  },
});
