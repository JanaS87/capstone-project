import React, { useState } from "react";
import Select from "react-select";
import { cats } from "@/data/catdata";
import styled from "styled-components";
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
    <StyledWrapper>
      <StyledForm onSubmit={handleSubmit}>
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
        <Button type="submit">Save</Button>
      </StyledForm>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div``;

const StyledForm = styled.form`
  max-width: 65%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1.3em;
  background-color: white;
  gap: 1rem;

  Button {
    max-width: 30%;
    text-align: center;
    background-color: #1d5d9b;
  }

  label,
  input {
    background-color: white;
  }
`;
