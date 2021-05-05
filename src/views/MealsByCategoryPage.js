import React from "react";
import { Link } from "react-router-dom";
import MealsByCategory from "../models/categoryMeals/MealsByCategory";

export default class MealsByCategoryPage extends React.Component {
  render() {
    const { category } = this.props.match.params;
    return (
      <>
        <Link to={"/"}>Atpakaļ</Link>
        <h1>Edienu kategorijas nosaukums: {category}</h1>
        <MealsByCategory category={category} />
      </>
    );
  }
}
