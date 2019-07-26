import React, { Component, Fragment, cloneElement } from "react";

import EmailInput from "./EmailInput";
import PasswordInput from "./PasswordInput";
import UserInput from "./UserInput";

export default class CommonForm extends Component {

	state = {
    isLoggedIn: this.props.isLoggedIn
  }
	static defaultProps = {
    isLoggedIn: false,
    children: {}

  }
  static EmailInput = EmailInput;
  static PasswordInput = PasswordInput;
  static UserInput = UserInput;

  componentDidMount() {
    const { isLoggedIn } = this.state;
    const children = React.Children.map(this.props.children, child => cloneElement(child, { isLoggedIn }));    
    this.setState({ children })
  }

  render() {
    return <Fragment>{this.state.children}</Fragment>;
  }
}

