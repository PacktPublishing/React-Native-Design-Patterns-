import React, { useState } from "react";
import { FancyInput } from "./FancyInput";
import { ValidationMessage } from "./ValidationMessage";

export default (UserInput = props => {
  const [user, setUser] = useState("");
  const { isLoggedIn } = props;
  return (
    <FancyInput
      item={"user"}
      value={isLoggedIn ? "storedUserName" : user}
      setItem={setUser}
      renderValidation={
        user.indexOf("@") > -1
          ? () => <ValidationMessage rule="user cannot contain @" />
          : null
      }
    />
  );
});
