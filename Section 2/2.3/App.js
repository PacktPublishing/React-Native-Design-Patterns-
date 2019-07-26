import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('screen');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    backgroundColor: '#F5FCFF'
  },
  label: {
    fontSize: 20,
    alignItems: 'center',
    textAlign: 'center',
    margin: 10
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    width,
    height: 45
  },
  fancyButton: {
    marginTop: 10,
    backgroundColor: 'lightblue',
    borderBottomRightRadius: 4,
    width,
    borderWidth: 1,
    borderColor: 'gray'
  },
  loginButton: {
    backgroundColor: 'gray',
    borderColor: 'lightblue',
    borderBottomLeftRadius: 4
  }
});
