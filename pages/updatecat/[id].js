import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import UpdateCatForm from "../../components/UpdateCatForm/UpdateCatForm.js";
import NewCatForm from "@/components/NewCatForm/NewCatForm.js";

export default function UpdateCat({ catList, catFoods }) {
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
        <h1>{cat.name}</h1>
        <h2>What would you like to change?</h2>
      </div>
      <NewCatForm />
      <StyledLink href={`/cats/${cat.id}`}>Back</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  max-width: 20%;
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;
