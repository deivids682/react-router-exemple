import React from "react";
import { NavLink } from "react-router-dom";
import NavPills from "../../components/NavPills";
import fetchWrapper from "../../fetchWrapper";

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
    console.log(this.state.categories);
    return (
      <NavPills>
        {this.state.categories &&
          this.state.categories.map((categorie, key) => {
            return (
              <NavLink key={key} to={`/categorie/${categorie.strCategory}`}>
                {categorie.strCategory}
              </NavLink>
            );
          })}
      </NavPills>
    );
  }
}
