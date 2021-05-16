import _ from "lodash";
import React from "react";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import SearchResultList from "../components/SearchResultList";
import fetchWrapper from "../fetchWrapper";
import Categories from "./meals/Categories";
import RandomMeals from "./meals/RandomMeals";

export default class Home extends React.Component {
  state = {
    mealsList: [],
    pageNumber: 1,
  };

  componentDidMount() {
    this.onSubmit = this.onSubmit.bind(this);
    this.changePage = this.changePage.bind(this);
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

  changePage = (pageNumber, callback) =>
    this.setState({ ...this.state, pageNumber }, () => callback());

  render() {
    const { mealsList } = this.state;
    const startIndex = (this.state.pageNumber - 1) * 5;
    const endIndex = startIndex + 5;

    return (
      <div>
        <Categories />
        <Content>
          <SearchBox onSubmit={this.onSubmit} />
          <SearchResultList
            isGrid={false}
            length={mealsList.length}
            mealsList={_.slice(
              mealsList,
              startIndex,
              endIndex > mealsList.length ? mealsList.length : endIndex
            )}
            changePage={this.changePage}
          />
          <RandomMeals />
        </Content>
      </div>
    );
  }
}

const Content = styled.div`
  margin-left: 8vw;
`;
