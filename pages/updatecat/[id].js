import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function UpdateCat({ catList, catFoods }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading</p>;

  // find the cat with the right id
  const cat = catList.find((cat) => cat.id.toString() === id);

  const filteredGoodFood = cat.food.likes.map((good) =>
    catFoods.find((food) => food.id === good)
  );

  const filteredBadFood = cat.food.dislikes.map((bad) =>
    catFoods.find((food) => food.id === bad)
  );

  if (!cat) {
    return (
      <>
        <p>Cat not found</p>
        <StyledLink href={"/"}>Back</StyledLink>
      </>
    );
  }

  return (
    <>
      <StyledHeaderWrapping>
        <h1>{cat.name}</h1>
        <h2>What would you like to change?</h2>
      </StyledHeaderWrapping>
      <StyledWrapper>
        <StyledSection>
          <p>
            <strong>Age:</strong> <span>{cat.age}</span>
          </p>
          <div>
            <h4>Allergies, Diseases, Intolerances:</h4>
            <StyledButton>Edit</StyledButton>
          </div>
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
          <div>
            <h4>Good Acceptance: </h4>
            <StyledButton>Edit</StyledButton>
          </div>

          <div>
            <ul>
              {filteredGoodFood.map((food) => (
                <li key={food.id}>
                  {food.brand} - {food.variety}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Bad Acceptance: </h4>
            <StyledButton>Edit</StyledButton>
          </div>
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
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  max-width: 20%;
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

const StyledButton = styled.button`
  max-width: 20%;
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
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

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
`;

const StyledItem = styled.li`
  list-style: none;
  margin-left: 10%;
`;

const StyledHeaderWrapping = styled.div`
  gap: 0;
`;
