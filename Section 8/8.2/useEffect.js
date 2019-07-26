import React, { useEffect } from "react";
import { View, Text, Alert } from "react-navite";

const UseEffectComponent = () => {
  useEffect(() => {
    Alert.alert("use effect title", "component has mounted", [{ text: "OK" }]);

    return () =>
      Alert.alert("use effect title", "component has unmounted", [
        { text: "OK" }
      ]);
  });

  return (
    <View>
      <Text>useEffect is neat</Text>
    </View>
  );
};
