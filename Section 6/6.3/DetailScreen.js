import React, { Component } from "react";
import { View, Text } from "react-native";
import { FancyButton } from "../Components/FancyButton";
import { FancyInput } from "../Components/FancyInput";
import CommonForm from "../Components/CommonForm";

import styles from "../Components/Styles/AppStyle";

export default class DetailScreen extends Component {

  setItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to the Details</Text>
        <Text>please enter contact info</Text>
        <CommonForm isLoggedIn={true}>
          <CommonForm.EmailInput />
          <FancyInput item={"phone"}  setItem={this.setItem.bind(this)}/>
          <FancyInput item={"street"} setItem={this.setItem.bind(this)}/>
          <FancyInput item={"city"}   setItem={this.setItem.bind(this)}/>
          <FancyInput item={"state"}  setItem={this.setItem.bind(this)}/>
          <FancyInput item={"zip"}    setItem={this.setItem.bind(this)}/>
        </CommonForm>
        <FancyButton text={"go back"} {...this.props} />
      </View>
    );
  }
}
