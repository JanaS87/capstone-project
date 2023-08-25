import Link from "next/link";
import { styled } from "styled-components";

export default function FoodCard({ food }) {
  return (
    <Link href={`/foods/${food.id}`}>
      <h3>
        {food.brand} - {food.variety}
      </h3>
    </Link>
  );
}
