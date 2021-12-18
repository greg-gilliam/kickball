import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayerById } from '../../services/players';
import { getTeamById } from '../../services/teams';

function PlayerDetail(props) {
  const { id } = props.match.params;
  const [player, setPlayer] = useState({});
  const [team, setTeam] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getPlayer() {
      const playerData = await getPlayerById(id);

      await setPlayer(playerData);
      return playerData;
    }
    getPlayer();
    setLoading(false);
  }, [id]);

  useEffect(() => {
    setLoading(true);
    async function getTeam() {
      const teamData = await getTeamById(player.team_id);
      setTeam(teamData);
    }
    getTeam();
    setLoading(false);
  }, [player]);

  if (loading) return <h1>Loading Player...</h1>;

  return (
    <>
      <h4>{props.label}</h4>
      <p>
        <Link to="/players" className="App-link">
          Back to Players
        </Link>
      </p>
      <h1>{player.name}</h1>
      <p>
        From {player.teams.city}, {player.teams.state} {player.name} is a {player.position} on the{' '}
        {team.name}{' '}
      </p>
      <ul>
        <div>
          {team?.players?.map((player) => {
            return (
              <li key={player.id}>
                {player.position} - {player.name} - {player.team}{' '}
              </li>
            );
          })}
        </div>
      </ul>
    </>
  );
}

export default PlayerDetail;
