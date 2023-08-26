import styled from "styled-components";
import Button from "../Button/Button";

export default function HealthIssuesModal({ onClose }) {
  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <p>Allergies: </p>
          <StyledCheckBoxWrapper>
            {allergies.map((allergy, index) => (
              <StyledCheckBoxWrapper key={index}>
                <input type="checkbox" name={allergy} id={allergy} />
                <label htmlFor={allergy}>{allergy}</label>
              </StyledCheckBoxWrapper>
            ))}
          </StyledCheckBoxWrapper>
        </div>
        <div>
          <p>Diseases: </p>
          <StyledCheckBoxWrapper>
            {diseases.map((disease, index) => (
              <StyledCheckBoxWrapper key={index}>
                <input type="checkbox" name={disease} id={disease} />
                <label htmlFor={disease}>{disease}</label>
              </StyledCheckBoxWrapper>
            ))}
          </StyledCheckBoxWrapper>
        </div>
        <div>
          <p>Intolerances: </p>
          <StyledCheckBoxWrapper>
            {intolerances.map((intolerance, index) => (
              <StyledLastBox key={index}>
                <input type="checkbox" name={intolerance} id={intolerance} />
                <label htmlFor={intolerance}>{intolerance}</label>
              </StyledLastBox>
            ))}
          </StyledCheckBoxWrapper>
        </div>
        <Button type="submit">Save</Button>
      </form>
      <button onClick={handleCloseClick}>X</button>
    </>
  );
}

const StyledCheckBoxWrapper = styled.article`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const StyledLastBox = styled.article`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;
