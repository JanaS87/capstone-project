import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";

// installed the fontawesome- react package
// for my navigation icons.

export default function Navigation() {
  const router = useRouter();
  const isCatOverview = router.pathname === "/";
  const isFoodSearch = router.pathname === "/foodsearch";

  return (
    <>
      <StyledContainer>
        <StyledLink href={"/"}>
          <StyledNavItem>
            <FontAwesomeIcon
              icon={faCat}
              color={
                isCatOverview
                  ? "var(--navbar-icon-active)"
                  : "var(--navbar-icon-inactive)"
              }
            />
            <StyledNavText>Overview</StyledNavText>
          </StyledNavItem>
        </StyledLink>

        <StyledLink href={"/foodsearch"}>
          <StyledNavItem>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              color={
                isFoodSearch
                  ? "var(--navbar-icon-active)"
                  : "var(--navbar-icon-inactive)"
              }
            />
            <StyledNavText>Food Search</StyledNavText>
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
  background-color: #413f42;
  opacity: 0.9;
  height: 60px;
`;

const StyledLink = styled(Link)`
  font-size: 1.3em;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 4px 40px;

  svg {
    font-size: 1.2em;
  }
  svg.faCat {
    color: var(--navbar-icon-inactive);
  }
  svg.faCat.active {
    color: var(--navbar-icon-active);
  }
  svg.faMagnifyingGlass {
    color: var(--navbar-icon-inactive);
  }
  svg.faMagnifyGlass.active {
    color: var(--navbar-icon-active);
  }
`;

const StyledNavText = styled.span`
  font-size: 0.5em;
`;
