import { useRouter } from "next/router";
import Link from "next/link";
import { styled } from "styled-components";
import OrangePaw from "../Paws/OrangePaw";
import BlackPaw from "../Paws/Blackpaw";

export default function Tabs({ id }) {
  const router = useRouter();
  const isCatDetailPage = router.asPath === `/cats/${id}`;
  const isRecommendPage = router.asPath === `/cats/recommendations/${id}`;

  console.log("id:", id);
  console.log("router.asPath:", router.asPath);
  console.log("router.query.id:", router.query.id);
  console.log("router.pathname:", router.pathname);

  console.log("isCatDetailPage:", isCatDetailPage);
  console.log("isRecommendPage:", isRecommendPage);

  return (
    <>
      <StyledContainer>
        <StyledLink href={`/cats/${id}`} passHref>
          <StyledNavItem>
            {isCatDetailPage ? <OrangePaw /> : <BlackPaw />}
            <StyledNavText>Cat</StyledNavText>
          </StyledNavItem>
        </StyledLink>

        <StyledLink href={`/cats/recommendations/${id}`} passHref>
          <StyledNavItem>
            {isRecommendPage ? <OrangePaw /> : <BlackPaw />}
            <StyledNavText>Recommend</StyledNavText>
          </StyledNavItem>
        </StyledLink>
      </StyledContainer>
    </>
  );
}

const StyledNavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 15px;

  svg {
    font-size: 2em;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 5rem;
  margin-bottom: 5%;
`;

const StyledNavText = styled.span`
  font-size: 0.8em;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;
