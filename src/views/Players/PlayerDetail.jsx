import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayerById } from '../../services/players';
import { getTeamById } from '../../services/teams';

function PlayerDetail(props) {
  const { id } = props.match.params;
  const [player, setPlayer] = useState(null);
  const [team, setTeam] = useState(null);

  useEffect(() => {
    async function getPlayer() {
      const playerData = await getPlayerById(id);
      setPlayer(playerData);
    }
    getPlayer();
  }, [id]);

  useEffect(() => {
    async function getTeam() {
      const teamData = await getTeamById(id);
      setTeam(teamData);
    }
    getTeam();
  }, [id]);

  if (!player) return <h1>Loading Player...</h1>;

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
        From {player.city}, {player.sate} {player.name} is a {player.position} on the {team.name}{' '}
      </p>
      <ul>
        {player.map((player) => {
          return (
            <li key={player.id}>
              {player.position} - {player.name} - {player.team}{' '}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PlayerDetail;
