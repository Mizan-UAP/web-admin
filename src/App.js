import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from "./Component/Home/Home";
import About from "./Component/About/About";
import Product from "./Component/Product/Product";
import Register from "./Component/Register/Register";
import Contact from "./Component/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/product">
            <Product/>
          </Route>
          <Route path="/register">
            <Register/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
