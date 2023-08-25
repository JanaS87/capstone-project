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
        <h1>{food.brand}</h1>
        <h2>
          <span>{food.variety}</span>
        </h2>
      </StyledHeaderWrapping>
      <StyledSection>
        <StyledGrid>
          <div>
            <h3>Ingridients: </h3>
            <ul>
              {food.ingredients.map((ingredient, index) => (
                <StyledItem key={index}>{ingredient}</StyledItem>
              ))}
            </ul>
          </div>
          <div>
            <h3>Analytical Constituents: </h3>
            <ul>
              {food.analyticalConstituents.map((analytical, index) => (
                <StyledItem key={index}>{analytical}</StyledItem>
              ))}
            </ul>
          </div>
        </StyledGrid>

        <StyledGrid>
          <div>
            <h3>Additives: </h3>
            <ul>
              {food.additives.map((additive, index) => (
                <StyledItem key={index}>{additive}</StyledItem>
              ))}
            </ul>
          </div>
          <div>
            <h3>Food Type: </h3>
            <p>{food.type}</p>
          </div>
        </StyledGrid>
        <StyledGrid>
          <div>
            <h3>Likes: </h3>
            <ul>
              {filteredCatLikes.map((catLike) => (
                <StyledItem key={catLike.id}>{catLike.name}</StyledItem>
              ))}
            </ul>
          </div>
          <div>
            <h3>Dislikes: </h3>
            <ul>
              {filteredCatDislikes.map((dislike) => (
                <StyledItem key={dislike.id}>{dislike.name}</StyledItem>
              ))}
            </ul>
          </div>
        </StyledGrid>
      </StyledSection>
      <Link href={"/foodsearch"}>Back</Link>
    </>
  );
}

const StyledHeaderWrapping = styled.div``;
const StyledSection = styled.section`
  padding: 1.2rem 1.3rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  background-color: white;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StyledItem = styled.li`
  list-style: none;
  margin-left: 0;
`;
