import React from "react";
import { Link } from "react-router-dom";
import fetchWrapper from "../../fetchWrapper";

export default class MealsByCategory extends React.Component {
  state = {
    mealByCategoryData: [],
  };

  componentDidMount() {
    this.getMealByCategory(this.props.category);
  }

  getMealByCategory(category) {
    fetchWrapper
      .get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
      .then((res) => {
        console.log(res);
        this.setState({ ...this.state, mealByCategoryData: res.meals });
      });
  }

  render() {
    return <>{"Test"}</>;
  }
}
