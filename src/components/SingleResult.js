import { Link } from "react-router-dom";
import styled from "styled-components";
import { PUBLIC_ROUTES } from "../publicRoutes";
import {} from "./../App";

function SingleResult({ meal }) {
  return (
    <Card>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <h1>{meal.strMeal}</h1>
      <p>{meal.strTags?.replaceAll(",", " / ")}</p>
      <StyledLink to={PUBLIC_ROUTES.mealByIdPage.getPath(meal.idMeal)}>
        Lasīt..
      </StyledLink>
    </Card>
  );
}

export default SingleResult;

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 6px;
  margin: 1rem 0 0 1rem;
  text-transform: uppercase;
  text-decoration: none;
  color: black;
`;

const Card = styled.div`
  align-self: center;
  width: 50vw;
  border: 1px solid #daad86;
  border-radius: 0 8px 8px 0;
  margin: 3rem;

  h1,
  p {
    font-size: 18px;
    margin: 1rem 0 0 1rem;
  }

  img {
    max-width: 20vw;
    max-height: 32vh;
    border-radius: 0 8px 8px 0;
    float: right;
  }
`;
