import React from "react";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import fetchWrapper from "../fetchWrapper";
import Categories from "./meals/Categories";

export default class Home extends React.Component {
  state = {
    mealsList: [],
  };

  componentDidMount() {
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit = (searchInputText, setSearchInputTextClean) => {
    this.getMealBySerchValue(searchInputText);

    setSearchInputTextClean();
  };

  getMealBySerchValue(searchValue) {
    fetchWrapper
      .get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
      )
      .then((res) => {
        this.setState({
          ...this.state,
          mealsList: res.meals !== null ? res.meals : [],
        });
      });
  }

  render() {
    return (
      <div>
        <Categories />
        <Content>
          <SearchBox onSubmit={this.onSubmit} />
        </Content>
      </div>
    );
  }
}

const Content = styled.div`
  margin-left: 8vw;
`;
