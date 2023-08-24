import FoodCard from "../FoodCard/FoodCard.js";
import { styled } from "styled-components";
import { catfoods } from "@/data/catfooddata.js";

export default function FoodList({ catfoods, searchTerm }) {
  const filteredCatFood = catfoods.filter((food) =>
    food.brand.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <StyledList>
      {filteredCatFood.map((food) => (
        <ListItem key={food.id}>
          <FoodCard food={food} />
        </ListItem>
      ))}
    </StyledList>
  );
}

const StyledList = styled.ul`
  max-width: 100%;
  list-style-type: none;
  display: grid;
  padding-left: 0;
  gap: 1rem;
`;

const ListItem = styled.li`
  max-width: 65%;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1em;
  background-color: white;
  h3 {
    background-color: white;
  }
`;