import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Countries from "./views/Countries";
import Country from "./views/Country";

function App() {
  const [useDarkTheme, setUseDarkTheme] = useState(false);

  const switchTheme = () => setUseDarkTheme(!useDarkTheme);

  return (
    <Router>
      <div className={useDarkTheme ? "dark" : "light"}>
        <Navbar switchTheme={switchTheme} isDarkTheme={useDarkTheme}></Navbar>
        <div className="main">
          <Switch>
            <Route exact path="/">
              <Countries />
            </Route>
            <Route path="/countries/:code">
              <Country />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
