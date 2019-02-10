import React from "react";

function Alert(props) {
  console.log(props);

  return (
    <div className={`alert alert-${props.type || "success"}`} role="alert">
      <img src="https://media.giphy.com/media/xfAgILDksDJJu/giphy.gif" />
    </div>
  );
}

export default Alert;
