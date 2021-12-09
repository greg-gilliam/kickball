import React from "react";

export default function AddTeam() {
  return (
    <>
      <fieldset>
        <legend>Add a team</legend>
        <form>
          <label htmlFor="name">Name:</label>
          <input id="name" name="name" type="text" />

          <label htmlFor="city">City:</label>
          <input id="city" name="city" type="text" />

          <label htmlFor="state">State:</label>
          <input id="state" name="state" type="text" />

          <input type="submit" value="Add a team" />
        </form>
      </fieldset>
    </>
  );
}
