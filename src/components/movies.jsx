import Like from "./like";
import Pagination from "./pagination";

const Movies = ({
  movies = [],
  onLike,
  pageSize,
  onPageChange,
  currentPage,
  total,
  onDeleteMovie,
  onSorted,
}) => {
  return (
    <>
      <table className="table table-stripped table-hovered">
        <thead>
          <tr>
            <th>#</th>
            <th onClick={() => onSorted("title")} >Title</th>
            <th onClick={() => onSorted("genre.name")} >Genre</th>
            <th onClick={() => onSorted("numberInStock")} >Stock</th>
            <th onClick={() => onSorted("dailyRentalRate")} >Rate</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie._id}>
              <td>{movie._id}</td>
              <td>{movie.title}</td>
              <td>{movie.genre.name}</td>
              <td>{movie.numberInStock}</td>
              <td>{movie.dailyRentalRate}</td>
              <td>
                <Like
                  isLiked={movie.isLiked}
                  onLike={() => onLike(movie._id)}
                />
                <button className="btn btn-info btn-sm ms-2">Edit</button>
                <button
                  className="btn btn-danger btn-sm ms-2"
                  onClick={() => onDeleteMovie(movie._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        pageSize={pageSize}
        itemsCount={total}
        currentPage={currentPage}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default Movies;
