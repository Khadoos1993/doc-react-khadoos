import React, { useState, useEffect } from "react";
import Navigation from "./Navigation";
import ComponentPage from "./ComponentPage";
import componentData from "../../config/componentData";

function Docs() {
  const [route, setRoute] = useState(window.location.hash.substr(1));

  useEffect(() => {
    window.addEventListener("hashchange", () => {
      setRoute(window.location.hash.substr(1));
    });
  }, []);
  const comp =
    route !== ""
      ? componentData.filter((component) => component.name === route)[0]
      : componentData[0];
  return (
    <div className="navigation">
      <Navigation
        components={componentData.map((component) => component.name)}
      />
      <ComponentPage component={comp} />
    </div>
  );
}

export default Docs;
