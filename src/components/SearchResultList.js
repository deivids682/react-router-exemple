import styled from "styled-components";
import Pagination from "./Pagination";
import SingleResult from "./SingleResult";

function SearchResultList({ mealsList, length, isGrid }) {
  return (
    <>
      <SearchResultWrapper isGrid={isGrid}>
        {mealsList.map((meal, key) => {
          return <SingleResult key={key} meal={meal} isGrid={isGrid} />;
        })}
      </SearchResultWrapper>
      {length > 5 && <Pagination pages={length / 5} />}
    </>
  );
}

export default SearchResultList;

const SearchResultWrapper = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.isGrid ? "row" : "column")};
  flex-wrap: wrap;
`;
