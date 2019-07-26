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
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      isCurrentUser: false,
      user: '',
      password: '',
      email: ''
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>username</Text>
        <TextInput
          style={styles.input}
          onChangeText={user => this.setState({ user })}
          value={this.state.user}
        />
        <Text style={styles.label}>password</Text>
        <TextInput
          style={styles.input}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        {this.state.isCurrentUser ? (
          <TouchableOpacity style={styles.fancyButton}>
            <Text style={styles.label}>Log in</Text>
          </TouchableOpacity>
        ) : (
          <React.Fragment>
            <Text style={styles.label}>email</Text>
            <TextInput
              style={styles.input}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TouchableOpacity style={styles.fancyButton}>
              <Text style={styles.label}>Sign up</Text>
            </TouchableOpacity>
          </React.Fragment>
        )}
      </View>
    );
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
  }
});
