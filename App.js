import { StatusBar } from 'expo-status-bar';
import { React, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [age, setAge] = useState(0);
  const [limits, setLimits] = useState("");

  const calculate = () => {
    // Ei aivan toimi, mutta eipä tätä kysyttykään :D
    if (isNaN(age) || age <= 0) {
      setLimits("");
    }
    else {
      const hrMin = (220 - parseInt(age, 10)) * 0.65;
      const hrMax = (220 - parseInt(age, 10)) * 0.85;
      setLimits(hrMin.toFixed(0) + " - " + hrMax.toFixed(0));
    }
  }

  return (
    <View style={styles.container}>

      <Text style={styles.basicText}>Age</Text>
      <TextInput style={styles.inputText} placeholder='Enter your age' value={age} onChangeText={age => setAge(age)} keyboardType='numeric' />

      <Text style={styles.basicText}>Limits</Text>
      <Text style={styles.inputText}>{limits}</Text>

      <Button title="calculate" onPress={calculate} />

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicText: {
    fontSize: 20,
    marginBottom: 10
  },
  inputText: {
    fontSize: 15,
    marginBottom: 10
  }
});
