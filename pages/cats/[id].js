import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import Button from "@/components/Button/Button";
import { useState } from "react";
import HealthIssuesModal from "@/components/Modal/HealthIssuesModal";

export default function CatDetailPage({ catList, catFoods }) {
  const [isActive, setIsActive] = useState(false);
  const [isHealthModalOpen, setIsHealthModalOpen] = useState(false);

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

  return (
    <>
      <div>
        <StyledHead>{cat.name}</StyledHead>
        {isActive && <h2>What would you like to change?</h2>}
      </div>
      <StyledWrapper>
        <StyledSection>
          <p>
            <strong>Age:</strong> <span>{cat.age}</span>
          </p>
          <h4>
            Allergies, Diseases, Intolerances:{" "}
            {isActive && (
              <Button onClick={() => setIsHealthModalOpen(true)}>Edit</Button>
            )}
          </h4>
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
                <li key={index}>{disease}</li>
              ))}
            </ul>
            <ul>
              <p>Intolerances:</p>
              {cat.health.intolerances.map((intolerance, index) => (
                <li key={index}>{intolerance}</li>
              ))}
            </ul>
          </div>
          <h4>Good Acceptance: {isActive && <Button>Edit</Button>}</h4>
          <div>
            <ul>
              {filteredGoodFood.map((food) => (
                <li key={food.id}>
                  {food.brand} - {food.variety}
                </li>
              ))}
            </ul>
          </div>
          <h4>Bad Acceptance: {isActive && <Button>Edit</Button>}</h4>
          <div>
            <ul>
              {filteredBadFood.map((food) => (
                <li key={food.id}>
                  {food.brand} - {food.variety}
                </li>
              ))}
            </ul>
          </div>
        </StyledSection>
      </StyledWrapper>
      <StyledContainer>
        <StyledLink href={"/"}>Back</StyledLink>
        <Button onClick={() => setIsActive(!isActive)}>Edit</Button>
        <HealthIssuesModal
          isOpen={isHealthModalOpen}
          onRequestClose={() => setIsHealthModalOpen}
        />
      </StyledContainer>
    </>
  );
}

const StyledHead = styled.h1`
  margin-left: 5%;
`;

const StyledWrapper = styled.div`
  max-width: 85%;
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
  max-width: 12%;
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

const StyledContainer = styled.div`
  max-width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
