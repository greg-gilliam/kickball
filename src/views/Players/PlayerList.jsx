import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPlayers, deletePlayerById, updatePlayerById } from '../../services/players';

function PlayerList() {
  const [loading, setLoading] = useState(true);
  const [players, setPlayers] = useState([]);

  const loadPlayers = async () => {
    setLoading(true);
    const resp = await getPlayers();
    setPlayers(resp);
    setLoading(false);
  };

  useEffect(() => {
    loadPlayers();
  }, []);

  const handleDelete = async ({ id, name }) => {
    const shouldDelete = window.confirm(`Are you sure you want to delete ${name}?`);

    if (shouldDelete) {
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
        {players.map((player) => {
          return (
            <li key={player.id}>
              <Link to={`/players/${player.id}`} className="App-link">
                {player.name}
              </Link>
              <button
                type="button"
                onClick={() => handleDelete({ id: player.id, name: player.name })}
              >
                {' '}
                Delete{' '}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default PlayerList;
