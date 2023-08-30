import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { useState } from "react";

export default function FoodDetailsPage({
  catList,
  setCatList,
  catFoods,
  foodList,
  handleUpdateFood,
}) {
  const router = useRouter();
  const { id } = router.query;
  const [isEditing, setIsEditing] = useState(false);

  if (!id) return <h1>Loading</h1>;

  if (!food) {
    return (
      <>
        <h1>Food not found</h1>
        <Link href={"/foodsearch"}>Back</Link>
      </>
    );
  }

  const food = catFoods.find((food) => food.id.toString() === id);

  const filteredCatLikes = catList.filter((cat) => cat.food.likes.includes(id));

  const filteredCatDislikes = catList.filter((cat) =>
    cat.food.dislikes.includes(id)
  );

  function handleEdit() {
    setIsEditing(true);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    const updatedFood = {
      ...food,
      cat: {
        likes: addedGoodCat,
        dislikes: addedBadCat,
      },
    };

    // hier fehlt noch handleUpdateFood()

    setIsEditing(false);
  }

  return (
    <>
      <StyledHeaderWrapping>
        <StyledHeading>{food.brand}</StyledHeading>
        <StyledHeading2>
          <span>{food.variety}</span>
        </StyledHeading2>
      </StyledHeaderWrapping>
      <StyledSection>
        <StyledGrid>
          <div>
            <h3>Ingridients: </h3>
            <StyledList>
              {food.ingredients.map((ingredient, index) => (
                <StyledItem key={index}>{ingredient}</StyledItem>
              ))}
            </StyledList>
          </div>
          <div>
            <h3>Analytical Constituents: </h3>
            <StyledList>
              {food.analyticalConstituents.map((analytical, index) => (
                <StyledItem key={index}>{analytical}</StyledItem>
              ))}
            </StyledList>
          </div>
        </StyledGrid>

        <StyledGrid>
          <div>
            <h3>Additives: </h3>
            <StyledList>
              {food.additives.map((additive, index) => (
                <StyledItem key={index}>{additive}</StyledItem>
              ))}
            </StyledList>
          </div>
          <div>
            <h3>Food Type: </h3>
            <p>{food.type}</p>
          </div>
        </StyledGrid>
        <StyledGrid>
          <div>
            <h3>Good Acceptance: </h3>
            {isEditing ? (
              <>
                <form onSubmit={handleSubmit}>
                  <select
                    id="good-acceptance-select"
                    name="good-acceptance-select"
                    onChange={(event) => setSelectedGoodCat(event.target.value)}
                  >
                    <option value={""}>-- Please choose a cat --</option>
                    {catList.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                  <button type="button" onClick={handleAddGoodCat}>
                    Add
                  </button>

                  <StyledList>
                    {filteredCatLikes.length > 0 ? (
                      filteredCatLikes.map((catLike) => (
                        <StyledItem key={catLike.id}>
                          <button
                            type="button"
                            onClick={() => handleRemoveGoodCat(catLike.id)}
                          >
                            X
                          </button>
                          {catLike.name}
                        </StyledItem>
                      ))
                    ) : (
                      <StyledItem>
                        Oh, it seems no cat liked this food{" "}
                      </StyledItem>
                    )}
                  </StyledList>
                </form>
              </>
            ) : (
              <StyledList>
                {filteredCatLikes.length > 0 ? (
                  filteredCatLikes.map((catLike) => (
                    <StyledItem key={catLike.id}>{catLike.name}</StyledItem>
                  ))
                ) : (
                  <StyledItem>Oh, it seems no cat liked this food </StyledItem>
                )}
              </StyledList>
            )}
          </div>
          <div>
            <h3>Bad Acceptance: </h3>
            {isEditing ? (
              <>
                <select
                  id="bad-acceptance-select"
                  name="bad-acceptance-select"
                  onChange={(event) => setSelectedBadCat(event.target.value)}
                >
                  <option value={""}>-- Please choose a cat --</option>
                  {catList.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.name}
                    </option>
                  ))}
                </select>
                <button type="button" onClick={handleAddBadCat}>
                  Add
                </button>
                <StyledList>
                  {filteredCatDislikes.length > 0 ? (
                    filteredCatDislikes.map((dislike) => (
                      <StyledItem key={dislike.id}>
                        <button
                          type="button"
                          onClick={() => handleRemoveBadCat(dislike.id)}
                        >
                          X
                        </button>
                        {dislike.name}
                      </StyledItem>
                    ))
                  ) : (
                    <StyledItem>Great, no cat hated this food</StyledItem>
                  )}
                </StyledList>
              </>
            ) : (
              <StyledList>
                {filteredCatDislikes.length > 0 ? (
                  filteredCatDislikes.map((dislike) => (
                    <StyledItem key={dislike.id}>{dislike.name}</StyledItem>
                  ))
                ) : (
                  <StyledItem>Great, no cat hated this food</StyledItem>
                )}
              </StyledList>
            )}
          </div>
        </StyledGrid>
        {isEditing ? (
          <StyledButton type="button" onClick={handleSave}>
            Save
          </StyledButton>
        ) : (
          <StyledButton type="button" onClick={handleEdit}>
            Edit
          </StyledButton>
        )}
      </StyledSection>
      <StyledLink href={"/foodsearch"}>Back</StyledLink>
    </>
  );
}

const StyledHeaderWrapping = styled.div`
  gap: 0;
`;
const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1.3rem;
  box-shadow: 0px 1px 5px -2px #ff6d60;
  border-radius: 10px/20px;
  background-color: white;
  max-width: 93%;
  list-style-type: none;
  margin-bottom: 1.3rem;
  margin-left: 1rem;
`;
const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`;

const StyledList = styled.ul`
  margin: 2px;
  padding: 0;
`;

const StyledItem = styled.li`
  list-style: none;
  margin-left: 0;
`;

const StyledLink = styled(Link)`
  background: white;
  color: red;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid red;
  border-radius: 3px;
  cursor: pointer;
  text-decoration: none;
  max-width: 20%;
  &:hover {
    background-color: #f86f03;
    color: white;
  }
`;

const StyledHeading = styled.h1`
  margin-left: 5%;
  margin-bottom: 0;
`;

const StyledHeading2 = styled.h2`
  margin-left: 5%;
  margin-top: 2%;
`;

const StyledButton = styled.button`
  margin-left: auto;
  margin-right: 1rem;
`;
