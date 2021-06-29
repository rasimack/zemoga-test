import { useState } from "react";
import arrowIcon from "../../assets/icons/Triangle.png";
import styled from "styled-components";

export const Button = ({ setGridLayout }) => {
  const [isActive, setIsActive] = useState(false);

  const onClickHandler = () => setIsActive(!isActive);

  return (
    <Container>
      <button onClick={onClickHandler}>
        List <img src={arrowIcon} alt="arrow icon" />
      </button>
      {isActive && (
        <ButtonList>
          <button onClick={() => setGridLayout("list")}>List</button>
          <button onClick={() => setGridLayout("grid")}>Grid</button>
        </ButtonList>
      )}
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (max-width: 500px) {
    display: none;
  }

  button {
    width: 173px;
    height: 36px;
    border: 2px solid #333333;
  }
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
`;
