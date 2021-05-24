import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import SearchBox from "../components/SearchBox";
import SearchResultList from "../components/SearchResultList";
import Categories from "./meals/Categories";
import { changePageNumber } from "../actions";

function Home({ mealsList, pageNumber }) {
  const startIndex = (pageNumber - 1) * 5;
  const endIndex = startIndex + 5;

  useEffect(() => {
    return () => {
      changePageNumber(1);
    };
  });

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
        />
      </Content>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    mealsList: state.meals.mealsList,
    pageNumber: state.meals.pageNumber,
  };
};

export default connect(mapStateToProps, { changePageNumber })(Home);

const Content = styled.div`
  margin-left: 8vw;
`;
