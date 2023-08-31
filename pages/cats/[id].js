import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useState } from "react";

export default function CatDetailPage({ catList, catFoods }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading</p>;

  // find the cat with the right id
  const cat = catList.find((cat) => cat.id.toString() === id);

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

  // RECOMMENDED FOOD SECTION (own page next US)

  // filter the food based on the health issues

  function filteredFoodBasedOnHealthIssues(catFoods, cat) {
    return catFoods.filter((food) => {
      const catAllergy = food.ingredients.some((ingredient) =>
        cat.health.allergies.includes(ingredient)
      );
      const catIntolerance = food.ingredients.some((ingredient) =>
        cat.health.intolerances.includes(ingredient)
      );
    });
  }

  return (
    <>
      <div>
        <StyledHead>{cat.name}</StyledHead>
      </div>
      <StyledWrapper>
        <StyledSection>
          <p>
            <strong>Age:</strong> <span>{cat.age}</span>
          </p>
          <h4>Allergies, Diseases, Intolerances:</h4>
          <div>
            <StyledList>
              <p>Allergies: </p>
              {cat.health.allergies.map((allergy, index) => (
                <StyledItem key={index}>{allergy}</StyledItem>
              ))}
            </StyledList>

            <ul>
              <p>Diseases: </p>
              {cat.health.diseases.map((disease, index) => (
                <StyledItem key={index}>{disease}</StyledItem>
              ))}
            </ul>
            <ul>
              <p>Intolerances:</p>
              {cat.health.intolerances.map((intolerance, index) => (
                <StyledItem key={index}>{intolerance}</StyledItem>
              ))}
            </ul>
          </div>
          <h4>Good Acceptance: </h4>
          <div>
            <ul>
              {filteredGoodFood.map((food) => (
                <StyledListItem key={food.id}>
                  {food.brand} - {food.variety}
                </StyledListItem>
              ))}
            </ul>
          </div>
          <h4>Bad Acceptance: </h4>
          <div>
            <ul>
              {filteredBadFood.map((food) => (
                <StyledListItem key={food.id}>
                  {food.brand} - {food.variety}
                </StyledListItem>
              ))}
            </ul>
          </div>
        </StyledSection>
      </StyledWrapper>
      <StyledContainer>
        <StyledLink href={"/"}>Back</StyledLink>
        <StyledLink href={`/updatecat/${cat.id}`}>Edit</StyledLink>
      </StyledContainer>

      <h2>Recommended Food</h2>
    </>
  );
}

const StyledHead = styled.h1`
  margin-left: 5%;
`;

const StyledWrapper = styled.div`
  max-width: 85%;
  margin: 0 1em;
  list-style-type: none;
  margin-bottom: 1.3rem;

  span {
    margin-left: 0.5rem;
    background-color: white;
  }

  strong,
  div {
    background-color: white;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.3rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1.3em;
  background-color: white;

  h4,
  p {
    background-color: white;
    margin: 0.8rem 0.4rem;
  }
`;

const StyledLink = styled(Link)`
  max-width: 25%;
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  list-style: none;
  margin-left: 10%;
`;

const StyledListItem = styled.li`
  list-style: none;
`;

const StyledContainer = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
