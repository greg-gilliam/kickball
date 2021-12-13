import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from './views/Home/Home';
import AddTeam from './views/Teams/AddTeam';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';

function App() {
  //ORDER MATTERS FOR THE ROUTES
  return (
    <div className="App">
      <Router>
        <header>
          Kickball!{' '}
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>{' '}
          <NavLink to="/teams" className="App-link" exact>
            Teams
          </NavLink>{' '}
          <NavLink to="/players" className="App-link" exact></NavLink>{' '}
        </header>
        <Switch>
          <Route path="/teams" component={TeamList} />
          <Route path="/teams/new" component={AddTeam} />
          <Route
            path="/teams/:id"
            render={(routerProps) => <TeamDetail label="My label" {...routerProps} />}
          />
          <Route path="/players" component={PlayerList} />
          <Route path="/players/new" component={AddPlayer} />
          <Route
            path="/players/:id"
            render={(routerProps) => <PlayerDetail label="Player label" {...routerProps} />}
          />
          <Route path="/" component={Home} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
