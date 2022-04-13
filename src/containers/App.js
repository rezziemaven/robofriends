import { Component } from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import "./App.css";
import Scroll from "../components/Scroll";
import ErrorBoundary from "../components/ErrorBoundary";

class App extends Component {
  state = {
    robots: [],
    query: "",
  };

  api = "https://jsonplaceholder.typicode.com";

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      ...this.state,
      query: e.target.value,
    });
  };

  componentDidMount() {
    fetch(`${this.api}/users`)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          robots: [...data],
        })
      );
  }

  render() {
    const { robots, query } = this.state;

    const regex = new RegExp(query, "i");
    const filteredRobots = robots.filter((robot) => robot.name.match(regex));
    if (!robots.length) return <h1 className="tc f1">Loading</h1>;
    else
      return (
        <div className="tc App">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox handleChange={this.handleChange} />
          <Scroll>
            <ErrorBoundary>
              {filteredRobots.length ? (
                <CardList robots={filteredRobots} />
              ) : (
                <p className="white">Sorry, no robots found.</p>
              )}
            </ErrorBoundary>
          </Scroll>
        </div>
      );
  }
}

export default App;
