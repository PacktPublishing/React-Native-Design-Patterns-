import React from "react";
import { Text, Platform } from "react-native";

export const CustomText = ({ entryText }) => (
  <Text
    style={{
      color: "white",
      fontWeight: "bold",
      fontSize: 16,
      fontFamily: Platform.OS === "android" ? "monospace" : "Menlo"
    }}
  >
    {entryText}
  </Text>
);
