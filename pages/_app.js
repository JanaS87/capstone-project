import { useState } from "react";
import GlobalStyle from "../styles";
import { cats } from "@/data/catdata";
import { catfoods } from "@/data/catfooddata";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [catList, setCatList] = useLocalStorageState("cats", {
    defaultValue: cats,
  });
  const [foodList, setFoodList] = useLocalStorageState("catfoods", {
    defaultValue: catfoods,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditingGoodCat, setIsEditingGoodCat] = useState(false);
  const [isEditingBadCat, setIsEditingBadCat] = useState(false);

  function handleAddCat(newCat) {
    // update catList with new cat
    setCatList([...catList, newCat]);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
  }

  // update an existing cat
  function handleUpdateCat(updatedCat) {
    const updatedCats = catList.map((cat) => {
      if (updatedCat.id !== cat.id) {
        return cat;
      }
      return updatedCat;
    });
    setCatList(updatedCats);
  }

  // deleting an existing cat
  function handleDeleteCat(deleteCat) {
    const catsWithoutDeletedCat = cats.filter((cat) => cat.id !== deleteCat.id);

    setCatList(catsWithoutDeletedCat);

    toast.success("Cat successfully removed!");
    router.push("/");
  }

  // update food
  function handleUpdateFood(updatedFood) {
    const updatedFoods = foodList.map((food) => {
      if (updatedFood.id !== food.id) {
        return food;
      }
      return updatedFood;
    });
    setFoodList(updatedFoods);
  }
  // remove cat from the good acceptance (food detail page)
  function handleRemoveGoodCat(catId, foodId) {
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catId) {
        return {
          ...cat,
          food: {
            ...cat.food,
            likes: cat.food.likes.filter((id) => id !== foodId),
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
  }

  function handleRemoveBadCat(catId, foodId) {
    const updatedCatList = catList.map((cat) => {
      if (cat.id === catId) {
        return {
          ...cat,
          food: {
            ...cat.food,
            dislikes: cat.food.dislikes.filter((id) => id !== foodId),
          },
        };
      }
      return cat;
    });
    setCatList(updatedCatList);
  }

  function forbiddenFoodForCat(food, cat) {
    const catAllergy = food.ingredients.some((ingredient) =>
      cat.health.allergies.includes(ingredient.toLowerCase())
    );
    const catIntolerance = food.ingredients.some((ingredient) =>
      cat.health.intolerances.includes(ingredient.toLowerCase())
    );
    const catDisease = cat.health.diseases.some((disease) =>
      food.analyticalConstituents.some((constituent) => {
        const constituentName = constituent
          .split(" ")[0]
          .split("(")[0]
          .trim()
          .toLowerCase();
        return badIngredientsForCatDisease[disease].includes(constituentName);
      })
    );
    return catAllergy || catIntolerance || catDisease;
  }

  const badIngredientsForCatDisease = {
    "Feline Rhinitis": ["carbohydrates"],
    "CNI (chronic renal insufficiency)": [
      "crude protein",
      "phosphorus",
      "natrium",
    ],
    "Feline Epidemic": [],
    "Ectoparasites (flea, ticks, ear mites)": [],
    "Endoparasites (worms)": [],
    Diabetes: ["sugar", "carbohydrates"],
  };

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      <Component
        {...pageProps}
        handleAddCat={handleAddCat}
        catList={catList}
        setCatList={setCatList}
        catFoods={catfoods}
        foodList={foodList}
        setFoodList={setFoodList}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchTermChange={handleSearchTermChange}
        handleUpdateCat={handleUpdateCat}
        handleDeleteCat={handleDeleteCat}
        handleUpdateFood={handleUpdateFood}
        handleRemoveGoodCat={handleRemoveGoodCat}
        handleRemoveBadCat={handleRemoveBadCat}
        isEditingGood={isEditingGoodCat}
        setIsEditingGood={setIsEditingGoodCat}
        isEditingBad={isEditingBadCat}
        setIsEditingBad={setIsEditingBadCat}
        forbiddenFoodForCat={forbiddenFoodForCat}
      />
    </>
  );
}
