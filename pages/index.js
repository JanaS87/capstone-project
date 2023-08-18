import CatList from "@/components/CatList/CatList";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage() {
  return (
    <>
      <StyledHeading>Your Cats</StyledHeading>
      <Link href={"/newcat"}>Add New Cat</Link>
      <CatList />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
`;
