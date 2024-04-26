import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Your next goal" style={styles.textInput} />
        <Button title="Add Goal" />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 5,
    marginTop: 35,
    marginLeft: 10,
    marginRight: 30,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "80%",
    marginRight: 8,
    padding: 8,
  },
});
