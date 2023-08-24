import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <>
      <StyledContainer>
        <StyledLink href={"/"}>
          <StyledNavItem>
            <FontAwesomeIcon icon={faCat} /> Overview
          </StyledNavItem>
        </StyledLink>

        <StyledLink href={"/foodsearch"}>
          <StyledNavItem>
            <FontAwesomeIcon icon={faMagnifyingGlass} /> Food Search
          </StyledNavItem>
        </StyledLink>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  bottom: 0;
  z-index: 9999;
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.1);
  font-size: 1.5em;
`;

const StyledLink = styled(Link)`
  font-size: 0.8em;
  cursor: pointer;
  text-decoration: none;
`;

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 15px; // Space out the items if needed

  svg {
    font-size: 1.2em;
  }

  div {
    margin-top: 10px;
  }
`;
