import { useRouter } from "next/router";
import styled from "styled-components";
import Link from "next/link";
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
  cat,
}) {
  const router = useRouter();
  const { id } = router.query;

  // two way link (from the internet)
  const goBack = (event) => {
    event.preventDefault();
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

        <StyledAcceptanceSection>
          <StyledAcceptanceContainer>
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
                  setIsEditingGoodCat={setIsEditingGoodCat}
                />
                <StyledList>
                  {filteredCatLikes.length > 0 ? (
                    filteredCatLikes.map((catLike) => (
                      <StyledItem key={catLike.id}>
                        <StyledRemoveButton
                          type="button"
                          onClick={() =>
                            handleRemoveGoodCat(catLike.id, food.id)
                          }
                        >
                          X
                        </StyledRemoveButton>
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
          </StyledAcceptanceContainer>

          <StyledAcceptanceContainer>
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
                  setIsEditingBadCat={setIsEditingBadCat}
                />

                <StyledList>
                  {filteredCatDislikes.length > 0 ? (
                    filteredCatDislikes.map((dislike) => (
                      <StyledItem key={dislike.id}>
                        <StyledRemoveButton
                          type="button"
                          onClick={() =>
                            handleRemoveBadCat(dislike.id, food.id)
                          }
                        >
                          X
                        </StyledRemoveButton>
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
          </StyledAcceptanceContainer>
        </StyledAcceptanceSection>
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
  box-shadow: 0px 1px 5px -2px #7f8487;
  border-radius: 10px/20px;
  max-width: 95%;
  list-style-type: none;
  margin-bottom: 1.3rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(1px);
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
  margin-bottom: 2%;
  margin-top: 3%;
`;

const StyledLink = styled(Link)`
  max-width: 20%;
  background: transparent;
  backdrop-filter: blur(2px);
  color: #f0caa3;
  font-size: 1em;
  margin-left: 3.5%;
  margin-top: 2%;
  padding: 0.25em 1em;
  border: 2px solid #f0caa3;
  border-radius: 3px;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: white;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
  margin-bottom: 0;
`;

const StyledHeading2 = styled.h2`
  color: white;
  font-size: 1.3rem;
  letter-spacing: 2.5px;
  text-shadow: 2px 2px 10px #f0caa3;
  margin-top: 2%;
  text-align: center;
`;

const StyledButton = styled.button`
  text-align: center;
  margin-top: 23%;
  margin-left: 3.5%;
  background-color: #f0caa3;
  color: #413f42;
  font-size: 20px;
  height: 30px;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  max-width: 80%;
`;

const StyledAcceptanceSection = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  justify-content: flex-start;
`;

const StyledAcceptanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 80%;
  margin: 0 auto;
  margin-left: 0;
`;

const StyledRemoveButton = styled.button`
  margin-right: 3%;
`;
