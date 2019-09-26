import React, { Component } from "react";
import RowList from "../components/RowList";
import hooqtv from "../apis/hooqtv";
import "../App.css";
import InfiniteScroll from "react-infinite-scroller";

export default class App extends Component {
  state = { rows: {}, page: 1 };

  async componentDidMount() {
    const response = await hooqtv.get("/feed?region=ID&page=1&perPage=20");
    this.setState({
      rows: response.data.data.filter(
        m => m.type === "Multi-Title-Manual-Curation"
      )
    });
  }

  async loadItems() {
    const response2 = await hooqtv.get(
      `/feed?region=ID&page=${this.state.page}&perPage=20`
    );
    let rows2 = response2.data.data.filter(
      m => m.type === "Multi-Title-Manual-Curation"
    );
    console.log(rows2);
    this.setState({ ...this.state.rows, rows2 });
  }

  render() {
    return (
      <InfiniteScroll
        pageStart={1}
        loadMore={this.loadItems.bind(this)}
        // hasMore={true || false}
        // loader={
        //   <div className="loader" key={0}>
        //     Loading ...
        //   </div>
        // }
      >
        <RowList rows={this.state.rows} />
      </InfiniteScroll>
    );
  }
}
