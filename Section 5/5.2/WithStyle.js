import React from "react";
import { View } from "react-native";
import styles from "./Styles/AppStyle";

const WithStyle = (props) => (
  <View
    style={
      (props.style) ? props.style:
      props.text === "Log in"
      ? [styles.fancyButton, styles.loginButton]
      : styles.fancyButton            
    }
    >
    { props.render(props.text) }
  </View>
)

export default WithStyle;