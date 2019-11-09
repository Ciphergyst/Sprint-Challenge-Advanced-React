import React from "react";

export default function Attributes(props) {
  const { teams } = props;
  return (
    <div className="attributes-container">
      <p>country: {teams.country}</p>
      <p>Fifa Code: {teams.fifa_code}</p>
      <p>Group Letter: {teams.group_letter}</p>
    </div>
  );
}