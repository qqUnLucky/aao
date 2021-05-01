import React, { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput, Select} from 'react-native';
import Constants from 'expo-constants';
import calc from './Calc';

export default function App() {
  const [radius, setRadius] = useState("");
  const [text, setText] = useState("Через радиус");
  const [result, setResult] = useState();
  const [switchText, setSwitchText] = useState(false);
  const [text1, setText1] = useState("Введите радиуc:");
  const [r, setR] = useState("");
  function SwitchText(){
      setSwitchText(!switchText);
  }

  function ChangeText(){
    if(!switchText){
      setText("Через диаметр");
      setText1("Введите диаметр:");
      setR("D=");
      setSwitchText(true)
      SwitchText();
    }else{
      setText("Через радиус");
      setText1("Введите радиус:");
      setR("R=");
      SwitchText();
    }
  }

  function SendNum() {
    if(radius == "" || !Number(radius)){
      alert("Введите радиус:");
    }
    else{
      setResult(calc(radius, switchText));
    } 
  }
  
  return (
    <View style={styles.container}>
        <View>
            <Text>Площадь круга: {result}</Text>
            <Button title="Выполнить" onPress={SendNum}/>
        <Text>Способ:</Text>
          <Button title={text} onPress={ChangeText}/>
            <Text>{text1}</Text>
            <View style={styles.inpitContainer}>
              <Text>{r}</Text>
              <TextInput style={styles.textInput} onChangeText={setRadius}/>
            </View>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 1,
  },
  inpitContainer: {
    flexDirection: "row",
    padding: 100,
  },
  textInput: {
    borderWidth: 1,
    width: "50%",
  },
});
