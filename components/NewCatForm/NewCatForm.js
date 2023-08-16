import React, { useState } from "react";
import Select from "react-select";
import { cats } from "@/data/catdata";
import { dblClick } from "@testing-library/user-event/dist/types/convenience";
import Button from "../Button/Button";

export default function NewCatForm({ onAddCat }) {
  const [catList, setCatList] = useState(cats);
  const [cat, setCat] = useState({
    id: "",
    name: "",
    age: "",
    allergies: "",
    diseases: "",
    intolerances: "",
    goodAcceptance: "",
    badAcceptance: "",
  });

  // updates the cat- state object when an input field changes
  function handleChange(event) {
    setCat({ ...cat, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // generate new ID
    const newId = String(catList.length + 1);

    // create new cat object at the end of the array
    const newCat = { ...cat, id: newId };

    // add new cat to the list
    onAddCat(newCat);

    setCatList([...catList, newCat]);

    event.target.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="inputName">Name: </label>
      <input
        type="text"
        name="inputName"
        value={cat.name}
        maxLength={50}
        onChange={handleChange}
      />

      <label htmlFor="inputAge">Age: </label>
      <input
        type="number"
        name="inputAge"
        value={cat.age}
        maxLength={30}
        onChange={handleChange}
      />

      <label htmlFor="inputAllergies">Allergies: </label>
      <input
        type="text"
        name="inputAllergies"
        value={cat.allergies}
        maxLength={50}
        onChange={handleChange}
      />

      <label htmlFor="inputDiseases">Diseases: </label>
      <input
        type="text"
        name="inputDiseases"
        value={cat.diseases}
        maxLength={50}
        onChange={handleChange}
      />

      <label htmlFor="inputIntolerances">Intolerances: </label>
      <input
        type="text"
        name="inputIntolerancesw"
        value={cat.intolerances}
        maxLength={50}
        onChange={handleChange}
      />
      <button type="submit">Save</button>
    </form>
  );
}
