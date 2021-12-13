import { React, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { updatePlayerById } from '../../services/players';

function EditPlayer({ match }) {
  const { playerId } = match.params;
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [team, setTeam] = useState('');
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const resp = await updatePlayerById(playerId, { name, city, state, team });
    history.push(`/players/${resp[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Edit a team</legend>
        <PlayerForm
          name={name}
          city={city}
          state={state}
          team={team}
          submitHandler={onSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
          setTeam={setTeam}
        />
      </fieldset>
      <Link to="/" className="App-link">
        Home
      </Link>
      <Link to="/teams" className="App-link">
        Teams
      </Link>
      <Link to="/players" className="App-link">
        Players
      </Link>
    </>
  );
}

export default EditPlayer;
