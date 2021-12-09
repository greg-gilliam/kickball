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
        <li>
          <Link to="/teams/1" className="App-link">
            Team 1
          </Link>
        </li>
        <li>
          <Link to="/teams/2" className="App-link">
            Team 2
          </Link>
        </li>
        <li>
          <Link to="/teams/3" className="App-link">
            Team 3
          </Link>
        </li>
      </ul>
    </>
  );
}

export default TeamList;
