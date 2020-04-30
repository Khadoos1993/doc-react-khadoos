import React from "react";
import PropTypes from "prop-types";

/** Label with required field display,1 htmlFor */
function Label({ htmlFor, label, required }) {
  return (
    <label htmlFor={htmlFor}>
      {label} {required && <span style={{ color: "red" }}>*</span>}
    </label>
  );
}

Label.propTypes = {
  /** Html Id for associated input */
  htmlFor: PropTypes.string.isRequired,

  /**Label text */
  label: PropTypes.string.isRequired,

  /**Display asterik after label if true */
  required: PropTypes.bool,
};

export default Label;
