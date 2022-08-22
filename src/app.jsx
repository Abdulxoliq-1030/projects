import { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { Login, Movies, Register } from "./pages";
import { NavBar } from "./components";
import AddMovie from "./pages/add-movie";
import { fakeGetMovies } from "./services";

class App extends Component {
  state = {
    movies: fakeGetMovies(),
    movie: {},
  };

  handleAddMovie = (movie) => {
    const movies = [...this.state.movies, movie];
    this.setState({ movies });
  };

  handleEditMovie = (movieID) => {
    const movie = this.state.movies.filter((movie) => movie._id === movieID);
    this.setState({ movie });
  };

  render() {
    return (
      <>
        <NavBar />
        <div className="container pt-4 wrapper">
          <Switch>
            <Route exact path="/" component={() => <h1>Zetflix</h1>} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              exact
              path="/add-movie"
              component={(props) => (
                <AddMovie
                  editMovie={this.state.movie}
                  push={props.history.push}
                  onAddMovie={this.handleAddMovie}
                />
              )}
            />
            <Route
              path="/movies"
              component={(props) => (
                <Movies
                  {...props}
                  movies={this.state.movies}
                  onEditMovie={this.handleEditMovie}
                />
              )}
            />
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
