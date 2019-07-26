import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";

import styles from "../Components/Styles/AppStyle";
import { useScreenTimer } from "../Hooks/UseScreenTimer";

export const HookScreen = props => {
  const screenTimer = useScreenTimer();
  let { seconds } = screenTimer;
  const [inScreen, leftScreen] = useState(false);

  useEffect(() => {
    return () =>
      seconds > 0
        ? Alert.alert(
            "Time on Screen",
            `you spent ${seconds} seconds on the last screen`,
            [{ text: "OK" }]
          )
        : null;
  }, [inScreen]);
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
