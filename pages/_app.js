import { useState } from "react";
import GlobalStyle from "../styles";
import { cats } from "@/data/catdata";
import { catfoods } from "@/data/catfooddata";

export default function App({ Component, pageProps }) {
  const [catList, setCatList] = useState(cats);
  const [searchTerm, setSearchTerm] = useState("");

  function handleAddCat(newCat) {
    // update catList with new cat
    setCatList([...catList, newCat]);
  }

  function handleSearchTermChange(event) {
    setSearchTerm(event.target.value);
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
      />
    </>
  );
}
