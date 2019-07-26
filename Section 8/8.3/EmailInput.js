import React, { useState } from "react";
import { FancyInput } from "./FancyInput";
import { ValidationMessage } from "./ValidationMessage";

export default (EmailInput = props => {
  const [email, setEmail] = useState("");

  const { isLoggedIn } = props;
  return (
    <FancyInput
      item={"email"}
      value={isLoggedIn ? "storedEmail" : email}
      setItem={setEmail}
      renderValidation={
        email.indexOf("@") === -1
          ? () => <ValidationMessage rule="email must contain @" />
          : null
      }
    />
  );
});
