import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Navbar from "./components/Navbar";

import Signin from "./pages/Auth/Signin";
import Signup from "./pages/Auth/Signup";
import Products from "./pages/Products";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div id="content"> </div>
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/signin" component={Signin}></Route>
          <Route path="/signup" component={Signup}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
