import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import './App.css';

import AddItem from "./components/add-item";
import ItemsList from "./components/items-list";
import Login from "./components/login";


// Areas is currently a duplicate of items page
function App() {

  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null)
  }

  return (
    <div className="App">
      <nav className="navbar">

        <a className="branding" href="/">FRIGO</a>

        <div className="nav-items">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Items
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              Areas
            </Link>
          </li>
          <li className="nav-item">
            <Link to={"/add"} className="nav-link">
              Add Item
            </Link>
          </li>
        </div>

      </nav>

      <div className="container mt-3">
        <Switch>
          <Route exact path="/" component={ItemsList} />
          <Route path="/areas" component={ItemsList} />
          <Route path="/add" component={AddItem} />
        </Switch>
      </div>

    </div>
  );
}

export default App;
