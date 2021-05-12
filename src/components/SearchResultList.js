import styled from "styled-components";
import Pagination from "./Pagination";
import SingleResult from "./SingleResult";

function SearchResultList({ mealsList }) {
  return (
    <>
      <SearchResultWrapper>
        {mealsList.map((meal, key) => {
          return <SingleResult key={key} meal={meal} />;
        })}
      </SearchResultWrapper>
      {mealsList.length > 5 && <Pagination pages={4} />}
    </>
  );
}

export default SearchResultList;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
