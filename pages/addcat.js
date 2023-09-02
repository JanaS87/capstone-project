import React, { useState } from "react";
import NewCatForm from "../components/NewCatForm/NewCatForm";
import { cats } from "@/data/catdata";
import Link from "next/link";
import { styled } from "styled-components";

export default function NewCatPage({ handleAddCat, forbiddenFoodForCat, cat }) {
  return (
    <>
      <StyledHeading>Add a new cat</StyledHeading>
      <NewCatForm onAddCat={handleAddCat} />
      <StyledLink href={"/"}>Back</StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  max-width: 20%;
  background: transparent;
  backdrop-filter: blur(2px);
  color: #f0caa3;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #f0caa3;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
`;

const StyledHeading = styled.h1`
  margin-left: 5%;
  text-align: center;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
`;
