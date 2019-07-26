import React from "react";
import { View, Text } from "react-native";
import styles from "../Components/Styles/AppStyle";
import { FancyButton } from "../Components/FancyButton";
import CommonForm from "../Components/CommonForm";
import { useScreenTimer } from "../Hooks/UseScreenTimer";

export default (HomeScreen = props => {
  const screenTimer = useScreenTimer();
  let { seconds } = screenTimer;

  return (
    <View style={styles.container}>
      <Text>{ seconds }</Text>
      <CommonForm>
        <CommonForm.UserInput />
        <CommonForm.PasswordInput />
      </CommonForm>

      <FancyButton text={"Log in"} route={"Detail"} {...props} />
    </View>
  );
});
