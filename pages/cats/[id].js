import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

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
  console.log("Cat object:", cat);

  // const filteredGoodFood = cat.food.likes.map((good) =>
  //   catFoods.find((food) => food.id === good)
  // );

  // const filteredBadFood = cat.food.dislikes.map((bad) =>
  //   catFoods.find((food) => food.id === bad)
  // );

  return (
    <>
      <StyledHead>{cat.name}</StyledHead>
      <StyledWrapper>
        <StyledSection>
          <p>
            <strong>Age:</strong> <span>{cat.age}</span>
          </p>
          <h4>Allergies, Diseases, Intolerances:</h4>
          <div>
            <p>
              Allergies:
              {cat.health.allergies.map((allergy, index) => (
                <span key={index}>{allergy.name}</span>
              ))}
            </p>

            <p>
              Diseases:
              {cat.health.diseases.map((disease, index) => (
                <span key={index}>{disease.name}</span>
              ))}
            </p>
            <p>
              Intolerances:{" "}
              {cat.health.intolerances.map((intolerance, index) => (
                <span key={index}>{intolerance.name}</span>
              ))}
            </p>
          </div>
          {/* <h4>Good Acceptance: </h4>
          <div>
            {filteredGoodFood.map((food) => (
              <p key={food.id}>
                {food.brand} - {food.variety}
              </p>
            ))}
          </div>
          <h4>Bad Acceptance: </h4>
          <div>
            {filteredBadFood.map((food) => (
              <p key={food.id}>
                {food.brand} - {food.variety}
              </p>
            ))}
          </div> */}
        </StyledSection>
      </StyledWrapper>
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}

const StyledHead = styled.h1`
  margin-left: 5%;
`;

const StyledWrapper = styled.div`
  max-width: 65%;
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
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;
