import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useState } from "react";
import FoodCard from "@/components/FoodCard/FoodCard";
import Tabs from "@/components/Tabs/Tabs";

export default function CatDetailPage({
  catList,
  catFoods,
  forbiddenFoodForCat,
  food,
  cat,
}) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading</p>;

  // find the cat with the right id
  // const cat = catList.find((cat) => cat.id.toString() === id);

  if (!cat) {
    return (
      <>
        <p>Cat not found</p>
        <StyledLink href={"/"}>Back</StyledLink>
      </>
    );
  }

  const filteredGoodFood = cat.food.likes.map((good) =>
    catFoods.find((food) => food.id === good)
  );

  const filteredBadFood = cat.food.dislikes.map((bad) =>
    catFoods.find((food) => food.id === bad)
  );

  return (
    <>
      <StyledHead>{cat.name}</StyledHead>
      <StyledTabContainer>
        <Tabs cat={cat} id={id} />
      </StyledTabContainer>
      <StyledWrapper>
        <p>
          <strong>Age:</strong> <span>{cat.age}</span>
        </p>
        <h4>Allergies, Diseases, Intolerances:</h4>
        <StyledContainer>
          <StyledList>
            <p>Allergies: </p>
            {cat.health.allergies.map((allergy, index) => (
              <StyledItem key={index}>{allergy}</StyledItem>
            ))}
          </StyledList>

          <StyledList>
            <p>Diseases: </p>
            {cat.health.diseases.map((disease, index) => (
              <StyledItem key={index}>{disease}</StyledItem>
            ))}
          </StyledList>
          <StyledList>
            <p>Intolerances: </p>
            {cat.health.intolerances.map((intolerance, index) => (
              <StyledItem key={index}>{intolerance}</StyledItem>
            ))}
          </StyledList>
        </StyledContainer>

        <StyledContainer>
          <h4>Good Acceptance: </h4>
          <ul>
            {filteredGoodFood.map((food) => (
              <StyledListItem key={food.id}>
                {food.brand} - {food.variety}
              </StyledListItem>
            ))}
          </ul>
        </StyledContainer>
        <StyledContainer>
          <h4>Bad Acceptance: </h4>
          <ul>
            {filteredBadFood.map((food) => (
              <StyledListItem key={food.id}>
                {food.brand} - {food.variety}
              </StyledListItem>
            ))}
          </ul>
        </StyledContainer>
      </StyledWrapper>
      <StyledLinkContainer>
        <StyledLink href={"/"}>Back</StyledLink>
        <StyledLink href={`/updatecat/${cat.id}`}>Edit</StyledLink>
      </StyledLinkContainer>
    </>
  );
}

const StyledHead = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.3rem;
  max-width: 90%;
  margin: 0 1em;
  list-style-type: none;
  margin-bottom: 1.3rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  box-shadow: 0px 1px 5px -2px #7f8487;
  border-radius: 10px/20px;
  font-size: 1.2em;

  h4 {
    margin-left: 0.5rem;
  }

  span,
  p {
    margin-left: 0.5rem;
  }
`;

const StyledLink = styled(Link)`
  max-width: 25%;
  background: transparent;
  backdrop-filter: blur(2px);
  color: #f0caa3;
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #f0caa3;
  border-radius: 3px;
  text-decoration: none;

  &:hover {
    background-color: #f0caa3;
    color: black;
  }
`;

const StyledList = styled.ul`
  p {
    text-decoration: underline;
  }
`;

const StyledItem = styled.li`
  list-style: none;
  margin-left: 10%;
  text-decoration: none;
`;

const StyledListItem = styled.li`
  list-style: none;
  margin-bottom: 8%;
`;

const StyledLinkContainer = styled.div`
  max-width: 90%;
  margin: 0 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledContainer = styled.div``;

const StyledTabContainer = styled.div`
  align-self: center;
  margin-left: 1.5%;
`;
