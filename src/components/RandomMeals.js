import _ from "lodash";
import React from "react";
import fetchWrapper from "../../fetchWrapper";

export default class RandomMeals extends React.Component {
  state = {
    randomMeals: [],
  };

  componentDidMount() {
    this.getMealRandom(6);
  }

  getMealRandom(randomCount) {
    debugger;
    if (randomCount === 0) {
      return;
    }
    fetchWrapper
      .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
      .then((res) => {
        randomCount--;
        const meals = _.head(res.meals);
        this.setState(
          {
            ...this.state,
            randomMeals: [...this.state.randomMeals, meals],
          },
          () => this.getMealRandom(randomCount)
        );
      });
  }

  render() {
    return (
      <>
        <h1>Random Meals</h1>
      </>
    );
  }
}
