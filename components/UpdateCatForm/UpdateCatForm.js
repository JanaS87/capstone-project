import React, { useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import { catfoods } from "@/data/catfooddata";
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

  // was kann davon weg und was brauche ich???

  const [selectedGoodFood, setSelectedGoodFood] = useState([]);
  const [selectedBadFood, setSelectedBadFood] = useState([]);

  function handleGoodFoodChange(selectedOption) {
    checkFoodList(selectedOption);

    if (cat.food.likes.includes(selectedOption)) {
      const updatedLikedCatFood = cat.food.likes.filter(
        (catFood) => catFood !== selectedOption
      );
      setSelectedGoodFood(updatedLikedCatFood);
      setAddedGoodFood(updatedLikedCatFood);
    } else {
      const updatedLikedCatFood = [...cat.food.likes, selectedOption];
      setSelectedGoodFood(updatedLikedCatFood);
      setAddedGoodFood(updatedLikedCatFood);
    }
  }

  function handleBadFoodChange(selectedOption) {
    checkFoodList(selectedOption);

    if (cat.food.dislikes.includes(selectedOption)) {
      const updatedDislikedCatFood = cat.food.dislikes.filter(
        (catFood) => catFood !== selectedOption
      );
      setSelectedBadFood(updatedDislikedCatFood);
      setAddedBadFood(updatedDislikedCatFood);
    } else {
      const updatedDislikedCatFood = [...cat.food.dislikes, selectedOption];
      setSelectedBadFood(updatedDislikedCatFood);
      setAddedBadFood(updatedDislikedCatFood);
    }
  }

  // function handleGoodFoodChange(selectedOption) {
  //   checkFoodList(selectedOption);

  //   if (!cat.food.likes.includes(selectedOption)) {
  //     const updatedLikedCatFood = [...selectedGoodFood, selectedOption];
  //     setSelectedGoodFood(updatedLikedCatFood);
  //     console.log("update", updatedLikedCatFood);
  //   }

  //   if (!cat.food.likes.includes(selectedOption)) {
  //     const updatedLikedCatFood = cat.food.likes.filter(
  //       (catFood) => catFood !== selectedOption
  //     );
  //     setSelectedGoodFood(updatedLikedCatFood);
  //   }
  // }

  // function handleBadFoodChange(selectedOption) {
  //   checkFoodList(selectedOption);

  //   if (!cat.food.dislikes.includes(selectedOption)) {
  //     const updatedDislikedCatFood = [...selectedBadFood, selectedOption];
  //     setSelectedBadFood(updatedDislikedCatFood);
  //     console.log("update", updatedDislikedCatFood);
  //   }

  //   if (!cat.food.dislikes.includes(selectedOption)) {
  //     const updatedDislikedCatFood = cat.food.dislikes.filter(
  //       (catFood) => catFood !== selectedOption
  //     );
  //     setSelectedBadFood(updatedDislikedCatFood);
  //   }
  // }

  // state to save the chosen food to show it below the drop down
  const [addedGoodFood, setAddedGoodFood] = useState(cat.food.likes);
  const [addedBadFood, setAddedBadFood] = useState(cat.food.dislikes);

  function checkFoodList(selectedOption) {
    if (addedBadFood.includes(selectedOption)) {
      alert(`Food is already in "Bad Acceptance"`);
      return;
    } else if (!addedBadFood.includes(selectedOption)) {
      setSelectedBadFood(selectedOption);
    }

    if (addedGoodFood.includes(selectedOption)) {
      alert(`Food is already in "Good Acceptance"`);
      return;
    } else if (!addedGoodFood.includes(selectedOption)) {
      setSelectedGoodFood(selectedOption);
    }
  }

  function handleAddGoodFood() {
    setAddedGoodFood(selectedGoodFood);
    setSelectedGoodFood([]);
  }

  function handleAddBadFood() {
    setAddedBadFood(selectedBadFood);
    setSelectedBadFood([]);
  }

  // if the wrong food accidentally choosed

  function handleRemoveGoodFood(id) {
    const goodFoodListWithoutTheGiven = addedGoodFood.filter(
      (food) => food.id !== id
    );
    setAddedGoodFood(goodFoodListWithoutTheGiven);
  }

  function handleRemoveBadFood(id) {
    const badFoodListWithoutTheGiven = addedBadFood.filter(
      (food) => food.id !== id
    );
    setAddedBadFood(badFoodListWithoutTheGiven);
  }

  // updates the cat- state object when an input field changes
  function handleChange(event) {
    setCat({ ...cat, [event.target.name]: event.target.value || "" });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const catAllergies = allergies.filter((allergy) => data[allergy] === "on");

    const catDiseases = diseases.filter((disease) => data[disease] === "on");

    const catIntolerances = intolerances.filter(
      (intolerance) => data[intolerance] === "on"
    );

    // create new cat object at the end of the array
    const updatedCat = {
      ...cat,
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

    // update cat
    onEditCat(updatedCat);

    console.log(updatedCat);

    event.target.reset();

    router.push(`/cats/${cat.id}`);
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
                    defaultChecked={cat.health.allergies.includes(allergy)}
                    //onChange={handleChange}
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
                    defaultChecked={cat.health.diseases.includes(disease)}
                    //onChange={handleChange}
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
                    defaultChecked={cat.health.intolerances.includes(
                      intolerance
                    )}
                    //onChange={handleChange}
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
          onChange={(event) => checkFoodList(event.target.value)}
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
                  <button onClick={() => handleRemoveGoodFood(food.id)}>
                    X
                  </button>
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
          onChange={(event) => checkFoodList(event.target.value)}
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
                  <button onClick={() => handleRemoveBadFood(food.id)}>
                    X
                  </button>
                </StyledListItem>
              );
            }
            return null;
          })}
        </ul>
      </div>
      <StyledSaveButton type="submit">Save Cat</StyledSaveButton>
    </StyledForm>
  );
}

// Styling Section

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
