import Link from "next/link";
import { styled } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function Navigation() {
  return (
    <>
      <StyledContainer>
        <Link href={"/"}>
          <FontAwesomeIcon icon={faCat} /> Overview
        </Link>
        ;
        <Link href={"/foodsearch"}>
          <FontAwesomeIcon icon={faMagnifyingGlass} /> Food Search
        </Link>
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div``;
