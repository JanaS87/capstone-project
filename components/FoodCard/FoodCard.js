import { styled } from "styled-components";

export default function FoodCard({ food }) {
  return (
    <h3>
      {food.brand} - {food.variety}
    </h3>
  );
}
