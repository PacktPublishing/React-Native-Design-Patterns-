import React, { useState } from "react";
import { FancyInput } from "./FancyInput";
import { ValidationMessage } from "./ValidationMessage";

export default (PasswordInput = props => {
  const [password, setPassword] = useState("");
  const { isLoggedIn } = props;
  return (
    <FancyInput
      item={"password"}
      value={isLoggedIn ? "storedPassword" : password}
      setItem={setPassword}
      renderValidation={
        password.length < 8 && !isLoggedIn
          ? () => (
              <ValidationMessage rule="Password must be at least 8 characters long" />
            )
          : null
      }
    />
  );
});
