import FoodList from "@/components/CatFoodList/CatFoodList";
import CatList from "@/components/CatList/CatList";
import { catfoods } from "@/data/catfooddata";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({
  catList,
  searchTerm,
  handleSearchTermChange,
}) {
  return (
    <>
      <StyledHeading>Your Cats</StyledHeading>
      <StyledLink href={"/addcat"}>Add New Cat</StyledLink>
      <CatList catList={catList} />
      <StyledHeadingTwo>Food Search</StyledHeadingTwo>
      <StyledSearchField
        type="text"
        name="foodsearch"
        maxLength={20}
        placeholder="Search Cat Food..."
        defaultValue={searchTerm}
        onChange={handleSearchTermChange}
      />
      <FoodList catfoods={catfoods} searchTerm={searchTerm} />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
`;

const StyledLink = styled(Link)`
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;

const StyledHeadingTwo = styled.h2`
  margin-left: 5%;
`;

const StyledSearchField = styled.input`
  max-width: 65%;
`;
