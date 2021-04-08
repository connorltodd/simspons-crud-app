import React from "react";

function Character(props) {
  return (
    <div>
      <p>{props.username}</p>
      <img src={props.image} />
      <p>{props.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}

export default Character;
