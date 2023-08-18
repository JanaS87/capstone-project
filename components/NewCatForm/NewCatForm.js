import React, { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import Button from "../Button/Button";
import { catfoods } from "@/data/catfooddata";
import { uid } from "uid";

export default function NewCatForm({ onAddCat }) {
  // const [catList, setCatList] = useState(cats);
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

  // mappin the food for react - select drop down
  const catFoodOptions = catfoods.map((food) => ({
    value: food.id,
    label: food.brand + ` - ` + food.variety,
  }));

  const [selectedGoodFood, setSelectedGoodFood] = useState({});
  const [selectedBadFood, setSelectedBadFood] = useState({});
  console.log("selektiertes gutes Futter", selectedGoodFood);
  console.log("selektiertes schlechtes Futter", selectedBadFood);

  // any cat food is selected
  function handleGoodFoodChange(selectedOption) {
    setSelectedGoodFood(selectedOption);
  }

  function handleBadFoodChange(selectedOption) {
    setSelectedBadFood(selectedOption);
  }

  // state to save the chosen food to show it below the drop down
  const [addedGoodFood, setAddedGoodFood] = useState([]);
  const [addedBadFood, setAddedBadFood] = useState([]);
  console.log("Gutes Futter", addedGoodFood);
  console.log("schlechtes Futter", addedBadFood);
  // add the chosen food to the list, if it´s not already in it.
  // checking this with some()
  function handleAddGoodFood(event) {
    event.preventDefault();
    console.log("handle good food triggered");
    if (
      selectedGoodFood &&
      !addedGoodFood.some((food) => food.value === selectedGoodFood.value)
    ) {
      setAddedGoodFood([...addedGoodFood, selectedGoodFood]);
      console.log("added good food to the list");
    }
  }

  function handleAddBadFood(event) {
    event.preventDefault();
    console.log("handle bad food triggered");
    if (
      selectedBadFood &&
      !addedBadFood.some((food) => food.value === selectedBadFood.value)
    ) {
      setAddedBadFood([...addedBadFood, selectedBadFood]);
      console.log("added bad food to the list");
    }
  }

  // updates the cat- state object when an input field changes
  function handleChange(event) {
    setCat({ ...cat, [event.target.name]: event.target.value });
  }
  // you can only enter two numbers
  function handleAgeChange(event) {
    const ageValue = event.target.value;
    if (ageValue.length > 2) {
      setCat({ ...cat, age: ageValue.slice(0, 2) });
    } else {
      setCat({ ...cat, age: ageValue });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    // generate new ID
    const newId = uid();

    // create new cat object at the end of the array
    const newCat = {
      ...cat,
      id: newId,
      goodAcceptance: addedGoodFood,
      badAcceptance: addedBadFood,
    };

    console.log();
    // setCatList([...catList, newCat]);

    // add new cat to the list
    onAddCat(newCat);

    setCat({
      id: "",
      name: "",
      age: "",
      allergies: "",
      diseases: "",
      intolerances: "",
      goodAcceptance: "",
      badAcceptance: "",
    });
    setAddedGoodFood([]);
    setAddedBadFood([]);

    // event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <label htmlFor="name">Name: </label>
        <TextInput
          type="text"
          name="name"
          value={cat.name}
          maxLength={8}
          onChange={handleChange}
        />

        <label htmlFor="age">Age: </label>
        <AgeInput
          type="number"
          name="age"
          value={cat.age}
          className="ageInput"
          onChange={handleAgeChange}
        />
      </StyledInputGroup>

      <label htmlFor="allergies">Allergies: </label>
      <input
        type="text"
        name="allergies"
        value={cat.allergies}
        maxLength={50}
        onChange={handleChange}
      />

      <label htmlFor="diseases">Diseases: </label>
      <input
        type="text"
        name="diseases"
        value={cat.diseases}
        maxLength={50}
        onChange={handleChange}
      />

      <label htmlFor="intolerances">Intolerances: </label>
      <input
        type="text"
        name="intolerances"
        value={cat.intolerances}
        maxLength={50}
        onChange={handleChange}
      />

      <label htmlFor="goodAcceptance">Good Acceptance: </label>
      <Select
        options={catFoodOptions}
        onChange={handleGoodFoodChange}
        isSearchable={true}
        value={selectedGoodFood}
        placeholder="choose food..."
      />
      <Button type="button" onClick={handleAddGoodFood}>
        Add
      </Button>
      <div>
        {addedGoodFood.map((food) => (
          <div key={food.value}>{food.label}</div>
        ))}
      </div>

      <label htmlFor="badAcceptance">Bad Acceptance: </label>
      <Select
        options={catFoodOptions}
        onChange={handleBadFoodChange}
        isSearchable={true}
        value={selectedBadFood}
        placeholder="choose food..."
      />
      <Button type="button" onClick={handleAddBadFood}>
        Add
      </Button>
      <div>
        {addedBadFood.map((food) => (
          <div key={food.value}>{food.label}</div>
        ))}
      </div>
      <Button type="submit">Save</Button>
    </StyledForm>
  );
}

const AgeInput = styled.input`
  width: 50px;
`;

const TextInput = styled.input`
  width: 75px;
`;

const StyledInputGroup = styled.div`
  display: flex;
  background-color: white;
  gap: 0.8rem;
`;

const StyledForm = styled.form`
  max-width: 85%;
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
    margin: 0 auto;
    background-color: #1d5d9b;
  }

  label,
  input {
    background-color: white;
  }
`;
