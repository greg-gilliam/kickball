import React, { useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { getPlayerById, updatePlayerById } from '../../services/players';

function EditPlayer() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [team, setTeam] = useState('');
  const [position, setPosition] = useState('');
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    async function getPlayerData() {
      const { name, position } = await getPlayerById(id);
      setName(name);
      setPosition(position);
      setLoading(false);
    }
    getPlayerData();
  }, [id]);

  const onSubmit = async (event) => {
    event.preventDefault();
    const resp = await updatePlayerById(id, { name, city, state, team });
    history.push(`/players/${resp[0].id}`);
  };

  if (loading) return <h1>Loading Player...</h1>;

  return (
    <>
      <fieldset>
        <legend>Edit a player</legend>
        <PlayerForm
          name={name}
          city={city}
          state={state}
          team={team}
          position={position}
          submitHandler={onSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
          setTeam={setTeam}
          setPosition={setPosition}
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
