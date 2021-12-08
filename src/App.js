import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import TeamDetail from "./views/Teams/TeamDetail";
import TeamList from "./views/Teams/TeamList";

function App() {
  return (
    <div className="App">
      <Router>
        <header>
          Kickball!{" "}
          <NavLink to="/" className="App-link" exact>
            Home
          </NavLink>{" "}
          <NavLink to="/teams" className="App-link" exact>
            Teams
          </NavLink>{" "}
        </header>
        <Switch>
          <Route path="/teams/:teamId" component={TeamDetail} />
          <Route path="/teams" component={TeamList} />
          <Route path="/" component={Home} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
