import CatCard from "../CatCard/CatCard.js";
import { styled } from "styled-components";

export default function CatList({ catList }) {
  return (
    <StyledList>
      {catList.map((cat) => (
        <ListItem key={cat.id}>
          <CatCard cat={cat} />
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  max-width: 100%;
  list-style-type: none;
  display: grid;
  padding-left: 1rem;
  gap: 1rem;
`;

const ListItem = styled.li`
  max-width: 65%;
  height: 70px;
  padding: 0.1rem 2rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1.1em;
  background-color: white;
`;
