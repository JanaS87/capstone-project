import React, { useState } from "react";
import NewCatForm from "../components/NewCatForm/NewCatForm";
import Button from "@/components/Button/Button";

export default function NewCat() {
  const [catList, setCatList] = useState(cats);

  function handleAddCat(newCat) {
    // update catList with new cat
    setCatList([...catList, newCat]);
  }

  return (
    <>
      <h1>Add a new cat</h1>
      <NewCatForm onAddCat={handleAddCat} />
      <Button>Back</Button>
    </>
  );
}
