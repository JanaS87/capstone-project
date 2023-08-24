import FoodList from "@/components/CatFoodList/CatFoodList";
import styled from "styled-components";
import { catfoods } from "@/data/catfooddata";
import Navigation from "@/components/Navigation/Navigation";

export default function CatFoodSearch({ searchTerm, handleSearchTermChange }) {
  return (
    <>
      <StyledHeading>Food Search</StyledHeading>
      <StyledSearchField
        type="text"
        name="foodsearch"
        maxLength={20}
        placeholder="Search Cat Food..."
        defaultValue={searchTerm}
        onChange={handleSearchTermChange}
      />
      <FoodList catfoods={catfoods} searchTerm={searchTerm} />
      <Navigation />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
`;

const StyledSearchField = styled.input`
  max-width: 65%;
`;
