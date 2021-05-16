import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import "./App.css";
import { PUBLIC_ROUTES } from "./publicRoutes";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={PUBLIC_ROUTES.homePage.path}
          component={PUBLIC_ROUTES.homePage.component}
        ></Route>
        <Route
          exact
          path={PUBLIC_ROUTES.mealsByCategoryPage.path}
          component={PUBLIC_ROUTES.mealsByCategoryPage.component}
        ></Route>
        <Route
          exact
          path={PUBLIC_ROUTES.mealByIdPage.path}
          component={PUBLIC_ROUTES.mealByIdPage.component}
        ></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
