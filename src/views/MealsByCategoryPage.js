import React from "react";
import { Link } from "react-router-dom";
import MealsByCategory from "../models/categoryMeals/MealsByCategory";
import { PUBLIC_ROUTES } from "../publicRoutes";
import { changePageNumber } from "../actions";
import { connect } from "react-redux";

export default class MealsByCategoryPage extends React.Component {
  render() {
    const { category } = this.props.match.params;

    return (
      <>
        <Link to={PUBLIC_ROUTES.homePage.path}>Atpakaļ</Link>
        <h1>Edienu kategorijas nosaukums: {category}</h1>
        <MealsByCategory category={category} />
      </>
    );
  }
}
