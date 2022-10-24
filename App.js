import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View} from 'react-native';
import React, { useState } from "react";
// import {Button} from "./components/ButtonComponent"
import {Button} from "@react-native-material/core";

// TODO: get this information from endpoint
const patients = ["patient1", "patient2", "patient3"];

function mapPatients() {
  return (
    patients.map((patient, index)=> {
        return (
          <View key={index} style={{borderWidth: 5}}>
            <Button variant="text" title={patient}/>
          </View>
        )
    })
  )
}

export default function App() {
  const [buttonIsPressed, setButtonPressed] = React.useState(false)
  const [isEnabled, setIsEnabled] = useState(false);
  return (
    <View style={styles.container}>
      {mapPatients()}
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
