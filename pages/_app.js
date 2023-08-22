import { useState } from "react";
import GlobalStyle from "../styles";
import { cats } from "@/data/catdata";
import { catfoods } from "@/data/catfooddata";

export default function App({ Component, pageProps }) {
  const [catList, setCatList] = useState(cats);

  function handleAddCat(newCat) {
    console.log("handleAddCat called with:", newCat);
    // update catList with new cat
    setCatList([...catList, newCat]);
  }

  return (
    <>
      <GlobalStyle />
      <Component
        {...pageProps}
        handleAddCat={handleAddCat}
        catList={catList}
        catFoods={catfoods}
      />
    </>
  );
}
