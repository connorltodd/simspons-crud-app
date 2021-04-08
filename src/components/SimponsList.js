import React from "react";
import Character from "./Character";
import simpsonsData from "./simsponsData";

function SimsponsList() {
  const [simsponsList, setSimsponsList] = React.useState(simpsonsData);

  const [newCharacterUsername, setNewCharacterUsername] = React.useState("");
  const [newCharacterImage, setNewCharacterImage] = React.useState("");
  const [
    newCharacterOnlineStatus,
    setNewCharacterOnlineStatus,
  ] = React.useState("");

  function createNewCharacter(event) {
    event.preventDefault();
    setSimsponsList([
      ...simsponsList,
      {
        username: newCharacterUsername,
        image: newCharacterImage,
        isOnline: false,
      },
    ]);
    setNewCharacterUsername("");
    setNewCharacterImage("");
  }

  // create a form that will track a new character
  // It will contain the following inputs: username, image, isOnline
  // it will when submitted add a character to the simsponsList
  // the state will change thus causing a rerender displaying that new character
  return (
    <div>
      <h1>Simspons List</h1>
      <form onSubmit={createNewCharacter}>
        <input
          value={newCharacterUsername}
          type="text"
          placeholder="username"
          onChange={(event) => setNewCharacterUsername(event.target.value)}
        />
        <input
          value={newCharacterImage}
          type="text"
          placeholder="image"
          onChange={(event) => setNewCharacterImage(event.target.value)}
        />
        {/* <input
          type="text"
          placeholder="online status"
          onChange={(event) => setNewCharacterOnlineStatus(event.target.value)}
        /> */}
        <button type="submit">Add Character</button>
      </form>
      {simsponsList.map((object) => (
        <Character
          username={object.username}
          image={object.image}
          isOnline={object.isOnline}
        />
      ))}
    </div>
  );
}

export default SimsponsList;
