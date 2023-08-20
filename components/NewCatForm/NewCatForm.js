import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { catfoods } from "@/data/catfooddata";
import { uid } from "uid";
import Checkbox from "../Checkbox/Checkbox";

export default function NewCatForm({ onAddCat }) {
  // const [cat, setCat] = useState({
  //   id: "",
  //   name: "",
  //   age: "",
  //   health: {
  //     allergies: [],
  //     diseases: [],
  //     intolerances: [],
  //   },
  //   food: {
  //     likes: [],
  //     dislikes: [],
  //   },
  // });

  // const [selectedAllergies, setSelectedAllergies] = useState({});
  // const [selectedDiseases, setSelectedDiseases] = useState({});
  // const [selectedIntolerances, setSelectedIntolerancesund] = useState({});

  // const [selectedGoodFood, setSelectedGoodFood] = useState({});
  // const [selectedBadFood, setSelectedBadFood] = useState({});

  // any cat food is selected
  function handleGoodFoodChange(selectedOption) {
    setSelectedGoodFood(selectedOption);
  }

  function handleBadFoodChange(selectedOption) {
    setSelectedBadFood(selectedOption);
  }

  // state to save the chosen food to show it below the drop down
  // const [addedGoodFood, setAddedGoodFood] = useState([]);
  // const [addedBadFood, setAddedBadFood] = useState([]);

  function handleAllergyChange() {}

  // add the chosen food to the list, if it´s not already in it.
  // checking this with some()
  function handleAddGoodFood(event) {
    event.preventDefault();

    const goodFoodSelect = catfoods.find(
      (food) => food.id === selectedGoodFood
    );

    if (
      goodFoodSelect &&
      !addedGoodFood.some((food) => food.id === goodFoodSelect.id)
    ) {
      setAddedGoodFood([...addedGoodFood, goodFoodSelect]);
      console.log(goodFoodSelect);
    }
  }

  function handleAddBadFood(event) {
    event.preventDefault();

    const badFoodSelect = catfoods.find((food) => food.id === selectedBadFood);

    if (
      badFoodSelect &&
      !addedBadFood.some((food) => food.value === badFoodSelect.id)
    ) {
      setAddedBadFood([...addedBadFood, badFoodSelect]);
      console.log(badFoodSelect);
    }
  }

  // updates the cat- state object when an input field changes
  function handleChange(event) {
    setCat({ ...cat, [event.target.name]: event.target.value || "" });
  }
  // you can only enter two numbers (internet)
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

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // generate new ID
    const newId = uid();

    // create new cat object at the end of the array
    const newCat = {
      ...cat,
      id: newId,
      health: {
        allergies: addedAllergies,
        diseases: addedDiseases,
        intolerances: addedIntolerances,
      },
      food: {
        likes: addedGoodFood,
        dislikes: addedBadFood,
      },
    };

    console.log("onAddCat type:", typeof onAddCat);

    // add new cat to the list
    onAddCat(newCat);

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <label htmlFor="name">Name: </label>
        <TextInput
          type="text"
          name="name"
          id="name"
          aria-describedby="name-info"
          defaultValue={cat.name}
          maxLength={8}
          required
          onChange={handleChange}
        />

        <label htmlFor="age">Age: </label>
        <AgeInput
          type="number"
          name="age"
          id="age"
          aria-describedby="age-info"
          defaultValue={cat.age}
          className="ageInput"
          onChange={handleAgeChange}
          required
        />
      </StyledInputGroup>
      <div>
        <fieldset>
          <legend>Health Information</legend>
          <div>
            <p>Allergies: </p>
            <Checkbox label={"Eggs"} />
            <Checkbox label={"Pollen"} />
            <Checkbox label={"Dust Mites"} />
            <Checkbox label={"Mold Spores"} />
            <Checkbox label={"Flea Bite"} />
          </div>
          <div>
            <p>Diseases: </p>
            <Checkbox label={"Feline Rhinitis"} />
            <Checkbox label={"Feline Epidemic"} />
            <Checkbox label={"Ectoparasites (flea, ticks, ear mites)"} />
            <Checkbox label={"Endoparasites (worms)"} />
            <Checkbox label={"CNI (chronic renal insufficiency"} />
            <Checkbox label={"Diabetes"} />
          </div>
          <div>
            <p>Intolerances: </p>
            <Checkbox label={"Grains"} />
            <Checkbox label={"Lactose"} />
            <Checkbox label={"Artifical Additives"} />
            <Checkbox label={"Beef"} />
          </div>
        </fieldset>
      </div>

      {/*
      <label htmlFor="allergies">Allergies: </label>
      <input
        type="text"
        name="allergies"
        id="allergies"
        aria-describedby="allergies-info"
        defaultValue={cat.allergies}
        maxLength={50}
        onChange={handleChange}
      />
      <label htmlFor="diseases">Diseases: </label>
      <input
        type="text"
        name="diseases"
        id="diseases"
        aria-describedby="diseases-info"
        defaultValue={cat.diseases}
        maxLength={50}
        onChange={handleChange}
      />
      <label htmlFor="intolerances">Intolerances: </label>
      <input
        type="text"
        name="intolerances"
        id="intolerances"
        aria-describedby="intolerances-info"
        defaultValue={cat.intolerances}
        maxLength={50}
        onChange={handleChange}
      />
  */}

      <label htmlFor="goodFood-select">Good Acceptance: </label>
      <StyledInputGroup>
        <select
          id="goodFood-select"
          onChange={(event) => handleGoodFoodChange(event.target.value)}
          defaultValue={selectedGoodFood}
        >
          <option value={""}>-- Please choose a food --</option>
          {catfoods.map((food) => (
            <option key={food.id} value={food.id}>
              {food.brand} - {food.variety}
            </option>
          ))}
        </select>
        <Button type="button" onClick={handleAddGoodFood}>
          Add
        </Button>
      </StyledInputGroup>
      <div>
        {addedGoodFood.map((food) => (
          <div key={food.id}>
            {food.brand} - {food.variety}
          </div>
        ))}
      </div>

      <label htmlFor="badFood-select">Bad Acceptance: </label>
      <StyledInputGroup>
        <select
          id="badFood-select"
          onChange={(event) => handleBadFoodChange(event.target.value)}
          defaultValue={selectedBadFood}
        >
          <option value={""}>-- Please choose a food --</option>
          {catfoods.map((food) => (
            <option key={food.id} value={food.id}>
              {food.brand} - {food.variety}
            </option>
          ))}
        </select>
        <Button type="button" onClick={handleAddBadFood}>
          Add
        </Button>
      </StyledInputGroup>
      <div>
        {addedBadFood.map((food) => (
          <div key={food.id}>
            {food.brand} - {food.variety}
          </div>
        ))}
      </div>
      <Button type="submit">Save</Button>
    </StyledForm>
  );
}

// Styling Section
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
  max-width: 45%;
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
    font-size: 1%.2;
    text-align: center;
    margin: 0 auto;
    background-color: #1d5d9b;
  }

  label,
  input {
    background-color: white;
  }
`;
