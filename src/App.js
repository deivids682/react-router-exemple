import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./views/HomePage";
import MealByIdPage from "./views/MealByIdPage";
import MealsByCategoryPage from "./views/MealsByCategoryPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route
          exact
          path="/categorie/:category"
          component={MealsByCategoryPage}
        ></Route>
        <Route exact path="/meal/:id" component={MealByIdPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
