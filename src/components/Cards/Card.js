import styled from "styled-components";
import thumbsUp from "../../assets/img/thumbs-up.svg";
import thumbsDown from "../../assets/img/thumbs-down.svg";
import { Thumbs } from "./Thumbs";
import moment from "moment";

export const Card = ({ item, gridLayout }) => {
  const { positive, negative } = item.votes;
  const thumbsUpWidth = (positive / (negative + positive)) * 100;
  const thumbsDownWidth = (negative / (negative + positive)) * 100;

  const isLiked = () =>
    positive > negative ? (
      <Thumbs direction="up" />
    ) : (
      <Thumbs direction="down" />
    );

  const lastTimeUpdate = (timeUpdated) => {
    let difference = moment().diff(moment(timeUpdated), "days");

    if (difference > 30 && difference < 365) {
      return `${moment().diff(moment(timeUpdated), "months")} months ago`;
    }

    if (difference > 364) {
      return `${moment().diff(moment(timeUpdated), "years")} year ago`;
    }

    return `${difference} days ago`;
  };

  return (
    <Container picture={item.picture} gridLayout={gridLayout}>
      <Description gridLayout={gridLayout}>
        {isLiked()}
        <div className="title-wrapper">
          <label>{item.name}</label>
          <div>{item.description}</div>
        </div>
        <div>
          <label>
            {`${lastTimeUpdate(item.lastUpdated)} in ${item.category}`}
          </label>
          <div className="vote-wrapper">
            <Thumbs direction="up" />
            <Thumbs direction="down" />
            <button>Vote Now</button>
          </div>
        </div>
      </Description>
      <PoolWrapper
        positiveWidth={thumbsUpWidth}
        negativeWidth={thumbsDownWidth}
      >
        <div className="thumbs-up-container">
          <img src={thumbsUp} alt="thumbs up" />
          <span>{thumbsUpWidth.toFixed(1)}%</span>
        </div>
        <div className="thumbs-down-container">
          <img src={thumbsDown} alt="thumbs down" />
          <span>{thumbsDownWidth.toFixed(1)}%</span>
        </div>
      </PoolWrapper>
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (max-width: 500px) {
    width: 348px;
    height: 348px;
    background-size: auto auto;
  }

  width: ${(props) => (props.gridLayout === "list" ? "100%" : "348px")};
  height: ${(props) => (props.gridLayout === "list" ? "170px" : "348px")};
  left: 170px;
  top: 950px;
  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url(${(props) => props.picture});
  background-repeat: no-repeat;
  background-size: ${(props) =>
    props.gridLayout === "list" ? "267px 100%" : "auto auto"};
  background-position: , right;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const Description = styled.div`
  @media only screen and (max-width: 500px) {
    margin-left: 0;
  }
  display: grid;
  grid-template-rows: repeat(4, auto);
  color: white;
  margin-left: ${(props) => (props.gridLayout === "list" ? "250px" : "0")};

  h2 {
    color: white;
  }

  p {
    text-overflow: ellipsis;
  }

  .title-wrapper {
  }

  .vote-wrapper {
    display: flex;

    button {
      width: 135px;
      height: 35px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid #ffffff;
      color: #ffffff;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
    }
  }

  background: ${(props) =>
    props.gridLayout === "list" &&
    `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      #888888 19.79%,
      #666666 50%,
      rgba(51, 51, 51, 0.6) 71.88%
    );`};
    
`;

const PoolWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36px;

  .thumbs-up-container {
    width: ${(props) => props.positiveWidth}%;
    background-color: rgba(60, 187, 180, 0.6);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 0.5rem;
    color: white;
  }

  .thumbs-down-container {
    width: ${(props) => props.negativeWidth}%;
    background: rgba(249, 173, 29, 0.6);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 0.5rem;
    color: white;
  }

  img {
    margin-right: 0.5rem;
  }
`;
