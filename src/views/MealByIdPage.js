import MealById from "../models/meals/MealById";
import React from "react";

export default class MealByIdPage extends React.Component {
  render() {
    return <MealById id={this.props.match.params.id} />;
  }
}
