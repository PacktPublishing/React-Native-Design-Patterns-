import React, { useState, useEffect } from "react";
import { View, Text, Alert, TouchableOpacity } from "react-native";

import styles from "../Components/Styles/AppStyle";

export const HookScreen = props => {
  
  const [seconds, setSeconds] = useState(0);
  const [inScreen, leftScreen] = useState(false);

  useEffect(() => {
    let timer = setInterval (()=>setSeconds(seconds+1), 1000);
    return () => clearInterval(timer)
  });  

  useEffect(() => {
    return () => (seconds > 0) ? 
    (Alert.alert("Time on Screen", `you spent ${seconds} seconds on the hook screen`, [{ text: "OK" }])) : null
  },[inScreen]);  

  return (
    <View style={styles.container}>
      <Text> { seconds } </Text>
      <TouchableOpacity
        onPress={
          () => {
            leftScreen(true)
            props.navigation.goBack()
          }
        }
        >
        <Text> go back </Text>
      </TouchableOpacity>
    </View>    
  );
};
