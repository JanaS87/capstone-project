import { useState } from "react";
import styled from "styled-components";

export default function EditBadFoodForm({
  onEditBadFood,
  onRemoveBadCat,
  food,
  foodList,
  catList,
  setCatList,
  setIsEditingBadCat,
}) {
  const [selectedBadCat, setSelectedBadCat] = useState("");
  const [addedBadCat, setAddedBadCat] = useState(food.cat.dislikes);

  function handleAddBadCat() {
    const catToAdd = selectedBadCat;
    if (!catToAdd) {
      return;
    }
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catToAdd) {
        if (cat.food.dislikes.includes(food.id)) {
          alert(`Cat is already in "Bad Acceptance"`);
          return cat;
        }
        if (cat.food.likes.includes(food.id)) {
          alert(`Cat is already in "Good Acceptance"`);
          return cat;
        }
        return {
          ...cat,
          food: {
            ...cat.food,
            dislikes: [...cat.food.dislikes, food.id],
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
    setAddedBadCat([...addedBadCat, catToAdd]);
    setSelectedBadCat("");
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const updatedFood = {
      ...food,
      cat: {
        dislikes: addedBadCat,
      },
    };

    onEditBadFood(updatedFood);
    setIsEditingBadCat(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledInputGroup>
          <StyledSelect
            id="bad-acceptance-select"
            name="bad-acceptance-select"
            onChange={(event) => setSelectedBadCat(event.target.value)}
          >
            <StyledOptions value={""}>-- Please choose a cat --</StyledOptions>
            {catList.map((cat) => (
              <StyledOptions key={cat.id} value={cat.id}>
                {cat.name}
              </StyledOptions>
            ))}
          </StyledSelect>
          <StyledButton type="button" onClick={handleAddBadCat}>
            Add
          </StyledButton>
          <StyledButton type="submit">Save</StyledButton>
        </StyledInputGroup>
      </form>
    </>
  );
}

const StyledInputGroup = styled.div`
  display: flex;
  gap: 0.8rem;
`;

const StyledSelect = styled.select`
  font-size: 1rem;
`;

const StyledOptions = styled.option`
  font-size: 1rem;
`;

const StyledButton = styled.button`
  text-align: center;
  margin: 0 auto;
  background-color: #f0caa3;
  color: #413f42;
  font-size: 20px;
  cursor: pointer;
`;
