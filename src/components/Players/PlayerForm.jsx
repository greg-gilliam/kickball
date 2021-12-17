import React from 'react';

export default function PlayerForm({
  name,
  city,
  state,
  teams,
  position,
  handleSubmit,
  setName,
  setCity,
  setState,
  setTeam,
  setPosition,
}) {
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
          <label htmlFor="city">City:</label>
          <input
            id="city"
            name="city"
            type="text"
            value={city}
            onChange={({ target }) => setCity(target.value)}
          />
          <label htmlFor="state">State:</label>
          <input
            id="state"
            name="state"
            type="text"
            value={state}
            onChange={({ target }) => setState(target.value)}
          />
          <label htmlFor="position">Position:</label>
          <input
            id="position"
            name="position"
            type="text"
            value={position}
            onChange={({ target }) => setPosition(target.value)}
          />{' '}
          {teams ? (
            <select>
              <label htmlFor="team">Team:</label>
              <select
                id="team-select"
                name="team"
                value={teams}
                onChange={({ target }) => setTeam(target.value)}
              />
              <option key={0} value={0}>
                Please choose a team
              </option>
              {teams.map((team) => (
                <option key={team.id} value={team.id}>
                  {team.name}
                </option>
              ))}
            </select>
          ) : (
            ''
          )}
          <input type="submit" value="Add" aria-label="Add a player" />
        </form>
      </div>
    </div>
  );
}
