import React, { Component } from "react";
import RowList from "../components/RowList";
import hooqtv from "../apis/hooqtv";
import "../App.css";
// import InfiniteScroll from "react-infinite-scroller";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rows: [],
      page: 1,
      isLoading: false,
      hasMore: true
    };

    window.onscroll = () => {
      const {
        loadMovies,
        state: { error, isLoading, hasMore }
      } = this;

      // Bails early if:
      // * there's an error
      // * it's already loading
      // * there's nothing left to load
      if (error || isLoading || !hasMore) return;

      // Checks that the page has scrolled to the bottom
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      ) {
        console.log("at the bottom");
        this.setState({ page: this.state.page + 1 });
        loadMovies();
        // debugger;
      }
    };
  }

  async componentDidMount() {
    // const response = await hooqtv.get("/feed?region=ID&page=1&perPage=20");
    // this.setState({
    //   rows: response.data.data.filter(
    //     m => m.type === "Multi-Title-Manual-Curation"
    //   )
    // });
    this.loadMovies();
  }

  loadMovies = () => {
    this.setState({ isLoading: true });
    Promise.all([
      hooqtv.get(`/feed?region=ID&page=${this.state.page}&perPage=20`)
    ])
      .then(response => {
        const nextRows = response[0].data.data.filter(
          m => m.type === "Multi-Title-Manual-Curation"
        );
        // debugger;
        this.setState({
          rows: [...this.state.rows, ...nextRows],
          isLoading: false
        });
        // debugger;
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

      // <InfiniteScroll
      //   pageStart={1}
      //   loadMore={this.loadItems.bind(this)}
      //   // hasMore={true || false}
      //   // loader={
      //   //   <div className="loader" key={0}>
      //   //     Loading ...
      //   //   </div>
      //   // }
      // >
      //   <RowList rows={this.state.rows} />
      // </InfiniteScroll>
    );
  }
}
