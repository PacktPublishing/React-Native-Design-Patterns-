import React from "react";
import { View, TouchableOpacity } from "react-native";

import { CustomText } from './CustomText';
import { EntryContext } from "../Contexts/EntryContext";

// prop drilling example
// export const CustomView = props => (
//   <View style={{ height: 50, width: 500, backgroundColor: "black" }}>
//     <CustomText entryText={props.entryText}/>
//   </View>
// );

export const CustomView = () => (
  <View style={{ height: 50, width: 500, backgroundColor: "black" }}>
    <EntryContext.Consumer>
      {({ entryText, toggleMessage }) => (
        <TouchableOpacity onPress={toggleMessage}>
          <CustomText entryText={entryText}/>
        </TouchableOpacity>
      )}
    </EntryContext.Consumer>
  </View>
);

