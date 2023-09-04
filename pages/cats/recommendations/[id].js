import FoodCard from "@/components/FoodCard/FoodCard";
import Tabs from "@/components/Tabs/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function RecommendPage({
  catFoods,
  catList,
  forbiddenFoodForCat,
  cat,
  food,
}) {
  const router = useRouter();
  const { id } = router.query;

  // saving the good food
  function filteredGoodFoodBasedOnHealthIssues(catFoods, cat) {
    return catFoods.filter((food) => !forbiddenFoodForCat(food, cat));
  }

  // saving the bad food
  function filteredBadFoodBasedOnHealthIssues(catFoods, cat) {
    return catFoods.filter((food) => forbiddenFoodForCat(food, cat));
  }

  console.log("recommend cat", cat);

  const getRecommendedFood = filteredGoodFoodBasedOnHealthIssues(catFoods, cat);
  const getNotRecommendedFood = filteredBadFoodBasedOnHealthIssues(
    catFoods,
    cat
  );
  return (
    <>
      <StyledHead>{cat ? cat.name : "Loading..."}</StyledHead>
      <Tabs cat={cat} id={id} />
      <StyledGoodFood>Recommended Food</StyledGoodFood>
      <StyledWrapper>
        <div>
          <StyledList>
            {getRecommendedFood.map((food) => (
              <StyledFoodItem key={food.id}>
                <FoodCard food={food} />
              </StyledFoodItem>
            ))}
          </StyledList>
        </div>

        <StyledBadFood>NOT Recommended Food</StyledBadFood>
        <div>
          <StyledList>
            {getNotRecommendedFood.map((food) => (
              <StyledFoodItem key={food.id}>
                <FoodCard food={food} />
              </StyledFoodItem>
            ))}
          </StyledList>
        </div>
      </StyledWrapper>
    </>
  );
}
const StyledFoodItem = styled.li`
  max-width: 95%;
  padding: 0.1rem 0.8rem;
  box-shadow: 0px 1px 5px -2px #7f8487;
  border-radius: 10px/20px;
  font-size: 0.8em;
  background-color: white;
  list-style: none;
  margin-bottom: 1em;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
`;

const StyledList = styled.ul`
  list-style: none;
  padding-left: 0;
`;

const StyledHead = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;

const StyledWrapper = styled.div`
  max-width: 85%;
  margin: 0 1em;
  list-style-type: none;
`;

const StyledGoodFood = styled.h2`
  color: #a2ff86;
  text-shadow: 2px 2px 8px black;
  margin-left: 5%;
`;

const StyledBadFood = styled.h2`
  color: #ff5d6e;
  text-shadow: 2px 2px 4px black;
  margin-left: 2.4%;
`;
