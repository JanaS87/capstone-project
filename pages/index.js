import CatList from "@/components/CatList/CatList";
import Link from "next/link";
import { styled } from "styled-components";

export default function HomePage({ catList }) {
  return (
    <>
      <StyledHeading>Your Cats</StyledHeading>
      <Link href={"/newcat"}>Add New Cat</Link>
      <CatList catList={catList} />
    </>
  );
}

const StyledHeading = styled.h1`
  margin-left: 5%;
`;
