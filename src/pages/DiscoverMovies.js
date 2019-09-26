import React, { Component } from "react";
import RowList from "../components/RowList";
import hooqtv from "../apis/hooqtv";
import "../App.css";

export default class App extends Component {
  state = { rows: {} };

  async componentDidMount() {
    const response = await hooqtv.get("/feed?region=ID&page=1&perPage=20");
    this.setState({
      rows: response.data.data.filter(
        m => m.type === "Multi-Title-Manual-Curation"
      )
    });
  }

  render() {
    return (
      <div>
        <RowList rows={this.state.rows} />
      </div>
    );
  }
}
