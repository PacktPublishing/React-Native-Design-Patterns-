import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './Styles/AppStyle';

export const FancyButton = props => {
  return (
  <TouchableOpacity 
    onPress={
      (props.route) ?
      () => props.navigation.navigate(props.route) : 
      () => props.navigation.goBack()
    }
    style={(props.text === 'Log in') ? 
      [styles.fancyButton, styles.loginButton] : 
      styles.fancyButton}>
    <Text style={styles.label}>{props.text}</Text>
  </TouchableOpacity>
  );
};
