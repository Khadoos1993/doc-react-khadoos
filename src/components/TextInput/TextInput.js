import React from "react";
import PropTypes from "prop-types";
import Label from "../Label";

function TextInput({
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
  // let wrapperClass = "form-group";
  // if (error && error.length > 0) {
  //   wrapperClass += "  has-error";
  // }
  return (
    <div className="textinput">
      <Label htmlFor={htmlId} label={label} required={required} />
      <div className="fields">
        <input
          id={htmlId}
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}
          className={error && "textinput__input--state-error"}
          {...props}
        />
        {children}
        {error && <div className="textinput__error">{error}</div>}
      </div>
    </div>
  );
}

TextInput.propTypes = {
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

export default TextInput;
