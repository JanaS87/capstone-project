import { cats } from "../../data/catdata";
import CatCard from "../CatCard/CatCard.js";
import { styled } from "styled-components";

export default function CatList() {
  return (
    <>
      <ul>
        {cats &&
          cats.map((cat) => (
            <li key={cat.id}>
              <CatCard cat={cat} />
            </li>
          ))}
      </ul>
    </>
  );
}
