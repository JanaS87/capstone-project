import FoodCard from "@/components/FoodCard/FoodCard";
import { styled } from "styled-components";

export default function RecommendPage({ forbiddenFoodForCat, food }) {
  // saving the good food
  function filteredGoodFoodBasedOnHealthIssues(catFoods, cat) {
    return catFoods.filter((food) => !forbiddenFoodForCat(food, cat));
  }

  // saving the bad food
  function filteredBadFoodBasedOnHealthIssues(catFoods, cat) {
    return catFoods.filter((food) => forbiddenFoodForCat(food, cat));
  }

  const getRecommendedFood = filteredGoodFoodBasedOnHealthIssues(catFoods, cat);

  const getNotRecommendedFood = filteredBadFoodBasedOnHealthIssues(
    catFoods,
    cat
  );

  return (
    <>
      <h2>Recommended Food</h2>
      <div>
        <StyledList>
          {getRecommendedFood.map((food) => (
            <StyledFoodItem key={food.id}>
              <FoodCard food={food} />
            </StyledFoodItem>
          ))}
        </StyledList>
      </div>

      <h2>NOT Recommended Food</h2>
      <div>
        <StyledList>
          {getNotRecommendedFood.map((food) => (
            <StyledFoodItem key={food.id}>
              <FoodCard food={food} />
            </StyledFoodItem>
          ))}
        </StyledList>
      </div>
    </>
  );
}

const StyledFoodItem = styled.li`
  max-width: 50%;
  padding: 0.2rem 0.6rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 0.8em;
  background-color: white;
  list-style: none;
`;

const StyledList = styled.li`
  list-style: none;
`;
