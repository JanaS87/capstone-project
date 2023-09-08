import { useState } from "react";
import GlobalStyle from "../styles";
import { cats } from "@/data/catdata";
import { catfoods } from "@/data/catfooddata";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import LogoutButton from "@/components/LogoutButton/LogoutButton";
import Login from "@/components/Login/Login";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const { id } = router.query;

  const [catList, setCatList] = useLocalStorageState("cats", {
    defaultValue: cats,
  });
  const [foodList, setFoodList] = useLocalStorageState("catfoods", {
    defaultValue: catfoods,
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditingGoodCat, setIsEditingGoodCat] = useState(false);
  const [isEditingBadCat, setIsEditingBadCat] = useState(false);

  const [loggedIn, setLoggedIn] = useLocalStorageState("loggedIn");

  const cat = catList.find((cat) => cat.id.toString() === id);

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
    const catsWithoutDeletedCat = catList.filter(
      (cat) => cat.id !== deleteCat.id
    );

    setCatList(catsWithoutDeletedCat);

    toast.success("Cat successfully removed!");
    router.push("/overview");
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

  // refactoring this function to its full functionality! (with needed help from the internet like chatGPT and a developer friend)

  function forbiddenFoodForCat(food, cat) {
    const catAllergy = food.ingredients.some((ingredient) => {
      return cat?.health.allergies.some((allergy) => {
        return ingredient
          .toLowerCase()
          .split(" ")
          .includes(allergy.toLowerCase());
      });
    });
    const catIntolerance = food.ingredients.some((ingredient) => {
      return cat?.health.intolerances.some((intolerance) => {
        return ingredient
          .toLowerCase()
          .split(" ")
          .includes(intolerance.toLowerCase());
      });
    });
    const catDisease = cat?.health.diseases.some((disease) =>
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
    "Endoparasites (worms)": [],
    Diabetes: ["sugar", "carbohydrates"],
  };

  function handleLogout() {
    setLoggedIn(null);
    router.push("/");
  }

  return (
    <>
      <GlobalStyle />
      <ToastContainer />
      {loggedIn && (
        <LogoutButton loggedIn={loggedIn} handleLogout={handleLogout} />
      )}
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
        isEditingGoodCat={isEditingGoodCat}
        setIsEditingGoodCat={setIsEditingGoodCat}
        isEditingBadCat={isEditingBadCat}
        setIsEditingBadCat={setIsEditingBadCat}
        forbiddenFoodForCat={forbiddenFoodForCat}
        cat={cat}
        loggedIn={loggedIn}
        setLoggedIn={setLoggedIn}
        handleLogout={handleLogout}
      />
    </>
  );
}
