import React from "react";
import TextInputStyledComponent from "khadoos-react/TextInputStyledComponent";

/** ExampleStyledComponent */
function ExampleStyledComponent() {
  return (
    <TextInputStyledComponent
      htmlId="example-styled-component"
      label="FirstName"
      name="firstname"
      onChange={() => {}}
      required
      error="Firstname is required."
    />
  );
}

export default ExampleStyledComponent;
