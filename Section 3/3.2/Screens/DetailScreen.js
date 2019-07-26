import React, { Component } from "react";
import { View, Text } from 'react-native';
import { FancyButton } from "../Components/FancyButton";
import styles from "../Components/Styles/AppStyle";

export default class DetailScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Details</Text>
        <FancyButton 
          text={'go back'}   
          {...this.props}/> 
      </View>
    );
  }
}
