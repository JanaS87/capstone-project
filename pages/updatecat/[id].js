import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import UpdateCatForm from "../../components/UpdateCatForm/UpdateCatForm.js";

export default function UpdateCat({
  catList,
  catFoods,
  handleUpdateCat,
  handleDeleteCat,
}) {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return <p>Loading</p>;

  // find the cat with the right id
  const cat = catList.find((cat) => cat.id.toString() === id);

  if (!cat) {
    return (
      <>
        <p>Cat not found</p>
        <StyledLink href={"/"}>Back</StyledLink>
      </>
    );
  }

  return (
    <>
      <div>
        <StyledHeading1>{cat.name}</StyledHeading1>
        <StyledHeading2>What would you like to change?</StyledHeading2>
      </div>
      <UpdateCatForm
        onEditCat={handleUpdateCat}
        onDeleteCat={handleDeleteCat}
        cat={cat}
      />
      <StyledLink href={`/cats/${cat.id}`}>Back</StyledLink>
    </>
  );
}

const StyledHeading1 = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;

const StyledHeading2 = styled.h2`
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;

const StyledLink = styled(Link)`
  max-width: 25%;
  background: transparent;
  backdrop-filter: blur(2px);
  color: #f0caa3;
  font-size: 1.3em;
  padding: 0.25em 1em;
  border: 2px solid #f0caa3;
  border-radius: 3px;
  text-decoration: none;
  margin-top: 3%;
  margin-left: 3%;
  text-align: center;

  &:hover {
    background-color: #f0caa3;
    color: black;
  }
`;
