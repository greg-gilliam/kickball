import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerForm from '../../components/Players/PlayerForm';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams';

export default function AddPlayer() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [teams, setTeams] = useState([]);
  const [teamId, setTeamId] = useState(null);
  const [position, setPosition] = useState('');
  const history = useHistory();

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await createPlayer({ name, city, state, teams, teamId });
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
          position={position}
          teams={teams}
          teamId={teamId}
          handleSubmit={handleSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
          setPosition={setPosition}
          setTeams={setTeams}
          setTeamId={setTeamId}
        />
      </fieldset>
    </>
  );
}
