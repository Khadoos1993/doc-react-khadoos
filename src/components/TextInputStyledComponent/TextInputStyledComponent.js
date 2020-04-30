import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";
import styled from "styled-components";

function TextInputStyledComponent({
  htmlId,
  required = false,
  type = "text",
  value,
  name,
  placeholder,
  label,
  onChange,
  error,
  children,
  ...props
}) {
  const Error = styled.div`
    color: red;
  `;
  const Input = styled.input`
    border: ${error && "solid 1px red"};
  `;
  const Fieldset = styled.div`
    margin-bottom: 16px;
  `;
  return (
    <Fieldset>
      <Label htmlFor={htmlId} label={label} required={required} />
      <Input
        id={htmlId}
        type={type}
        placeholder={placeholder}
        value={value}
        name={name}
        onChange={onChange}
        {...props}
      />
      {children}
      {error && <Error>{error}</Error>}
    </Fieldset>
  );
}

TextInputStyledComponent.propTypes = {
  /** Unique Html ID. used for typing label to HTML input. Handy hook for automated testing */
  htmlId: PropTypes.string.isRequired,

  /** Mark label with astrik if true*/
  required: PropTypes.bool,

  /** Type of the input */
  type: PropTypes.oneOf(["text", "number", "password"]),

  /** Input value */
  value: PropTypes.string,

  /** Input name */
  name: PropTypes.string.isRequired,

  /** Input label */
  label: PropTypes.string.isRequired,

  /** Function call onchange */
  onChange: PropTypes.func.isRequired,

  /** Placeholder to display when empty */
  placeholder: PropTypes.string,

  /** string to display when error occurs */
  error: PropTypes.string,
};

export default TextInputStyledComponent;
