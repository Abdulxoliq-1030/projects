import { faker } from "@faker-js/faker";
import { Component } from "react";
import { toast } from "react-toastify";
import Input from "../components/common/input";
import Select from "../components/common/select";
import { fakeGetGenres } from "../services";
import { fakeGetGenre } from "../services/fake-get-genres";
import { object, string, number } from "yup";

const genres = fakeGetGenres();
class AddMovie extends Component {
  schema = object({
    genre: string().required(),
    title: string().required(),
    dailyRentalRate: number()
      .required()
      .typeError("rate is a required field and must be a number"),
    numberInStock: number()
      .required()
      .typeError("stock is a required field and must be a number"),
  });
  state = {
    disabled: false,
    movie: {
      genre: "",
      title: "",
      dailyRentalRate: "",
      numberInStock: "",
      _id: faker.database.mongodbObjectId(),
    },
    errors: {},
  };

  validate = () => {
    const {} = this.state.movie;
    const errors = {};

    try {
      this.schema.validateSync(this.state.movie, { abortEarly: false });
    } catch ({ inner }) {
      for (let { path, message } of inner) errors[path] = message;
      console.log("errors", errors);
    }

    return Object.values(errors).length ? errors : false;
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ disabled: true });

    const errors = this.validate();
    if (errors) {
      this.setState({ errors, disabled: false });
      return toast.error("Exist errors");
    }

    const { title, genre } = this.state.movie;

    setTimeout(() => {
      const movie = { ...this.state.movie };
      movie.genre = fakeGetGenre(movie.genre);
      this.props.onAddMovie(movie);

      toast.success(`Added Movie, Genre: ${genre} Name: ${title}`);
      this.props.push("/movies", movie);
    }, 2000);
  };

  validateField = (value, name) => {
    const errors = { ...this.state.errors };
    try {
      this.schema
        .pick([name])
        .validateSync({ [name]: value }, { abortEarly: false });
      delete errors[name];
    } catch ({ inner }) {
      for (let { path, message } of inner) errors[path] = message;
      console.log("errors = ", errors);
    }

    return Object.values(errors).length ? errors : false;
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    const { movie } = this.state;
    const errors = this.validateField(value, name);
    this.setState({ movie: { ...movie, [name]: value }, errors });
  };

  render() {
    const { disabled, movie, errors } = this.state;
    console.log(this.props.editMovie);
    return (
      <>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          <Select
            name="genre"
            label="Genre Name"
            placeholder="Select Genre"
            value={movie.genre}
            onChange={this.handleChange}
            error={errors.genre}
            options={genres}
          />
          <Input
            name="title"
            label="Movie Name"
            placeholder="Enter new  Movie Name"
            value={movie.title}
            onChange={this.handleChange}
            error={errors.title}
          />
          <Input
            name="dailyRentalRate"
            label="Movie Rate"
            placeholder="Enter Movie Rate"
            value={movie.dailyRentalRate}
            onChange={this.handleChange}
            error={errors.dailyRentalRate}
          />
          <Input
            name="numberInStock"
            label="Movie Stock"
            placeholder="Enter Movie Stock"
            value={movie.numberInStock}
            onChange={this.handleChange}
            error={errors.numberInStock}
          />
          <button className="btn btn-primary" disabled={disabled}>
            Save
          </button>
        </form>
      </>
    );
  }
}

export default AddMovie;
