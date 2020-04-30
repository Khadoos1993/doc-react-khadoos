import React from "react";
import TextInput from "khadoos-react/TextInput";

/** Error Input */
function ExampleOptional() {
  return (
    <TextInput
      htmlId="example-optional"
      label="FirstName"
      name="firstname"
      onChange={() => {}}
      required
      error="name is required."
    />
  );
}

export default ExampleOptional;
