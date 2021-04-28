import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import MealByIdPage from "./views/MealByIdPage";

function App() {
  return (
    <BrowserRouter>
      {/*<ul>
        <li>
          <Link to="/meal/53041">Meal 1</Link>
        </li>
        <li>
          <Link to="/meal/52772">Meal 2</Link>
        </li>
      </ul>*/}
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/meal/:id" component={MealByIdPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
