import React, { Fragment } from "react";
import { Text, TextInput } from "react-native";
import styles from "./Styles/AppStyle";

export const FancyInput = props => {
  return (
    <Fragment>
      <Text style={styles.label}>{props.item}</Text>
      <TextInput
        style={styles.input}
        onChangeText={value => props.setItem([props.item], value)}
        value={props.value}
      />
      { (props.renderValidation) ? props.renderValidation() : null} 
    </Fragment>
  );
};
