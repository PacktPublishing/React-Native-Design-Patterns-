import React from "react";
import styles from "./Styles/AppStyle";

const WithStyle = WrappedComponent => {
  const HOC = ({ ...props }) => {
    return (
        <WrappedComponent {...props} 
          setStyle = {
            (props.style) ? props.style:
            props.text === "Log in"
            ? [styles.fancyButton, styles.loginButton]
            : styles.fancyButton            
          }
          />
    );
  };
  return HOC;
};

export default WithStyle;