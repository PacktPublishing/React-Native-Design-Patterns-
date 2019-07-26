import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles/AppStyle";

import withNavigationPath from "./WithNav";
import withStyle from "./WithStyle";

const button = props => (
    <View style={props.setStyle}>
      <Text style={styles.label}>{props.text}</Text>
    </View>
  );

export const FancyButton = withNavigationPath(withStyle(button));
