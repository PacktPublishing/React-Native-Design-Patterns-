import React, { Component } from 'react';
import { FancyInput } from './FancyInput';
import { ValidationMessage } from './ValidationMessage';

export default class EmailInput extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }
  setItem(key, value) {
    this.setState({ [key]: value });
  }

  render() {
    const { isLoggedIn } = this.props
    return (
       <FancyInput  
        item={'email'}     
        value={(isLoggedIn)?'storedEmail':this.state.email} 
        setItem={this.setItem.bind(this)} 
        renderValidation={
          this.state.email.indexOf('@') === -1 
            ? () => (
                <ValidationMessage rule='email must contain @' />
              )
            : null
        }        
        />
    );
  }
}
