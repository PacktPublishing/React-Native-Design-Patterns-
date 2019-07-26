import React from "react";
import { View, Text } from "react-native";

export const ValidationMessage = props => (
  <View style={{ height: 30, width: undefined }}>
    { props.rule ? 
     <Text style={{ color: "red" }}>{props.rule}</Text> :
     <Text>No Rule</Text>
    }
  </View>
);
