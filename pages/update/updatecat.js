import NewCatForm from "@/components/NewCatForm/NewCatForm";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useLocalStorageState from "use-local-storage-state";

export default function UpdateCat({ catList, catFoods }) {
  const router = useRouter();
  const [cat, setCat] = useLocalStorageState("cat", {});

  useEffect(() => {
    const { id } = router.query;
    const catData = getCatDataFromLocalStorage(id);
    setCat(catData);
  }, [router.query, setCat]);

  return (
    <>
      <div>
        <h1>{cat.name}</h1>
        <h2>What would you like to change?</h2>
      </div>
      <NewCatForm onSubmit={handleSubmit}>
        <input
          type="text"
          value={cat.name}
          onChange={(event) => setCat({ ...cat, name: event.target.value })}
        />
      </NewCatForm>
      <Link href={`/cats/${id}`}>Back</Link>
    </>
  );
}
