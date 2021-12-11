import { React, useState } from 'react';
import { useHistory } from 'react-router-dom';
import TeamForm from '../../components/Teams/TeamForm';
import { createTeam } from '../../services/teams';

export default function AddTeam() {
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const resp = await createTeam({ name, city, state });
    history.push(`/teams/${resp[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Add a team</legend>
        <TeamForm
          name={name}
          city={city}
          state={state}
          handleSubmit={handleSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
        />
      </fieldset>
    </>
  );
}
