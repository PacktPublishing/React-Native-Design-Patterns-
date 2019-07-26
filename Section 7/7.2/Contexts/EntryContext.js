import React, { Component, createContext } from 'react';

export const EntryContext = createContext();

export class EntryProvider extends Component {
  constructor(props) {
    super(props);
    this.toggleMessage = () => {
        this.setState(state => ({
            entryText:
                (state.entryText === 'if you have an account please sign in')
                    ? 'Thank you for visiting!'
                    : 'if you have an account please sign in'
        }));
    };
    this.state = {
        toggleMessage: this.toggleMessage,
        entryText: 'if you have an account please sign in'
    };
  }

  render() {
    return (
      <EntryContext.Provider value={this.state}>
        {this.props.children}
      </EntryContext.Provider>
    );
  }
}
