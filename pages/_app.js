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
  function handleUpdate(updatedCat) {
    const updatedCats = cats.map((cat) => {
      if (updatedCat.id !== cat.id) {
        return cat;
      }
      return updatedCat;
    });
    setCatList(updatedCats);
  }

  function handleDelete(deleteCat) {
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
        handleUpdate={handleUpdate}
        handleDelete={handleDelete}
      />
    </>
  );
}
