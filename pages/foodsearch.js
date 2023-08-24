import FoodList from "@/components/CatFoodList/CatFoodList";
import styled from "styled-components";
import { catfoods } from "@/data/catfooddata";
import Navigation from "@/components/Navigation/Navigation";

export default function CatFoodSearch({ searchTerm, handleSearchTermChange }) {
  return (
    <>
      <StyledHeading>Food Search</StyledHeading>
      <StyledWrapper>
        <StyledSearchField
          type="text"
          name="foodsearch"
          maxLength={20}
          placeholder="Search Cat Food..."
          defaultValue={searchTerm}
          onChange={handleSearchTermChange}
        />
      </StyledWrapper>
      <FoodList catfoods={catfoods} searchTerm={searchTerm} />
      <Navigation />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
`;

const StyledWrapper = styled.div`
  padding-left: 1rem;
`;

const StyledSearchField = styled.input`
  max-width: 65%;
  padding: 0.2rem 0.6rem;
`;
