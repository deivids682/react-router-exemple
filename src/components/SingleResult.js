import styled from "styled-components";

function SingleResult({ meal }) {
  return (
    <Card>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h1>{meal.strMeal}</h1>
    </Card>
  );
}

export default SingleResult;

const Card = styled.div`
  width: 60vw;
  border: 3px solid #00b4cc;
  border-radius: 8px;
  margin: 3rem;

  h1 {
    font-size: 18px;
    margin: 1rem 0 0 1rem;
  }

  img {
    margin: 1rem 0 0 1rem;
    max-width: 20vw;
    max-height: 30vh;
  }
`;
