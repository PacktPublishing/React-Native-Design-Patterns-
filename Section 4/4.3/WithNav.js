import React from "react";
import { TouchableOpacity } from "react-native";

const withNavigationPath = WrappedComponent => ({ ...props }) => 
     (
      <TouchableOpacity
        onPress={
          (props.route) ? 
          () => props.navigation.navigate(props.route) : 
          () => props.navigation.goBack()
        }
        >
        <WrappedComponent {...props} />
      </TouchableOpacity>
    );
  


export default withNavigationPath;
