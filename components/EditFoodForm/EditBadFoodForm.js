import { useState } from "react";

export default function EditBadFoodForm({
  onEditBadFood,
  onRemoveBadCat,
  food,
  foodList,
  catList,
  setCatList,
  setIsEditingBad,
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
    setIsEditingBad(false);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <select
          id="bad-acceptance-select"
          name="bad-acceptance-select"
          onChange={(event) => setSelectedBadCat(event.target.value)}
        >
          <option value={""}>-- Please choose a cat --</option>
          {catList.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <button type="button" onClick={handleAddBadCat}>
          Add
        </button>
        <button type="submit">Save</button>
      </form>
    </>
  );
}
