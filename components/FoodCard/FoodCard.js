import Link from "next/link";
import styled from "styled-components";

export default function FoodCard({ food }) {
  return (
    <StyledLink href={`/foods/${food.id}`}>
      <h3>
        {food.brand} - {food.variety}
      </h3>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  color: #413f42;
  &:hover,
  :active {
    font-size: 110%;
  }
`;
