import React from "react";

function Loader() {
  return <div className="Loader">Loading...</div>;
}

function Content() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 5000);

  return (
    <>
      <div className="content">
        React is a Javascript Library. It is built by Facebook in 2011.
      </div>
      isLoading ? <Loader /> : <Content />
    </>
  );
}

export { Loader, Content };
