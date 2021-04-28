import React from "react";
import fetchWrapper from "../../fetchWrapper";

export default class MealById extends React.Component {
  state = {
    mealeData: {},
  };

  componentDidMount() {
    this.getMealById(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.getMealById(this.props.id);
    }
  }

  getMealById(id) {
    fetchWrapper
      .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then((res) => {
        this.setState({ ...this.state, mealeData: res.meals[0] });
      });
  }

  render() {
    return (
      <div>
        <h1>{this.state.mealeData.strMeal}</h1>
        <p>{this.state.mealeData.strInstructions}</p>
      </div>
    );
  }
}
