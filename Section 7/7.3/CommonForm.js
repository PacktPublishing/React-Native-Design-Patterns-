import React, { Component, Fragment, cloneElement } from "react";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import UserInput from "./UserInput";

export default class CommonForm extends Component {

  static EmailInput = EmailInput;
  static PasswordInput = PasswordInput;
  static UserInput = UserInput;

  render() {
    return <Fragment>{this.props.children}</Fragment>;
  }
}

