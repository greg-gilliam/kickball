import React from 'react';

export default function TeamForm({ name, city, state, handleSubmit, setName, setCity, setState }) {
  return (
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

        <input type="submit" value="Add" aria-label="Add a team" />
      </form>
    </div>
  );
}
