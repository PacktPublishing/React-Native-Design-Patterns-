import React, { Component } from 'react';
import { FancyInput } from './FancyInput';
import { ValidationMessage } from './ValidationMessage';

export default class UserInput extends Component {
  constructor() {
    super();
    this.state = {
      user: ''
    };
  }
  setItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { isLoggedIn } = this.props
    return (
       <FancyInput  
        item={'user'}     
        value={(isLoggedIn)?'storedUserName':this.state.user} 
        setItem={this.setItem.bind(this)} 
        renderValidation={
          this.state.user.indexOf('@') > - 1 
            ? () => (
                <ValidationMessage rule='user cannot contain @' />
              )
            : null
        }        
        />
    );
  }
}
