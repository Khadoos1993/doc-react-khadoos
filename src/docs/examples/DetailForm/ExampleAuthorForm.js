import React, { useState } from "react";
import DetailForm from "khadoos-react/DetailForm";

/** Custom Message */
function ExampleAuthorForm() {
  const [author, setAuthor] = useState({
    name: "",
    age: "0",
  });

  function onChange(event) {
    const { name, value } = event.target;
    setAuthor({
      ...author,
      [name]: name === "age" ? parseInt(value, 10) : value,
    });
  }

  const [errors, setErrors] = useState({});

  function isFormValid() {
    const { age, name } = author;
    const errors = {};
    if (!age) errors.age = "Age is required.";
    if (!name) errors.name = "Name is required.";
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  const onSave = (event) => {
    event.preventDefault();
    if (!isFormValid()) return;
    console.log(author);
  };

  return (
    <DetailForm
      onChange={onChange}
      onSave={onSave}
      errors={errors}
      person={author}
    />
  );
}

export default ExampleAuthorForm;
