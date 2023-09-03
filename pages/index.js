import CatList from "@/components/CatList/CatList";
import Navigation from "@/components/Navigation/Navigation";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ catList }) {
  return (
    <>
      <StyledContainer>
        <StyledHeading>Your Cats</StyledHeading>
        <StyledLink href={"/addcat"}>Add New Cat</StyledLink>
        <CatList catList={catList} />
      </StyledContainer>
      <Navigation />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
  text-align: center;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;

const StyledLink = styled(Link)`
  max-width: 37%;
  background: transparent;
  backdrop-filter: blur(2px);
  color: #f0caa3;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f0caa3;
  border-radius: 3px;
  text-decoration: none;
`;

const StyledContainer = styled.div`
  padding-bottom: 60px;
`;
