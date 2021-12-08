import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./views/Home/Home";
import TeamDetail from "./views/Teams/TeamDetail";
import TeamList from "./views/Teams/TeamList";

function App() {
  return (
    <div className="App">
      <Router>
        <header>Header</header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/teams" component={TeamList} />
          <Route path="/teams/:id" component={TeamDetail} />
        </Switch>
        <footer>Footer</footer>
      </Router>
    </div>
  );
}

export default App;
