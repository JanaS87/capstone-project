import { cats } from "@/data/catdata";
import Button from "@/components/Button/Button";
import { useRouter } from "next/router";

const CatDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // if the id is not available
  if (!id) return <p>Loading</p>;

  // find the cat with the right id
  const cat = cats.find((cat) => cat.id.toString() === id);

  // if cat is not found
  if (!cat) return <p>Cat not found</p>;

  return (
    <>
      <h1>{cat.name}</h1>
      <section>
        <p>Age: {cat.age}</p>
      </section>
      <section>
        <p>Allergies, Diseases, Intolerances:</p>
        <p>
          {cat.allergies}, {cat.diseases}, {cat.intolerances}
        </p>
      </section>
      <section>
        <p>Good Acceptance: </p>
        <p>{cat.goodAcceptance}</p>
      </section>
      <section>
        <p>Bad Acceptance: </p>
        <p>{cat.badAcceptance}</p>
      </section>
      <Button />
    </>
  );
};

export default CatDetail;
