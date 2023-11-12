import React from "react";

function Loader() {
  return <div className="Loader">Loading...</div>;
}

function Content() {
  return (
    <div className="content">
      React is a Javascript Library. It is built by Facebook in 2011.
    </div>
  );
}

export { Loader, Content };