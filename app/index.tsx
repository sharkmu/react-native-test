import { Button } from "@react-navigation/elements";
import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {

  const [inputValue, setInputValue] = useState("");

  const handleInput = () => {
    alert(inputValue)
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, position: "absolute", top: 40, fontWeight: "bold" }}>Counter</Text>
      <View style={styles.row}>
        <TextInput 
          style={styles.numInput} 
          placeholder="Number to add" 
          keyboardType="numeric"
          value={inputValue}
          onChangeText={setInputValue}
        />
        <Button onPress={handleInput}>Add!</Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    gap: 20
  },
  numInput: {
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#000",
    width: 110
  }
})