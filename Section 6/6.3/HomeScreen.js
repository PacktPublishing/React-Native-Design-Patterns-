import React, { Component } from 'react';
import { View } from 'react-native';
import styles from '../Components/Styles/AppStyle';
import { FancyButton } from '../Components/FancyButton';
import CommonForm from '../Components/CommonForm';

export default class HomeScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <CommonForm>
          <CommonForm.UserInput />
          <CommonForm.PasswordInput />
        </CommonForm>
        
        <FancyButton 
          text={'Log in'}   
          route={'Detail'} 
          {...this.props}/> 

      </View>
    );
  }
}
