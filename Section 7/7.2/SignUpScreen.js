import React, { Component } from "react";
import { View } from "react-native";
import styles from "../Components/Styles/AppStyle";

import { EntryProvider } from '../Contexts/EntryContext';

import { FancyButton } from "../Components/FancyButton";
import { CustomView } from "../Components/CustomView";

import CommonForm from "../Components/CommonForm";


export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <CommonForm>
          <CommonForm.UserInput />
          <CommonForm.PasswordInput />
          <CommonForm.EmailInput />
        </CommonForm>

        <FancyButton text={"Sign Up"} route={"SignUp"} {...this.props} />

        <EntryProvider>
          <CustomView />     
        </EntryProvider> 

        <FancyButton
          style={[styles.fancyButton, { backgroundColor: "pink" }]}
          text={"Sign in"}
          route={"Home"}
          {...this.props}
        />
      </View>
    );
  }
}
