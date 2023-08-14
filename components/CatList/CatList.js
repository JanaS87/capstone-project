import { cats } from "./data/catdata.js";

export default function CatList() {
  return (
    <>
      <ul>
        {cats.map((cat) => (
          <li key={cat.id}>{cat}</li>
        ))}
      </ul>
    </>
  );
}
