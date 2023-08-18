import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";

export default function CatDetailPage({ catList }) {
  const router = useRouter();
  const { id } = router.query;

  // if the id is not available
  if (!id) return <p>Loading</p>;

  // find the cat with the right id
  const cat = catList.find((cat) => cat.id.toString() === id);

  // if cat is not found
  if (!cat) return <p>Cat not found</p>;

  return (
    <>
      <StyledHead>{cat.name}</StyledHead>
      <StyledWrapper>
        <StyledSection>
          <p>
            <strong>Age:</strong> <span>{cat.age}</span>
          </p>
          <h4>Allergies, Diseases, Intolerances:</h4>
          <div>
            <p>Allergies: {cat.allergies}</p>
            <p>Diseases: {cat.diseases}</p>
            <p>Intolerances: {cat.intolerances}</p>
          </div>
          <h4>Good Acceptance: </h4>
          <p>[{cat.goodAcceptance}]</p>
          <h4>Bad Acceptance: </h4>
          <p>[{cat.badAcceptance}]</p>
        </StyledSection>
      </StyledWrapper>
      <Link href={"/"}>Back</Link>
    </>
  );
}

const StyledHead = styled.h1`
  margin-left: 5%;
`;

const StyledWrapper = styled.div`
  max-width: 65%;
  list-style-type: none;
  margin-bottom: 1.3rem;

  span {
    margin-left: 0.5rem;
    background-color: white;
  }

  strong,
  div {
    background-color: white;
  }
`;

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.3rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1.3em;
  background-color: white;

  h4,
  p {
    background-color: white;
    margin: 0.8rem 0.4rem;
  }
`;
