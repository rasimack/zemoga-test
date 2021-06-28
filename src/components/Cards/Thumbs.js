import thumbsUp from "../../assets/img/thumbs-up.svg";
import thumbsDown from "../../assets/img/thumbs-down.svg";
import styled from "styled-components";

export const Thumbs = ({ direction }) => (
  <>
    {direction === "up" ? (
      <ThumbsUp>
        <img src={thumbsUp} alt="thumbs up" />
      </ThumbsUp>
    ) : (
      <ThumbsDown>
        <img src={thumbsDown} alt="thumbs down" />
      </ThumbsDown>
    )}
  </>
);

const ThumbsUp = styled.div`
  background: red;
  height: 30px;
  width: 30px;
  background: #3cbbb4cc;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThumbsDown = styled.div`
  height: 30px;
  width: 30px;
  background: #fbbd4a;
  display: flex;
  align-items: center;
  justify-content: center;
`;
