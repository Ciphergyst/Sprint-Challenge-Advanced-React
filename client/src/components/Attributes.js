import React from "react";

export default function Attributes(props) {
  const { player } = props;
  return (
    <div className="attributes-container">
      <p>Name: {player.name}</p>
      <p>Country: {player.country}</p>
      <p>Searches: {player.searches}</p>
    </div>
  );
}