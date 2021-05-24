import _ from "lodash";
import React, { useEffect, useState } from "react";
import { connect, useStore } from "react-redux";
import SearchResultList from "../../components/SearchResultList";
import {
  fetchMealByCategory,
  changePageNumber,
  cleanMealByCategory,
} from "../../actions";

function MealsByCategory(props) {
  useEffect(() => {
    props.fetchMealByCategory(props.category);

    return () => {
      changePageNumber(1);
    };
  }, []);

  const { mealByCategoryList } = props;
  const startIndex = (props.pageNumber - 1) * 5;
  const endIndex = startIndex + 5;
  return (
    <>
      <SearchResultList
        isGrid
        length={mealByCategoryList.length}
        mealsList={_.slice(
          mealByCategoryList,
          startIndex,
          endIndex > mealByCategoryList.length
            ? mealByCategoryList.length
            : endIndex
        )}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    mealByCategoryList: state.meals.mealByCategoryList,
    pageNumber: state.meals.pageNumber,
  };
};
export default connect(mapStateToProps, {
  fetchMealByCategory,
  changePageNumber,
  cleanMealByCategory,
})(MealsByCategory);
