import { useState } from "react";
import styled from "styled-components";

function SearchBox(props) {
  const [searchInputText, setSearchInputText] = useState("");
  return (
    <SearchWrapper>
      <input
        type="text"
        placeholder="Mēklēt ediena recepti"
        value={searchInputText}
        onChange={(event) => setSearchInputText(event.target.value)}
      />
      <StyledButton
        type="submit"
        onClick={() =>
          props.onSubmit(searchInputText, () => setSearchInputText(""))
        }
      >
        <i className="fa fa-search"></i>
      </StyledButton>
    </SearchWrapper>
  );
}

export default SearchBox;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;

  input {
    color: #00b4cc;
    background-color: #fbeec1;
    border: 3px solid #00b4cc;
    border-radius: none;
    outline: none;
    width: 24vw;
    background-color: #fbeec1;

    &:focus {
      color: #00b4cc;
    }
  }
`;

const StyledButton = styled.button`
  width: 40px;
  height: 35px;
  border: 1px solid #00b4cc;
  background: #00b4cc;
  text-align: center;
  color: #fff;
  font-size: 20px;
  border-radius: 0 5px 5px 0;
`;
