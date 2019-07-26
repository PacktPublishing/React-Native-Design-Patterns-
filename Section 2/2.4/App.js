import React, { Component } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './AppStyle';


const FancyButton = props => {
  return (
    <TouchableOpacity
     style={(props.text === 'Log in') ? [styles.fancyButton, styles.loginButton]: styles.fancyButton}
     onPress={() => props.setItem([props.item], props.value)}>
     <Text style={styles.label} >{props.text}</Text>
    </TouchableOpacity>
  )
}

const  FancyInput = props => {
  return (
    <React.Fragment>
      <Text style={styles.label}>{props.item}</Text>
      <TextInput
       style={styles.input}
       onChangeText={value => props.setItem([props.item], value)}
       value={props.value}
      ></TextInput>
    </React.Fragment>
  )
}

class Container extends Component {
  constructor() {
    super();
    this.state = {
      isCurrentUser: false,
      user: '',
      password: '',
      email: ''
    };
  }

  setItem(key,value) {
    this.setState({ [key]: value })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <FancyInput item={'user'} 
          value={this.state.user} 
          setItem={this.setItem.bind(this)} />
        
        <FancyInput item={'password'} 
          value={this.state.password} 
          setItem={this.setItem.bind(this)} />

        {this.state.isCurrentUser ? <FancyButton text={'Log in'} /> : (
          <React.Fragment>
            <FancyInput item={'email'} 
              value={this.state.email} 
              setItem={this.setItem.bind(this)}
               />
            <FancyButton text={'Sign Up'} />
            <FancyButton text={'Sign in'} 
              value={(this.state.isCurrentUser) ? false: true}
              setItem={this.setItem.bind(this)}
              item={'isCurrentUser'} />
          </React.Fragment>
        )}
      </View>
    );
  }
}

export default class App extends Component {
  render () {
    return <Container />
  }
}

