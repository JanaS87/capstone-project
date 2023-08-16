import Link from "next/link";
import styled from "styled-components";

export default function CatCard({ cat }) {
  return (
    <StyledLink href={`/cats/${cat.id}`}>
      <h3>{cat.name}</h3>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  cursor: pointer;
`;
