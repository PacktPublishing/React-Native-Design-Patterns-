import React from "react";
import { Text } from "react-native";
import styles from "./Styles/AppStyle";

import withNavigationPath from "./WithNav";
import WithStyle from "./WithStyle";

const button = props => (
  <WithStyle
    {...props}
    render={text => <Text style={styles.label}>{text}</Text>}
  />
);

export const FancyButton = withNavigationPath(button);
