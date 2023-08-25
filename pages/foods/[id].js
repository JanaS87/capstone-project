import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function FoodDetailsPage({ catList, catFoods }) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <h1>Loading</h1>;

  const food = catFoods.find((food) => food.id.toString() === id);

  if (!food) {
    return (
      <>
        <h1>Food not found</h1>
        <Link href={"/foodsearch"}>Back</Link>
      </>
    );
  }

  const filteredCatLikes = catList.filter((cat) => cat.food.likes.includes(id));

  const filteredCatDislikes = catList.filter((cat) =>
    cat.food.dislikes.includes(id)
  );

  console.log("Food object:", food);

  return (
    <>
      <StyledHeaderWrapping>
        <StyledHeading>{food.brand}</StyledHeading>
        <StyledHeading2>
          <span>{food.variety}</span>
        </StyledHeading2>
      </StyledHeaderWrapping>
      <StyledSection>
        <StyledGrid>
          <div>
            <h3>Ingridients: </h3>
            <StyledList>
              {food.ingredients.map((ingredient, index) => (
                <StyledItem key={index}>{ingredient}</StyledItem>
              ))}
            </StyledList>
          </div>
          <div>
            <h3>Analytical Constituents: </h3>
            <StyledList>
              {food.analyticalConstituents.map((analytical, index) => (
                <StyledItem key={index}>{analytical}</StyledItem>
              ))}
            </StyledList>
          </div>
        </StyledGrid>

        <StyledGrid>
          <div>
            <h3>Additives: </h3>
            <StyledList>
              {food.additives.map((additive, index) => (
                <StyledItem key={index}>{additive}</StyledItem>
              ))}
            </StyledList>
          </div>
          <div>
            <h3>Food Type: </h3>
            <p>{food.type}</p>
          </div>
        </StyledGrid>
        <StyledGrid>
          <div>
            <h3>Likes: </h3>
            <StyledList>
              {filteredCatLikes.map((catLike) => (
                <StyledItem key={catLike.id}>{catLike.name}</StyledItem>
              ))}
            </StyledList>
          </div>
          <div>
            <h3>Dislikes: </h3>
            <StyledList>
              {filteredCatDislikes.map((dislike) => (
                <StyledItem key={dislike.id}>{dislike.name}</StyledItem>
              ))}
            </StyledList>
          </div>
        </StyledGrid>
      </StyledSection>
      <StyledLink href={"/foodsearch"}>Back</StyledLink>
    </>
  );
}

const StyledHeaderWrapping = styled.div``;
const StyledSection = styled.section`
  padding: 1.2rem 1.3rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  background-color: white;
  max-width: 85%;
  list-style-type: none;
  margin-bottom: 1.3rem;
  margin-left: 1rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StyledList = styled.ul`
  margin: 2px;
  padding: 0;
`;

const StyledItem = styled.li`
  list-style: none;
  margin-left: 0;
`;

const StyledLink = styled(Link)`
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  max-width: 12%;
`;

const StyledHeading = styled.h1`
  margin-left: 5%;
`;

const StyledHeading2 = styled.h2`
  margin-left: 5%;
`;
