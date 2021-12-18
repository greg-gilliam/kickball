import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPlayers, deletePlayerById } from '../../services/players';

function PlayerList() {
  const [loading, setLoading] = useState([]);
  const [player, setPlayer] = useState([]);
  const [team, setTeam] = useState({});

  const loadPlayers = async () => {
    const resp = await getPlayers();
    setLoading(true);
    setTeam(resp);
    setPlayer(resp);
    setLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = window.confirm`Are you sure you want to delete ${name} from ${team}?`();

    if (shouldDelete) {
      setLoading(true);
      await deletePlayerById(id);
      await loadPlayers();
    }
  };

  if (loading) return <h1>Loading Players...</h1>;

  return (
    <>
      <h1>Players:</h1>
      <Link to="/players/new" className="App-link">
        Add a Player
      </Link>
      <ul>
        {player.map((player) => (
          <li key={player.id}>
            {player.name}
            <button>
              <Link to={`/players/edit/${player.id}`}>Edit</Link>
            </button>
            <button
              type="button"
              onClick={() => handleDelete({ id: player.id, name: player.name })}
            >
              {' '}
              Delete{' '}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default PlayerList;
