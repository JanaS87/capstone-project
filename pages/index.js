import CatList from "@/components/CatList/CatList";
import NewCatForm from "@/components/NewCatForm/NewCatForm";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ handleAddCat }) {
  return (
    <>
      <StyledHeading>Your Cats</StyledHeading>
      <Link href={"/newcat"}>Add New Cat</Link>
      <CatList />
      <NewCatForm onAddCat={handleAddCat} />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
`;
