import { useState } from "react";
import GlobalStyle from "../styles";
import { cats } from "@/data/catdata";
import { catfoods } from "@/data/catfooddata";
import useLocalStorageState from "use-local-storage-state";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const [catList, setCatList] = useLocalStorageState("cats", {
    defaultValue: cats,
  });
  const [searchTerm, setSearchTerm] = useState("");

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

    router.push("/");
    setCatList(catsWithoutDeletedCat);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAddCat={handleAddCat}
        catList={catList}
        catFoods={catfoods}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearchTermChange={handleSearchTermChange}
        handleUpdateCat={handleUpdateCat}
        handleDeleteCat={handleDeleteCat}
      />
    </>
  );
}
