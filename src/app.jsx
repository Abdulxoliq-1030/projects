import Nav from "./components/nav";
import About from "./components/about";
import Shop from "./components/shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./base.scss";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
      </Switch>
    </Router>
  );
}

const Home = () => {
  <div>
    <h1>Home Page</h1>
  </div>;
};

export default App;
