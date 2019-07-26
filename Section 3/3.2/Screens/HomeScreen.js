import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../Components/Styles/AppStyle';
import { FancyButton } from "../Components/FancyButton";
import { FancyInput } from "../Components/FancyInput";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
      password: ''
    };
  }
  setItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    return (
    <View style={styles.container}>

      <FancyInput  
        item={'user'}     
        value={this.state.user} 
        setItem={this.setItem.bind(this)} />
        
      <FancyInput  
        item={'password'} 
        value={this.state.password} 
        setItem={this.setItem.bind(this)} />

      <FancyButton 
        text={'Log in'}   
        route={'Detail'} 
        {...this.props}/> 

    </View>
    );
  }
}
