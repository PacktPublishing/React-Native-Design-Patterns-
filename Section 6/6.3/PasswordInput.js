import React, { Component } from "react";
import { FancyInput } from "./FancyInput";
import { ValidationMessage } from "./ValidationMessage";

export default class PasswordInput extends Component {
  constructor() {
    super();
    this.state = {
      password: ''
    };
  }
  setItem(key, value) {
    this.setState({ [key]: value });
  }
  
  render() {
    const { isLoggedIn } = this.props
    return (
      <FancyInput
        item={"password"}
        value={(isLoggedIn)?'storedPassword':this.state.password} 
        setItem={this.setItem.bind(this)}
        renderValidation={
          (this.state.password.length < 8 && !isLoggedIn)
            ? () => (
                <ValidationMessage rule="Password must be at least 8 characters long" />
              )
            : null
        }
      />
    );
  }
}
