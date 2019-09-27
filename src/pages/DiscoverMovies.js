import React, { Component } from "react";
import RowList from "../components/RowList";
import hooqtv from "../apis/hooqtv";
import "../App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      page: 1,
      isLoading: false
    };

    // On Scroll function
    window.onscroll = () => {
      const {
        loadMovies,
        state: { error, isLoading }
      } = this;

      // Checks if there is an error or if alrady loading
      if (error || isLoading) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        // console.log("at the bottom");
        this.setState({ page: this.state.page + 1 });
        loadMovies();
      }
    };
  }

  // load data after mount
  async componentDidMount() {
    this.loadMovies();
  }

  // load data function from hooqtv
  loadMovies = () => {
    this.setState({ isLoading: true });
    Promise.all([
      hooqtv.get(`/feed?region=ID&page=${this.state.page}&perPage=20`)
    ])
      .then(response => {
        const nextRows = response[0].data.data.filter(
          m => m.type === "Multi-Title-Manual-Curation"
        );
        this.setState({
          rows: [...this.state.rows, ...nextRows],
          isLoading: false
        });
      })
      .catch(error => {
        this.setState({ isLoading: false });
        console.log("Error" + error);
      });
  };

  render() {
    return (
      <div>
        <RowList rows={this.state.rows} />
      </div>
    );
  }
}
