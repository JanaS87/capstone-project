import Link from "next/link";
import { styled } from "styled-components";

export default function Navigation() {
  return (
    <>
      <StyledContainer>
        <Link href={"/"} aria-describedby="overview-link"></Link>;
      </StyledContainer>
    </>
  );
}

const StyledContainer = styled.div``;
