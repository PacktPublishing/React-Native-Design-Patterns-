import React, { Component, Fragment } from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "../Components/Styles/AppStyle";

import { EntryProvider } from '../Contexts/EntryContext';
import { UserProvider, UserContext } from "../Contexts/UserContext";

import { FancyButton } from "../Components/FancyButton";
import { CustomView } from "../Components/CustomView";
import CommonForm from "../Components/CommonForm";
import { CustomText } from "../Components/CustomText";

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        {/* do this and then demo come back and do logout button*/}
        <UserProvider>
          <CommonForm>
            <UserContext.Consumer>
              {({ isLoggedIn }) => (
                <Fragment>
                  <CommonForm.UserInput isLoggedIn={isLoggedIn} />
                  <CommonForm.PasswordInput isLoggedIn={isLoggedIn} />
                  <CommonForm.EmailInput isLoggedIn={isLoggedIn} />
                </Fragment>
              )}
            </UserContext.Consumer>
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

          <UserContext.Consumer>
            {({ logout }) => (
             <View>
              <TouchableOpacity 
                style={{ backgroundColor: 'black', width: 500, height: 50 }} 
                onPress={logout}>
                <CustomText entryText='Logout' />
              </TouchableOpacity>
             </View> 
            )}
          </UserContext.Consumer>
        </UserProvider>
      </View>
    );
  }
}
