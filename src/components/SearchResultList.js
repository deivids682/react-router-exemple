import styled from "styled-components";
import SingleResult from "./SingleResult";

function SearchResultList({ mealsList }) {
  return (
    <SearchResultWrapper>
      {mealsList.map((meal, key) => {
        return <SingleResult key={key} meal={meal} />;
      })}
    </SearchResultWrapper>
  );
}

export default SearchResultList;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
