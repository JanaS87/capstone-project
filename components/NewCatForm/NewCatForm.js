import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { catfoods } from "@/data/catfooddata";
import { uid } from "uid";
import Checkbox from "../Checkbox/Checkbox";

export default function NewCatForm({ onAddCat }) {
  const [cat, setCat] = useState({
    id: "",
    name: "",
    age: "",
    health: {
      allergies: [],
      diseases: [],
      intolerances: [],
    },
    food: {
      likes: [],
      dislikes: [],
    },
  });

  const allergies = [
    "Eggs",
    "Pollen",
    "Dust Mites",
    "Mold Spores",
    "Flea Bite",
  ];

  const diseases = [
    { id: "1", name: "Feline Rhinitis" },
    { id: "2", name: "Feline Epidemic" },
    { id: "3", name: "Ectoparasites (flea, ticks, ear mites)" },
    { id: "4", name: "Endoparasites (worms" },
    { id: "5", name: "CNI (chronic renal insufficiency" },
    { id: "6", name: "Diabetes" },
  ];

  const intolerances = [
    { id: "1", name: "Grains" },
    { id: "2", name: "Lactose" },
    { id: "3", name: "Artifical Additives" },
    { id: "4", name: "Beef" },
  ];

  const [selectedGoodFood, setSelectedGoodFood] = useState({});
  const [selectedBadFood, setSelectedBadFood] = useState({});

  // // any cat food is selected
  function handleGoodFoodChange(selectedOption) {
    setSelectedGoodFood(selectedOption);
  }

  function handleBadFoodChange(selectedOption) {
    setSelectedBadFood(selectedOption);
  }

  // state to save the chosen food to show it below the drop down
  const [addedGoodFood, setAddedGoodFood] = useState([]);
  const [addedBadFood, setAddedBadFood] = useState([]);

  function handleAddGoodFood() {
    const foodToAdd = catfoods.find((food) => food.id === selectedGoodFood);

    if (foodToAdd) {
      setAddedGoodFood([...addedGoodFood, foodToAdd]);
    }
    setSelectedGoodFood({});
  }

  function handleAddBadFood() {
    const foodToAdd = catfoods.find((food) => food.id === selectedBadFood);

    if (foodToAdd) {
      setAddedBadFood([...addedBadFood, foodToAdd]);
    }
    //setSelectedBadFood({});
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

    const catAllergies = allergies.map((allergy) => {
      if (data[allergy] === "on") return allergy;
    });

    const catDiseases = diseases.map(
      (disease) => data[`disease-${disease.id}`] === "on"
    );

    const catIntolerances = intolerances.map(
      (intolerance) => data[`intolerance-${intolerance.id}`] === "on"
    );

    // create new cat object at the end of the array
    const newCat = {
      ...cat,
      id: newId,
      name: data.name,
      age: data.age,
      health: {
        allergies: catAllergies,
        diseases: catDiseases,
        intolerances: catIntolerances,
      },
      food: {
        likes: addedGoodFood,
        dislikes: addedBadFood,
      },
    };

    console.log("onAddCat type:", typeof onAddCat);

    // add new cat to the list
    onAddCat(newCat);

    console.log(data);

    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledInputGroup>
        <label htmlFor="name">Name: </label>
        <input
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
            {allergies.map((allergy) => (
              <input type="checkbox" key={allergy} name={allergy} />
            ))}
          </div>
          <div>
            <p>Diseases: </p>
            {diseases.map((disease) => (
              <input
                type="checkbox"
                key={`disease-${disease.id}`}
                name={`disease-${disease.id}`}
              />
            ))}
          </div>
          <div>
            <p>Intolerances: </p>
            {intolerances.map((intolerance) => (
              <input
                type="checkbox"
                key={`intolerance-${intolerance.id}`}
                name={`intolerance-${intolerance.id}`}
              />
            ))}
          </div>
        </fieldset>
      </div>

      <label htmlFor="goodFood-select">Good Acceptance: </label>
      <StyledInputGroup>
        <select
          id="goodFood-select"
          name="goodFood-select"
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
          name="badFood-select"
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
    font-size: 12%;
    text-align: center;
    margin: 0 auto;
    background-color: #1d5d9b;
  }

  label,
  input {
    background-color: white;
  }
`;
