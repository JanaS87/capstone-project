import FoodCard from "@/components/FoodCard/FoodCard";
import Tabs from "@/components/Tabs/Tabs";
import Link from "next/link";
import { useRouter } from "next/router";
import { styled } from "styled-components";

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
      <StyledHead>{cat.name}</StyledHead>
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
  max-width: 50%;
  padding: 0.2rem 0.5rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 0.8em;
  background-color: white;
  list-style: none;
`;

const StyledList = styled.ul`
  list-style: none;
`;

const StyledHead = styled.h1`
  margin-left: 5%;
`;

const StyledWrapper = styled.div`
  max-width: 85%;
  margin: 0 1em;
  list-style-type: none;
  margin-bottom: 1.3rem;
`;

const StyledGoodFood = styled.h2`
  color: green;
  margin-left: 5%;
`;

const StyledBadFood = styled.h2`
  color: red;
  margin-left: 5%;
`;
