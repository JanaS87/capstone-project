import React, { useState } from "react";

export default function NewCatForm({ onAddCat }) {
  const [cat, setCat] = useState({
    id: "",
    name: "",
    age: "",
    allergies: "",
    diseases: "",
    intolerances: "",
    goodAcceptance: "",
    badAcceptance: "",
  });

  // updates the cat- state object when an input field changes
  const handleChange = (event) => {
    setCat({ ...cat, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // generate new ID
    const newId = String(cats.length + 1);

    // create new cat object at the end of the array
    const newCat = { ...cat, id: newId };

    // add new cat to the list
    onAddCat(newCat);

    event.target.reset();
  };
}
