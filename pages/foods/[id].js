import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
import { useEffect, useState } from "react";
import EditGoodFoodForm from "@/components/EditFoodForm/EditGoodFoodForm";
import EditBadFoodForm from "@/components/EditFoodForm/EditBadFoodForm";

export default function FoodDetailsPage({
  catList,
  setCatList,
  catFoods,
  foodList,
  handleUpdateFood,
  handleRemoveGoodCat,
  handleRemoveBadCat,
  isEditingGoodCat,
  setIsEditingGoodCat,
  isEditingBadCat,
  setIsEditingBadCat,
}) {
  const router = useRouter();
  const { id } = router.query;

  const goBack = (e) => {
    e.preventDefault();
    window.history.back();
  };

  const food = catFoods.find((food) => food.id.toString() === id);

  if (!id) return <h1>Loading</h1>;

  if (!food) {
    return (
      <>
        <h1>Food not found</h1>
        <Link href={"/foodsearch"}>Back</Link>
      </>
    );
  }

  const filteredCatLikes = catList.filter((cat) => cat.food.likes.includes(id));

  const filteredCatDislikes = catList.filter((cat) =>
    cat.food.dislikes.includes(id)
  );

  function handleEditGoodCat() {
    setIsEditingGoodCat(true);
  }

  function handleEditBadCat() {
    setIsEditingBadCat(true);
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
            <StyledContainer>
              <h3>Good Acceptance: </h3>
              <StyledButton type="button" onClick={handleEditGoodCat}>
                Edit
              </StyledButton>
            </StyledContainer>

            {isEditingGoodCat ? (
              <>
                <EditGoodFoodForm
                  onEditGoodFood={handleUpdateFood}
                  food={food}
                  onRemoveGoodCat={handleRemoveGoodCat}
                  catList={catList}
                  setCatList={setCatList}
                  setIsEditingGood={setIsEditingGood}
                />
                <StyledList>
                  {filteredCatLikes.length > 0 ? (
                    filteredCatLikes.map((catLike) => (
                      <StyledItem key={catLike.id}>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveGoodCat(catLike.id, food.id)
                          }
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
            <StyledContainer>
              <h3>Bad Acceptance: </h3>
              <StyledButton type="button" onClick={handleEditBadCat}>
                Edit
              </StyledButton>
            </StyledContainer>
            {isEditingBadCat ? (
              <>
                <EditBadFoodForm
                  onEditBadFood={handleUpdateFood}
                  food={food}
                  onRemoveBadCat={handleRemoveBadCat}
                  catList={catList}
                  setCatList={setCatList}
                  setIsEditingBad={setIsEditingBad}
                />

                <StyledList>
                  {filteredCatDislikes.length > 0 ? (
                    filteredCatDislikes.map((dislike) => (
                      <StyledItem key={dislike.id}>
                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveBadCat(dislike.id, food.id)
                          }
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
      </StyledSection>
      <StyledLink href="#" onClick={goBack}>
        Back
      </StyledLink>
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

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
