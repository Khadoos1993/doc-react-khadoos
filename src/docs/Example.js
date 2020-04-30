/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import PropTypes from "prop-types";

function Example(props) {
  const [showCode, setShowCode] = useState(false);
  const { code, description, name } = props.example;
  const ExampleComponent = require(`./examples/${props.componentName}/${name}`)
    .default;

  function toggleCode(event) {
    event.preventDefault();
    setShowCode(!showCode);
  }

  return (
    <div className="example">
      {description && <h4>{description}</h4>}
      <ExampleComponent />
      <p>
        <a href="#" onClick={toggleCode}>
          {showCode ? "Hide" : "Show"} Code
        </a>
      </p>
      {showCode && code}
    </div>
  );
}

Example.propTypes = {
  example: PropTypes.object.isRequired,
  componentName: PropTypes.string.isRequired,
};

export default Example;
