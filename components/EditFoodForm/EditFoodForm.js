export default function EditFoodForm({ onEditFood, food }) {
  const [selectedGoodCat, setSelectedGoodCat] = useState("");
  const [selectedBadCat, setSelectedBadCat] = useState("");

  const [addedGoodCat, setAddedGoodCat] = useState(foodList.cat.likes);
  const [addedBadCat, setAddedBadCat] = useState(foodList.cat.dislikes);

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
  }

  function handleAddBadCat() {
    const catToAdd = selectedGoodCat;
    if (!catToAdd) {
      return;
    }
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catToAdd) {
        if (cat.food.dislikes.includes(id)) {
          alert(`Cat is already in "Bad Acceptance"`);
          return cat;
        }
        if (cat.food.likes.includes(id)) {
          alert(`Cat is already in "Good Acceptance"`);
          return cat;
        }
        return {
          ...cat,
          food: {
            ...cat.food,
            dislikes: [...cat.food.dislikes, id],
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
  }

  function handleRemoveGoodCat(catId) {
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catId) {
        return {
          ...cat,
          food: {
            ...cat.food,
            likes: cat.food.likes.filter((foodId) => foodId !== id),
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
  }

  function handleRemoveBadCat(catId) {
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catId) {
        return {
          ...cat,
          food: {
            ...cat.food,
            dislikes: cat.food.dislikes.filter((foodId) => foodId !== id),
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
  }
}
