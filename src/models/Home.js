import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import SearchResultList from "../components/SearchResultList";
import fetchWrapper from "../fetchWrapper";
import Categories from "./meals/Categories";

class Home extends React.Component {
  state = {
    pageNumber: 1,
  };

  componentDidMount() {
    this.changePage = this.changePage.bind(this);
  }

  changePage = (pageNumber, callback) =>
    this.setState({ ...this.state, pageNumber }, () => callback());

  render() {
    const { mealsList } = this.props;
    const startIndex = (this.state.pageNumber - 1) * 5;
    const endIndex = startIndex + 5;

    return (
      <div>
        <Categories />
        <Content>
          <SearchBox />
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
        </Content>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mealsList: state.meals.mealsList,
  };
};

export default connect(mapStateToProps, null)(Home);

const Content = styled.div`
  margin-left: 8vw;
`;
