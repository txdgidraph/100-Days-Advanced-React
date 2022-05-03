import React from "react";

const GreetText = (props) => {
  console.log(props);
  return (
    <div>
      <h1>
        Hello {props.name} {props.heroName}
      </h1>
      {props.children}
    </div>
  );
};
export default GreetText;
