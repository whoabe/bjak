import React from "react";
import { Route, Switch } from "react-router-dom";

import DiscoverMovies from "../pages/DiscoverMovies";
import MovieDetailsPage from "../pages/MovieDetailsPage";
// import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <Switch />
        {/* <Link to="/page=:pg">DiscoverMovies</Link>
        <Link to="/users/1">My Profile</Link> */}

        <Route exact path="/" component={DiscoverMovies} />
        <Route
          path="/titles/:id"
          component={props => {
            return <MovieDetailsPage {...props} />;
          }}
        />
      </>
    );
  }
}

export default App;
