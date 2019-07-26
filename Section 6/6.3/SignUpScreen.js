import React, { Component } from "react";
import { View } from "react-native";
import styles from "../Components/Styles/AppStyle";
import { FancyButton } from "../Components/FancyButton";
import CommonForm from '../Components/CommonForm';

export default class SignUpScreen extends Component {
 
  render() {
    return (
      <View style={styles.container}>
        {/* can toggle here to see action  */}
        <CommonForm isLoggedIn={true}>  
          <CommonForm.UserInput />
          <CommonForm.PasswordInput />
          <CommonForm.EmailInput />
        </CommonForm>
        
        <FancyButton 
          text={"Sign Up"}  
          route={'SignUp'} 
          {...this.props} />
          
        <FancyButton 
          style={[styles.fancyButton, {backgroundColor: 'pink'}]}
          text={"Sign in"}  
          route={'Home'} 
          {...this.props} />
      </View>
    );
  }
}
