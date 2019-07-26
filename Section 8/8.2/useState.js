import React, { useState } from 'react';
import { View, TouchableOpacity, Text } from 'react-navite';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  render() {
    return (
      <View>
      <Text>You pressed {count} times</Text>
      <TouchableOpacity onPress={() => this.setState({ count: this.state.count + 1 })}>
        <Text>press here</Text>
      </TouchableOpacity>
    </View>
    );
  }
}
 
const UseStateComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <View>
      <Text>You pressed {count} times</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
        <Text>press here</Text>
      </TouchableOpacity>
    </View>
  );
}

