import React from "react";

function Button(props) {
  const openLink = () => {
    window.open(props.buttonLink, "_blank");
  };

  return (
    <button onClick={openLink} id={props.buttonID}>
      {props.buttonText}
    </button>
  );
}

export { Button };
