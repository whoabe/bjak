import React, { Component } from "react";
import hooqtv from "../apis/hooqtv";
import MovieDetailsInfo from "../components/MovieDetailsInfo";

class MovieDetailsPage extends Component {
  state = { movieData: {}, isData: false };

  async componentDidMount() {
    const response2 = await hooqtv.get(`/titles/${this.props.match.params.id}`);
    this.setState({
      movieData: response2,
      isData: true
    });
  }

  render() {
    const isData = this.state.isData;
    const movieData = this.state.movieData;
    return (
      <div>{isData ? <MovieDetailsInfo movieData={movieData} /> : null}</div>
    );
  }
}

export default MovieDetailsPage;
