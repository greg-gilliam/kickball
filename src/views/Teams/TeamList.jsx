const { Link } = require('react-router-dom');
const { useEffect, useState } = require('react');
const { getTeams, deleteTeamById } = require('../../services/teams');

function TeamList() {
  const [teams, setTeams] = useState([]);

  const loadTeams = async () => {
    const resp = await getTeams();
    setTeams(resp);
  };

  useEffect(() => {
    loadTeams();
  }, []);

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete ${name}?`);

    if (shouldDelete) {
      await deleteTeamById(id);
      await loadTeams();
    }
  };

  return (
    <>
      <h1>Teams:</h1>
      <Link to="/teams/new" className="App-link">
        Add a team!
      </Link>
      <ul>
        {teams.map((team) => {
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="App-link">
                {team.name}
              </Link>
              <button type="button" onClick={() => handleDelete({ id: team.id, name: team.name })}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
