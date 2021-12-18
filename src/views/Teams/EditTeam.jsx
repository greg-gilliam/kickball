import { React, useState } from 'react';
import TeamForm from '../../components/Teams/TeamForm';
import { createTeam, updateTeamById } from '../../services/teams';
import { Link, useHistory } from 'react-router-dom';

function EditTeam({ match }) {
  const { teamId } = match.params;
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const history = useHistory();

  const onSubmit = async (event) => {
    event.preventDefault();
    const resp = await updateTeamById(teamId, { name, city, state });
    history.push(`/teams/${resp[0].id}`);
  };

  return (
    <>
      <fieldset>
        <legend>Edit a team</legend>
        <TeamForm
          name={name}
          city={city}
          state={state}
          submitHandler={onSubmit}
          setName={setName}
          setCity={setCity}
          setState={setState}
        />
      </fieldset>
      <Link to="/" className="App-link">
        Home
      </Link>
      <Link to="/teams" className="App-link">
        Teams
      </Link>
    </>
  );
}

export default EditTeam;
