import React, { useState } from "react";
import NewCatForm from "../components/NewCatForm/NewCatForm";
import { cats } from "@/data/catdata";
import Link from "next/link";

export default function NewCatPage({ handleAddCat }) {
  return (
    <>
      <h1>Add a new cat</h1>
      <NewCatForm onAddCat={handleAddCat} />
      <Link href={"/"}>Back</Link>
    </>
  );
}
