import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { createPlayer } from '../../services/players';

export default function AddPlayer() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [team, setTeam] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await createPlayer({ name, city, state, team });
    history.push(`/players/${resp[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Add a player</legend>
        <PlayerForm
          name={name}
          city={city}
          state={state}
          team={team}
          handleSubmit={handleSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
          setTeam={setTeam}
        />
      </fieldset>
    </>
  );
}
