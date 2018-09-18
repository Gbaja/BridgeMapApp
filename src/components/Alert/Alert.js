import React from "react";

const Alert = ({ alert }) => {
  return <div>{alert.type === "error" && <p>{alert.message}</p>}</div>;
};

export default Alert;
