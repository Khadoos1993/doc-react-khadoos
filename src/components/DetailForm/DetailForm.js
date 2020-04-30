import React from "react";
import PropTypes from "prop-types";
import TextInput from "../TextInput";

/** Personal form with built-in validation */
function DetailForm({ onSave, errors, person, onChange }) {
  return (
    <form onSubmit={onSave}>
      {/* {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )} */}
      <TextInput
        htmlId="personal-form-name"
        name="name"
        label="Name"
        value={person.name}
        onChange={onChange}
        error={errors.name}
        required
      />

      <TextInput
        htmlId="personal-form-age"
        type="number"
        name="age"
        label="Age"
        value={person.age}
        onChange={onChange}
        error={errors.age}
        required
      />

      <button type="submit" className="btn btn-primary">
        Save
      </button>
    </form>
  );
}

DetailForm.propTypes = {
  /** person details to show or make it controlled input */
  person: PropTypes.object.isRequired,

  /** Save function to add form details */
  onSave: PropTypes.func.isRequired,

  /**Function call onchange */
  onChange: PropTypes.func.isRequired,

  /**array to display when error occurs */
  errors: PropTypes.object,
};

export default DetailForm;
