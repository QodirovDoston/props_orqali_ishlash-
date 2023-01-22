import React from "react";
import "./button.css";

 const Button = (props) => {
  const {click, children, classType, ...rest} = props;
  console.log(props);
  const className = {
    blue: 'blue',
    yellow: 'yellow',
    red: 'red'
  }
  return (
    <div>
      <button
        onClick={click || console.log("error")}className={className[classType]}
        {...rest}>{children}</button>
    </div>
  );
};
export default Button;
