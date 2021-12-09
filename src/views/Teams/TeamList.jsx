const { Link } = require("react-router-dom");
const { useEffect, useState } = require("react");
const { getTeams } = require("../../services/teams");

function TeamList() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    getTeams().then((resp) => setTeams(resp));
  }, []);

  return (
    <>
      <h1>Teams:</h1>
      <Link to="/teams/new" className="App-link">
        Add a team!
      </Link>
      <ul>
        {teams.map((team) => {
          console.log("XXX", team);
          return (
            <li key={team.id}>
              <Link to={`/teams/${team.id}`} className="App-link">
                {team.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default TeamList;
