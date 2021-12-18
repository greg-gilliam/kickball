const { Link } = require('react-router-dom');
const { useEffect, useState } = require('react');
const { getTeams, deleteTeamById, updateTeamById } = require('../../services/teams');

function TeamList() {
  const [loading, setLoading] = useState(true);
  const [teams, setTeams] = useState([]);

  const loadTeams = async () => {
    setLoading(true);
    const resp = await getTeams();
    setTeams(resp);
    setLoading(false);
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

  const handleEdit = async ({ id, name }) => {
    const shouldEdit = window.confirm(`Are you sure you want to edit ${name}?`);

    if (shouldEdit) {
      await updateTeamById(id);
      await loadTeams();
    }
  };

  if (loading) return <h1>Loading teams...</h1>;

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
              <button
                type="button"
                onClick={() =>
                  handleEdit({ id: team.id, name: team.name, city: team.city, state: team.state })
                }
              >
                Edit
              </button>
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
