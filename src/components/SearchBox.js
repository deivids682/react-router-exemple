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

  input {
    color: #00b4cc;
  }
`;

const StyledButton = styled.button`
  width: 40px;
  height: 35px;
  border: 1px solid #00b4cc;
`;
