import React, { Component, Fragment } from "react";
import { View, Text } from "react-native";
import styles from "../Components/Styles/AppStyle";
import { FancyButton } from "../Components/FancyButton";
import { FancyInput } from "../Components/FancyInput";

// fake state to be shared
const showCloneConfig = {
  display: true,
  item : 'clonedUser',
  value: 'showCloneConfigUser'
};

const DisplayClone = ({showClone, children}) => (showClone.display) ? React.Children.only(children):null;

const TheClone = ({item, value}) =>  (
   <Fragment>
      <Text> Text in clone </Text>
      { React.cloneElement(<FancyInput/>, { item, value }) }
    </Fragment>
);

export default class SignUpScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      password: "",
      email: ""
    };
  }
  setItem(key, value) {
    this.setState({ [key]: value });
  }
  
  render() {
  
    return (
      <View style={styles.container}>
        
        <DisplayClone showClone={showCloneConfig}>
          <TheClone item={showCloneConfig.item} value={showCloneConfig.value} />
        </DisplayClone>

        <FancyInput
          item={"user"}
          value={this.state.user}
          setItem={this.setItem.bind(this)}
        />

        <FancyInput
          item={"password"}
          value={this.state.password}
          setItem={this.setItem.bind(this)}
        />

        <FancyInput
          item={"email"}
          value={this.state.email}
          setItem={this.setItem.bind(this)}
        />

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
