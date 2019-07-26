import React, { Component } from 'react';

class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  
  componentDidMount () {
    this.setState({ loading: false });
  }

  render() {
    return (
      <View>
       { (this.state.loading) ? 
         <Text> loading </Text> :
         <Text> text in class component </Text>
       }
      </View>
    );
  }
}

export default ClassComponent;










const BaseComponent;


