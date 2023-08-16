import { cats } from "../../data/catdata";
import CatCard from "../CatCard/CatCard.js";
import { styled } from "styled-components";

export default function CatList() {
  return (
    <>
      <StyledHeading>Your Cats🐾</StyledHeading>
      <StyledList>
        {cats &&
          cats.map((cat) => (
            <ListItem key={cat.id}>
              <CatCard cat={cat} />
            </ListItem>
          ))}
      </StyledList>
    </>
  );
}

const StyledList = styled.ul`
  max-width: 65%;
  list-style-type: none;
  display: grid;
  padding-left: 0;
  gap: 1rem;
`;

const ListItem = styled.li`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1.3em;
  background-color: white;
  h3 {
    background-color: white;
  }
`;

const StyledHeading = styled.h1`
  margin-left: 5%;
`;
