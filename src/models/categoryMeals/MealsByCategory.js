import _ from "lodash";
import React from "react";
import { Link } from "react-router-dom";
import MealCard from "../../components/MealCard";
import SearchResultList from "../../components/SearchResultList";
import fetchWrapper from "../../fetchWrapper";

export default class MealsByCategory extends React.Component {
  state = {
    mealByCategoryData: [],
    pageNumber: 1,
  };

  componentDidMount() {
    this.changePage = this.changePage.bind(this);
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

  changePage = (pageNumber, callback) =>
    this.setState({ ...this.state, pageNumber }, () => callback());

  render() {
    const { mealByCategoryData } = this.state;
    const startIndex = (this.state.pageNumber - 1) * 5;
    const endIndex = startIndex + 5;
    return (
      <>
        <SearchResultList
          isGrid
          length={mealByCategoryData.length}
          mealsList={_.slice(
            mealByCategoryData,
            startIndex,
            endIndex > mealByCategoryData.length
              ? mealByCategoryData.length
              : endIndex
          )}
          changePage={this.changePage}
        />
      </>
    );
  }
}
