import { Component } from "react";
import NavBar from "./components/nav-bar";
import Genres from "./components/genres";
import Movies from "./components/movies";
import Loader from "./components/loader";
import Total from "./components/total";
import _ from "lodash";
import { paginate } from "./helpers/paginate";
import { fakeGetMovies } from "./services/fake-get-movies";
import { fakeGetGenres } from "./services/fake-get-genres";

class App extends Component {
  state = {
    loading: true,
    movies: [],
    genres: [],
    genreID: "all",
    currentPage: 1,
    pageSize: 3,
    sortedMovies: [],
    tempMovies: [],
  };

  handleSelectGenre = (newGenreID) => {
    this.setState({
      genreID: newGenreID,
      currentPage: 1,
      movies: this.state.tempMovies,
    });
  };

  handlePageChange = (newPage) => {
    this.setState({ currentPage: newPage });
  };

  handleLike = (movieID) => {
    const movies = [...this.state.movies];
    const movie = movies.find((movie) => movie._id === movieID);

    movie.isLiked = !movie.isLiked;
    this.setState({ movies });
  };

  handleDeleteMovie = (movieID) => {
    const movies = this.state.movies.filter((movie) => movie._id !== movieID);
    this.setState({ movies });
  };

  handleSort = (type) => {
    const tempArr = this.state.movies;
    const orderedItems = _.orderBy(tempArr, [type]);
    this.setState({ tempMovies: [...tempArr], movies: orderedItems });
  };

  componentDidMount() {
    const movies = fakeGetMovies();
    const genres = fakeGetGenres();
    this.setState({ movies });
    genres.unshift({ name: "All", _id: "all" });
    setTimeout(() => this.setState({ loading: false, movies, genres }), 1000);
  }

  render() {
    if (this.state.loading) return <Loader />;
    const { movies, genres, genreID, pageSize, currentPage } = this.state;
    const filteredMovies = movies.filter(
      (movie) => genreID === "all" || movie.genre._id === genreID
    );
    const paginatedMovies = paginate(filteredMovies, pageSize, currentPage);
    const total = filteredMovies.length;
    
    return (
      <>
        <NavBar />
        <div className="container pt-4">
          <div className="row d-flex">
            <Genres
              genres={genres}
              genreID={genreID}
              onSelect={this.handleSelectGenre}
            />
            <div className="col">
              <Total total={total} />
              <Movies
                currentPage={currentPage}
                pageSize={pageSize}
                onPageChange={this.handlePageChange}
                movies={paginatedMovies}
                onLike={this.handleLike}
                total={total}
                onDeleteMovie={this.handleDeleteMovie}
                onSorted={this.handleSort}
              />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
