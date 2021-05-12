import React from "react";
import NavPills from "../../components/NavPills";
import NavLink from "../../components/NavLink";
import fetchWrapper from "../../fetchWrapper";
import { PUBLIC_ROUTES } from "../../publicRoutes";

export default class Categories extends React.Component {
  state = {
    categories: [],
  };

  componentDidMount() {
    fetchWrapper
      .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
      .then((res) => {
        this.setState({ ...this.state, categories: res.categories });
      });
  }
  render() {
    return (
      <NavPills>
        {this.state.categories &&
          this.state.categories.map((categorie, key) => {
            return (
              <NavLink
                key={key}
                to={PUBLIC_ROUTES.mealsByCategoryPage.getPath(
                  categorie.strCategory
                )}
              >
                {categorie.strCategory}
              </NavLink>
            );
          })}
      </NavPills>
    );
  }
}
