import FoodCard from "@/components/FoodCard/FoodCard";
import Link from "next/link";
import { styled } from "styled-components";

export default function RecommendPage({
  catFoods,
  catList,
  forbiddenFoodForCat,
  cat,
  food,
}) {
  // saving the good food
  function filteredGoodFoodBasedOnHealthIssues(catFoods, cat) {
    return catFoods.filter((food) => !forbiddenFoodForCat(food, cat));
  }

  const getRecommendedFood = filteredGoodFoodBasedOnHealthIssues(catFoods, cat);
  return (
    <>
      <Link href={`/catdetailpage/${id}`}>Cat Details</Link>
      <Link href={`/cats/recommendations/${id}`}>Recommended Food</Link>
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

const StyledList = styled.ul`
  list-style: none;
`;
