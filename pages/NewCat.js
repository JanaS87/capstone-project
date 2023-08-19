import React, { useState } from "react";
import NewCatForm from "../components/NewCatForm/NewCatForm";
import { cats } from "@/data/catdata";
import Link from "next/link";
import { styled } from "styled-components";

export default function NewCatPage({ handleAddCat }) {
  return (
    <>
      <h1>Add a new cat</h1>
      <NewCatForm onAddCat={handleAddCat} />
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
`;
