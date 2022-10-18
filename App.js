import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { useState } from "react";
import {Button} from "@react-native-material/core"
const patients = ["patient1", "patient2", "patient3"]
export default function App() {
  const [buttonIsPressed, setButtonPressed] = React.useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      <Button/>
      <Text>lel</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
