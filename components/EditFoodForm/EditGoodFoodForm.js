import { useState } from "react";
import styled from "styled-components";

export default function EditGoodFoodForm({
  onEditGoodFood,
  onRemoveGoodCat,
  food,
  foodList,
  catList,
  setCatList,
  setIsEditingGoodCat,
}) {
  const [selectedGoodCat, setSelectedGoodCat] = useState("");
  const [addedGoodCat, setAddedGoodCat] = useState(food.cat.likes);

  function handleAddGoodCat() {
    const catToAdd = selectedGoodCat;
    if (!catToAdd) {
      return;
    }
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catToAdd) {
        if (cat.food.likes.includes(food.id)) {
          alert(`Cat is already in "Good Acceptance"`);
          return cat;
        }
        if (cat.food.dislikes.includes(food.id)) {
          alert(`Cat is already in "Bad Acceptance"`);
          return cat;
        }
        return {
          ...cat,
          food: {
            ...cat.food,
            likes: [...cat.food.likes, food.id],
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
    setAddedGoodCat([...addedGoodCat, catToAdd]);
    setSelectedGoodCat("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const updatedFood = {
      ...food,
      cat: {
        likes: data.addedGoodCat,
      },
    };

    onEditGoodFood(updatedFood);
    setIsEditingGoodCat(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <StyledInputGroup>
        <StyledSelect
          id="good-acceptance-select"
          name="good-acceptance-select"
          onChange={(event) => setSelectedGoodCat(event.target.value)}
        >
          <StyledOptions value={""}>-- Please choose a cat --</StyledOptions>
          {catList.map((cat) => (
            <StyledOptions key={cat.id} value={cat.id}>
              {cat.name}
            </StyledOptions>
          ))}
        </StyledSelect>
        <StyledButton type="button" onClick={handleAddGoodCat}>
          Add
        </StyledButton>
        <StyledButton type="submit">Save</StyledButton>
      </StyledInputGroup>
    </form>
  );
}

const StyledSelect = styled.select`
  font-size: 1rem;
`;

const StyledOptions = styled.option`
  font-size: 1rem;
`;

const StyledInputGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const StyledButton = styled.button`
  text-align: center;
  margin: 0 auto;
  background-color: #f0caa3;
  color: #413f42;
  font-size: 20px;
  cursor: pointer;
`;
