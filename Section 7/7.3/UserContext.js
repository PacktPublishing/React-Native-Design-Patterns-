import React, { Component, createContext } from 'react';

export const UserContext = createContext();

export class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return (
      <UserContext.Provider value={{
        ...this.state,
        logout: () => this.setState({ isLoggedIn: false })
      }}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
