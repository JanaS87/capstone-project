import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { catfoods } from "@/data/catfooddata";
import { uid } from "uid";
import { useRouter } from "next/router";

const allergies = ["Eggs", "Pollen", "Dust Mites", "Mold Spores", "Flea Bite"];

const diseases = [
  "Feline Rhinitis",
  "Feline Epidemic",
  "Ectoparasites (flea, ticks, ear mites)",
  "Endoparasites (worms",
  "CNI (chronic renal insufficiency",
  "Diabetes",
];

const intolerances = ["Grains", "Lactose", "Artifical Additives", "Beef"];

export default function UpdateCatForm({ onEditCat, handleDeleteCat, cat }) {
  const router = useRouter();
  // const [cat, setCat] = useState(
  //   currentCat || {
  //     id: "",
  //     name: "",
  //     age: "",
  //     health: {
  //       allergies: [],
  //       diseases: [],
  //       intolerances: [],
  //     },
  //     food: {
  //       likes: [],
  //       dislikes: [],
  //     },
  //   }
  // );

  // was kann davon weg und was brauche ich???

  const [selectedGoodFood, setSelectedGoodFood] = useState();
  const [selectedBadFood, setSelectedBadFood] = useState();

  // // any cat food is selected
  function handleGoodFoodChange(selectedOption) {
    setSelectedGoodFood(selectedOption);
    console.log(selectedGoodFood);
  }

  function handleBadFoodChange(selectedOption) {
    setSelectedBadFood(selectedOption);
  }

  // state to save the chosen food to show it below the drop down
  const [addedGoodFood, setAddedGoodFood] = useState([]);
  const [addedBadFood, setAddedBadFood] = useState([]);

  function handleAddGoodFood() {
    const foodToAdd = selectedGoodFood;

    if (addedBadFood.includes(foodToAdd)) {
      alert(`Food is already in "Bad Acceptance"`);
      return;
    }

    if (foodToAdd) {
      setAddedGoodFood([...addedGoodFood, foodToAdd]);
      console.log(foodToAdd);
    }
  }

  function handleAddBadFood() {
    const foodToAdd = selectedBadFood;

    if (addedGoodFood.includes(foodToAdd)) {
      alert(`Food is already in "Good Acceptance"`);
      return;
    }

    if (foodToAdd) {
      setAddedBadFood([...addedBadFood, foodToAdd]);
    }
  }

  // if the wrong food accidentally choosed

  function handleRemoveGoodFood(index) {
    const newAddedGoodFood = addedGoodFood.slice();
    newAddedGoodFood.splice(index, 1);
    setAddedGoodFood(newAddedGoodFood);
  }

  function handleRemoveBadFood(index) {
    const newAddedBadFood = addedBadFood.slice();
    newAddedBadFood.splice(index, 1);
    setAddedBadFood(newAddedBadFood);
  }

  // updates the cat- state object when an input field changes
  function handleChange(event) {
    setCat({ ...cat, [event.target.name]: event.target.value || "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    // // validate user entry (catname)
    // if (cat.name.includes(" ")) {
    //   alert("Whitespace is not allowed!");
    //   return;
    // }

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    // generate new ID
    // const newId = uid();

    const catAllergies = allergies.filter((allergy) => data[allergy] === "on");

    const catDiseases = diseases.filter((disease) => data[disease] === "on");

    const catIntolerances = intolerances.filter(
      (intolerance) => data[intolerance] === "on"
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

    console.log(newCat);

    event.target.reset();

    router.push("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <>
        <fieldset>
          <legend>Health Information</legend>
          <>
            <p>Allergies: </p>
            <StyledCheckBoxWrapper>
              {allergies.map((allergy, index) => (
                <StyledCheckBoxWrapper key={index}>
                  <input
                    type="checkbox"
                    name={allergy}
                    id={allergy}
                    checked={cat.health.allergies.includes(allergy)}
                  />
                  <label htmlFor={allergy}>{allergy}</label>
                </StyledCheckBoxWrapper>
              ))}
            </StyledCheckBoxWrapper>
          </>
          <div>
            <p>Diseases: </p>
            <StyledCheckBoxWrapper>
              {diseases.map((disease, index) => (
                <StyledCheckBoxWrapper key={index}>
                  <input
                    type="checkbox"
                    name={disease}
                    id={disease}
                    checked={cat.health.diseases.includes(disease)}
                  />
                  <label htmlFor={disease}>{disease}</label>
                </StyledCheckBoxWrapper>
              ))}
            </StyledCheckBoxWrapper>
          </div>
          <div>
            <p>Intolerances: </p>
            <StyledCheckBoxWrapper>
              {intolerances.map((intolerance, index) => (
                <StyledLastBox key={index}>
                  <input
                    type="checkbox"
                    name={intolerance}
                    id={intolerance}
                    checked={cat.health.intolerances.includes(intolerance)}
                  />
                  <label htmlFor={intolerance}>{intolerance}</label>
                </StyledLastBox>
              ))}
            </StyledCheckBoxWrapper>
          </div>
        </fieldset>
      </>

      <label htmlFor="goodFood-select">Good Acceptance: </label>
      <StyledInputGroup>
        <StyledSelect
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
        </StyledSelect>
        <StyledButton type="button" onClick={handleAddGoodFood}>
          Add
        </StyledButton>
      </StyledInputGroup>
      <div>
        <ul>
          {addedGoodFood.map((foodId) => {
            // help from a friend
            const food = catfoods.find((food) => food.id === foodId);
            if (food) {
              return (
                <StyledListItem key={food.id}>
                  {food.brand} - {food.variety}
                  <button onClick={() => handleRemoveGoodFood(index)}>X</button>
                </StyledListItem>
              );
            }
            return null;
          })}
        </ul>
      </div>

      <label htmlFor="badFood-select">Bad Acceptance: </label>
      <StyledInputGroup>
        <StyledSelect
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
        </StyledSelect>
        <StyledButton type="button" onClick={handleAddBadFood}>
          Add
        </StyledButton>
      </StyledInputGroup>
      <div>
        <ul>
          {addedBadFood.map((foodId) => {
            // help from a friend
            const food = catfoods.find((food) => food.id === foodId);
            if (food) {
              return (
                <StyledListItem key={food.id}>
                  {food.brand} - {food.variety}
                  <button onClick={() => handleRemoveBadFood(index)}>X</button>
                </StyledListItem>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <StyledSaveButton type="submit">Add Cat</StyledSaveButton>
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

  label {
    font-weight: bold;
  }

  input {
    max-width: 30%;
  }
`;

const StyledForm = styled.form`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  font-size: 1.3em;
  background-color: white;
  gap: 1rem;

  label,
  input {
    background-color: white;
  }
`;

const StyledCheckBoxWrapper = styled.article`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledSelect = styled.select`
  width: 100%;
  font-size: 0.6em;
  padding: 2%;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const StyledLastBox = styled.article`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const StyledButton = styled.button`
  text-align: center;
  margin: 0 auto;
  background-color: #1d5d9b;
  color: white;
  font-size: 15px;
`;

const StyledSaveButton = styled.button`
  text-align: center;
  margin: 0 auto;
  background-color: #1d5d9b;
  color: white;
  font-size: 20px;
`;

const StyledListItem = styled.li`
  list-style: none;
`;
