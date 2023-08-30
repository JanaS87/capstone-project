import { useState } from "react";

export default function EditGoodFoodForm({
  onEditGoodFood,
  onRemoveGoodCat,
  food,
  catList,
  setCatList,
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
        if (cat.food.likes.includes(id)) {
          alert(`Cat is already in "Good Acceptance"`);
          return cat;
        }
        if (cat.food.dislikes.includes(id)) {
          alert(`Cat is already in "Bad Acceptance"`);
          return cat;
        }
        return {
          ...cat,
          food: {
            ...cat.food,
            likes: [...cat.food.likes, id],
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
        likes: addedGoodCat,
      },
    };

    onEditGoodFood(updatedFood);
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        id="good-acceptance-select"
        name="good-acceptance-select"
        onChange={(event) => setSelectedGoodCat(event.target.value)}
      >
        <option value={""}>-- Please choose a cat --</option>
        {catList.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
      <button type="button" onClick={handleAddGoodCat}>
        Add
      </button>
      <button type="submit">Save</button>
    </form>
  );
}
