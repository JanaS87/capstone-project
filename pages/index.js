import CatList from "@/components/CatList/CatList";
import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ catList }) {
  return (
    <>
      <StyledHeading>Your Cats</StyledHeading>
      <StyledLink href={"/addcat"}>Add New Cat</StyledLink>
      <CatList catList={catList} />
      <Navigation />
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
